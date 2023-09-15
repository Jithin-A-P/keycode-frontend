
import { useParams } from 'react-router-dom';
import './styles.css';
import { useEffect, useRef, useState } from 'react';
import { usePushToKioskQueueByIdMutation, usePushToKioskRequestIdMutation } from '@services/api';
import { io } from 'socket.io-client';

const GameController = () => {
  const socket = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  const [status, setStatus] = useState(null);
  const [player, setPlayer] = useState('');

  const [pushToKioskQueueById, result] = usePushToKioskRequestIdMutation();

  useEffect(() => {
    pushToKioskQueueById({id: 123, type: "game_two_players", name: "tug_of_war"});
    socket.current = (io as any).connect('http://localhost:5050', {
      query: {
        // type: 'playerA',
        // screenId: 123,
        // gameRoomId: 'someRandomId',
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    socket.current.on('connect', ()=> {
     
    });
    socket.current.on('show_buttons', () => {
      setShowButtons(true);
    });
    
  }, []);

  useEffect(() => {
    if (result.data && result.data.data) {
      const playerName = result.data.data.player;
      setPlayer(playerName);
      socket.current.on('game_ended', (data) => {
        console.log(data.winner, playerName, data.winner === playerName );
        if(data.winner === playerName){
          setStatus(true);
        }
        else{
          setStatus(false)
        }
      });
      // push to kiosk queue succeeded. now waiting for the ad to finish
      // once finished, show the controller
      // socket.current.on('show_buttons', () => {
        console.log("result fetching...")
        // setShowButtons(true);
      // });
    } else {
      // eslint-disable-next-line no-lonely-if
      if(result.error){
        // return back TODO
        console.log("TODO")
      }
      // waiting for the second player to scan
    }
  }, [result.data])
  
  return (
    <div>
      {status !== null ? status: 'Game runnning'}
      {!showButtons ? (
        'Waiting for game to start'
      ) : (
        <button type='button'
          onClick={() => {
            socket.current.emit("button_click", {player});
          }}
        >
          Player
        </button>
      )}
    </div>
  );
};

export default GameController;
