import { Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import './styles.css';

const GameController = () => {
  const { playerId } = useParams();

  const onButtonClick = () => {
    navigator.vibrate(50)
  };

  return (
    <div className='game-controller'>
      <Typography variant='h3' className='game-header'>
        Player {playerId}
      </Typography>
      <Button className='game-button' onClick={onButtonClick}>
        Tap Here
      </Button>
    </div>
  );
};

export default GameController;
