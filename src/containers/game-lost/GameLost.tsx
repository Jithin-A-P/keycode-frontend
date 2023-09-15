import { Typography } from '@mui/material';
import './styles.css';

const GameLost = () => {
  const x = [];
  return (
    <div className='game-lost'>
      <img src='assets/you-lose.png' alt='You win' className='you-lost-img' />
      <Typography className='game-lost-text'>
        Unlucky, please try again later
      </Typography>
    </div>
  );
};

export default GameLost;
