/* eslint-disable global-require */
import { Button } from "@components";
import { useState } from "react";
import io from "socket.io-client";


const socket = (io as any).connect("http://192.168.3.186:5050", { query: 
{
    type: "screen", 
    screenId: 123
}
});
socket.on("connect", () => {
  console.log("connected to Game tUg of war");
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  socket.emit("game_started", "someId")
});

const Games = () =>{

    const [ropeYState, setRopeYState] = useState(0);
    socket.on('button_click_data', (data)=> {
      console.log("playing data", data);
      if(data.player === 'playerA'){
       setRopeYState(ropeYState-1);
      }
      if(data.player === 'playerB'){
        setRopeYState(ropeYState+1);
       }
    })
    return(<div style={{display: 'flex', alignItems:'center', justifyContent: 'center', height: '100%'}}>
      <Button handleButtonClick={()=> {socket.emit("game_started", "someRandomId")}}>clik</Button>
      {/* <div style={{height:"600px"}}> */}
      <img  
      style={{maxWidth:"59%", transform: `translateY(${ropeYState*10}px)`}}
      src={require("../../assets/icons/tug-of-war.png")} alt ="asd"/>
      {/* </div> */}
    </div>)
}
    
    export default Games