import { useParams } from 'react-router-dom';
import './styles.css';

const GameController = () => {
  const { playerId } = useParams();

  const onButtonClick = () => {
    navigator.vibrate(50)
  };

  return (
    <div className='game-controller'>
      <p className='game-header'>
        Player {playerId}
      </p>
      <button type='button' className='game-button' onClick={onButtonClick}>
        Tap Here
      </button>
    </div>
  );
};

export default GameController;
