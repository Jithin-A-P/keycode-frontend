import { Button } from '@components';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import io from 'socket.io-client';

const Player = () => {
  const socket = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams()
  // const searchParams = new URLSearchParams(document.location.search);
  const player = searchParams.get('player'); 
  const [showButtons, setShowButton] = useState(false);
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
      // socket.emit("from_client", "asd")
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
