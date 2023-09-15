
import './styles.css';
import Confetti from 'react-confetti';

const GameWon = () => {

  const onButtonClick = () => {
    console.log('BUTTON CLICKED');
  };

  return (
    <div className='game-won'>
      <img src='assets/you-win.png' alt='You win' className='you-win-img' />
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
      />
      <button type='button' onClick={onButtonClick} className='reward-button'>
        Get Rewards
      </button>
    </div>
  );
};

export default GameWon;
