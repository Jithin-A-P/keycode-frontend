import { Button } from '@components';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import io from 'socket.io-client';

const Player = () => {
  const socket = useRef(null);
  const [showButtons, setShowButton] = useState(false);
  const [player, setPlayer] = useState('');
  useEffect(() => {
    socket.current = (io as any).connect('http://192.168.3.186:5050', {
      query: {
        type: 'playerA',
        screenId: 123,
        gameRoomId: 'someRandomId',
      },
    });
    socket.current.on('connect', () => {
      console.log('connected to Game tug of war');
      console.log(socket.current.id); // x8WIv7-mJelg7on_ALbx
      socket.current.emit("game_request", {
        gameName:"TUG",
        gameType: "2p",
        screenId: "123"
      }, (data) =>{
        console.log("invoking game");
        console.log("game data", data);
        // if data.status is failure, show some busy message
        // if suucess, set player
        if(data.status === 'success'){
         setPlayer(data.player);
        }
        
      });
    });
    socket.current.on('show_buttons', () => {
      setShowButton(true);
    });
  }, []);

  return (
    <div>
      {!showButtons ? (
        'Waiting for game to start'
      ) : (
        <Button
          handleButtonClick={() => {
            socket.current.emit("button_click", {player});
          }}
        >
          Player
        </Button>
      )}
    </div>
  );
};

export default Player;
