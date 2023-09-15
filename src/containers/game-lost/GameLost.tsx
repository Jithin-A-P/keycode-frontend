import './styles.css';

const GameLost = () => {

  const onButtonClick = () => {
    console.log('BUTTON CLICKED');
  };

  return (
    <div className='game-lost'>
      <img src='assets/you-lose.png' alt='You win' className='you-lost-img' />

      {/* <button type='button' onClick={onButtonClick} className='button'>
      </button> */}
    </div>
  );
};

export default GameLost;
