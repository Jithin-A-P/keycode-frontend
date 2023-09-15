/* eslint-disable global-require */
import { Button } from "@components";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const Games = () =>{
    const socket = useRef(null);
    const [ropeYState, setRopeYState] = useState(0);
    useEffect(() => {
      socket.current = (io as any).connect('http://192.168.3.186:5050', {
        query: {
          type: 'screen',
          screenId: 123
        },
      });
      socket.current.on("connect", () => {
        console.log("connected to Game tUg of war");
        console.log(socket.current.id); // x8WIv7-mJelg7on_ALbx
      });
      socket.current.on('button_click_data', (data)=> {
        console.log("playing data", data);
        if(data.player === 'playerA'){
         setRopeYState(ropeYState-1);
        }
        if(data.player === 'playerB'){
          setRopeYState(ropeYState+1);
         }
      });
    }, []);
  





    return(<div style={{display: 'flex', alignItems:'center', justifyContent: 'center', height: '100%'}}>
      <Button handleButtonClick={()=> {socket.current.emit("game_started", "someRandomId")}}>clik</Button>
      {/* <div style={{height:"600px"}}> */}
      <img  
      style={{maxWidth:"59%", transform: `translateY(${ropeYState*10}px)`}}
      src={require("../../assets/icons/tug-of-war.png")} alt ="asd"/>
      {/* </div> */}
    </div>)
}
    
    export default Games