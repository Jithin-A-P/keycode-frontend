/* eslint-disable global-require */
import { Button } from '@components';
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const Games = () =>{
    const socket = useRef(null);
    const [ropeYState, setRopeYState] = useState(0);
    useEffect(() => {
      socket.current = (io as any).connect('http://localhost:5050', {
        query: {
          type: 'screen',
          screenId: 123
        },
      });
      socket.current.on("connect", () => {
        console.log("connected to Game tUg of war");
        console.log(socket.current.id); // x8WIv7-mJelg7on_ALbx
        socket.current.emit("game_started");
      });
      socket.current.on('button_click_data', (data)=> {
        console.log("playing data", data, ropeYState);
        if(ropeYState === 5 || ropeYState === -5){
          socket.current.emit("game_ended", {winner: ropeYState === -5 ? "playerA": "playerB", screenId: "123"});
        }
        else{
        if(data.player === 'playerA'){
         setRopeYState((prevState) => prevState - 1);
        }
        if(data.player === 'playerB'){
          setRopeYState((prevState) => prevState + 1);
         }
        }
      });
    }, []);

    useEffect(() => {
      if(ropeYState === 5 || ropeYState === -5){
        socket.current.emit("game_ended", {winner: ropeYState === -5 ? "playerA": "playerB", screenId: "123"});
      }
    }, [ropeYState])
  

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#62c2a9',
      }}
      className='h-screen w-full'
    >
      <div
        style={{
          backgroundColor: '#365871',
          height: 400,
          borderWidth: 15,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderStyle: 'solid',
          position: 'relative',
          width: '100%',
          borderTopColor: ropeYState === -5 ? '#5c3fb1' : 'white',
          borderBottomColor: ropeYState === 5 ? '#ff5f55': 'white'
        }}
        className='flex justify-center'
      >
        <img
          style={{
            width: '430px',
            transform: `translateY(${ropeYState * 4}%)`,
            position: 'absolute',
            top: '-85%',
          }}
          src={require('../../assets/icons/tug-of-war.png')}
          alt='asd'
          className='transition-all'
        />
        <Button
        className='absolute'
        handleButtonClick={() => {
          setRopeYState(ropeYState - 1);
          // socket.current.emit('game_started', 'someRandomId');
        }}
      >
        clik1
      </Button>
      <Button
        className='absolute'
        handleButtonClick={() => {
          setRopeYState(ropeYState + 1);
          socket.current.emit('game_started', 'someRandomId');
        }}
      >
        clik2
      </Button>
      </div>
    </div>
  );
};

export default Games;
