import { useParams } from 'react-router-dom';
import './styles.css';
import { useEffect, useRef, useState } from 'react';
import {
  usePushToKioskQueueByIdMutation,
  usePushToKioskRequestIdMutation,
} from '@services/api';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '@pages/constants'

const GameController = () => {
  const socket = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  const [status, setStatus] = useState(null);
  const [player, setPlayer] = useState('');
  const [gameAlreadyRunning, setGameAlreadyRunning] = useState(false);
  const navigate = useNavigate()

  const [pushToKioskQueueById, result] = usePushToKioskRequestIdMutation();

  const check = async () => {
    const response: any = await pushToKioskQueueById({
      id: 1,
      type: 'game_two_players',
      name: 'tug_of_war',
    });
    if (response.error) {
      setGameAlreadyRunning(true);
    }
  };

  useEffect(() => {
    check();
    socket.current = (io as any).connect(`${BASE_URL}:5050`, {
      query: {
        // type: 'playerA',
        // screenId: 123,
        // gameRoomId: 'someRandomId',
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    socket.current.on('connect', () => {});
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
          navigate('/game-won')
        }
        else{
          navigate('/game-lost')
        }
        socket.current.disconnect();
      });
      // push to kiosk queue succeeded. now waiting for the ad to finish
      // once finished, show the controller
      // socket.current.on('show_buttons', () => {
      console.log('result fetching...');
      // setShowButtons(true);
      // });
    } else {
      // eslint-disable-next-line no-lonely-if
      if (result.error) {
        // return back TODO
        console.log('TODO');
      }
      // waiting for the second player to scan
    }
  }, [result.data]);

  if (!gameAlreadyRunning) {
    return (
      <div>
        {!showButtons ? (
          <p className='game-header'>Waiting for game to start</p>
        ) : (
          <button
            className='game-button'
            type='button'
            onClick={() => {
              socket.current.emit('button_click', { player });
            }}
          >
            Player
          </button>
        )}
      </div>
    );
  }
  return <p className='game-header'>Game is already running</p>;
};

export default GameController;
