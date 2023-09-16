import { useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const GameLost = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/screens/1/1')
    }, 5000);
  }, []);
  return <div className='game-lost'>
      <img src='assets/you-lose.png' alt='You win' className='you-lost-img' />
      <p className='game-lost-text'>
        Unlucky, please try again later
      </p>
    </div>
};

export default GameLost;
