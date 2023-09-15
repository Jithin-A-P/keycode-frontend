import { Button, Typography } from '@mui/material';
import './styles.css';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';

enum SpinStatus {
  SPINNING,
  SPINNED,
  NOT_SPINNED,
}

const GameWon = () => {
  const [spinStatus, setSpinStatus] = useState(SpinStatus.NOT_SPINNED);

  const onButtonClick = () => {
    setSpinStatus(SpinStatus.SPINNED);
  };

  return (
    <div className='game-won'>
      <img src='assets/you-win.png' alt='You win' className='you-win-img' />
      <ConfettiExplosion height={window.innerHeight * 0.5} force={2.0} />
      <Typography className='you-win-text'>Congragulations</Typography>
      {spinStatus === SpinStatus.NOT_SPINNED && (
        <>
          <Typography className='spin-wheel-text'>
            Spin the wheel to get rewards
          </Typography>
          <div className='ripple'>
            <Button onClick={onButtonClick} className='reward-button'>
              Spin
            </Button>
          </div>
        </>
      )}
      {spinStatus === SpinStatus.SPINNED && <div>Coupon</div>}
    </div>
  );
};

export default GameWon;
