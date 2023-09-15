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
      <ConfettiExplosion height={window.innerHeight * 0.8} force={2.0} />
      <p className='you-win-text'>Congragulations</p>
      {spinStatus === SpinStatus.NOT_SPINNED && (
        <>
          <p className='spin-wheel-text'>
            Spin the wheel to get rewards
          </p>
          <button type='button' onClick={onButtonClick} className='reward-button'>
            Spin
          </button>
        </>
      )}
      {spinStatus === SpinStatus.SPINNED && <div>Coupon</div>}
    </div>
  );
};

export default GameWon;
