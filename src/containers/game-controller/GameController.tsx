/* eslint-disable jsx-a11y/media-has-caption */
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
  const audioRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
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
        setDisableButton(true)
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
  console.log(result.data)

  if (!gameAlreadyRunning) {
    return (
      <div>
        {!showButtons ? (
          <p className='game-header'>Waiting for game to start</p>
        ) : (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <button
            style={{  backgroundColor: result.data.player === 'playerA' ? 'red':'purple',
              borderRadius: '250px',
              marginTop: '150px',
              fontSize: '26px',
              color: '#ffffff',
              padding: '100px',
              pointerEvents: 'none'
            }}
            type='button'
            onClick={() => {
              audioRef.current.play();
              socket.current.emit('button_click', { player });
            }}
            disabled={disableButton}
          >
            Player
          </button>
          </div>
        )}
        <audio ref={audioRef} src="sound.mp3" />
      </div>
    );
  }
  return <p className='game-header'>Game is already running</p>;
};

export default GameController;
