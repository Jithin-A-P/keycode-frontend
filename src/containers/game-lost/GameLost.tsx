import './styles.css';

const GameLost = () => (
    <div className='game-lost'>
      <img src='assets/you-lose.png' alt='You win' className='you-lost-img' />
      <p className='game-lost-text'>
        Unlucky, please try again later
      </p>
    </div>
  );

export default GameLost;
