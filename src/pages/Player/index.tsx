import { Button } from '@components';
import { usePushToKioskQueueByIdMutation } from '@services/api';
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import {BASE_URL} from '@pages/constants'

const Player = () => {
  const socket = useRef(null);
  const [showButtons, setShowButton] = useState(false);
  const [player, setPlayer] = useState('');

  const [pushToKioskQueueById, result] = usePushToKioskQueueByIdMutation();
  
  useEffect(() => {
    socket.current = (io as any).connect(`${BASE_URL}:5050`, {
      query: {
        // type: 'playerA',
        // screenId: 123,
        // gameRoomId: 'someRandomId',
      },
    });
    socket.current.on('connect', () => {
      // console.log(socket.current.id); // x8WIv7-mJelg7on_ALbx
      // socket.current.emit("game_request", {
      //   gameName:"flappy_bird",
      //   gameType: "game_one_player",
      //   screenId: "123"
      // }, (data) =>{
      //   console.log("game data", data);
      //   // if data.status is failure, show some busy message
      //   // if suucess, set player
      //   if(data.status === 'success'){
      //    setPlayer(data.player);
      //   }        
      // });

      // const qs = new URLSearchParams(window.location.href.split('?')[1])
      // const p = qs.get('player')
      
      
      // pushToKioskQueueById({id: 123, type: "game_one_player", name: "flappy_bird", qrcodeUrl: "http://localhost"});
      // pushToKioskQueueById({id: 123, type: "game_two_players", name: "tug_of_war", qrcodeUrl: "http://localhost"});
      // socket.current.disconnect();
    });
    socket.current.on('show_buttons', () => {
      setShowButton(true);
    });
  }, [pushToKioskQueueById]);
  
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
