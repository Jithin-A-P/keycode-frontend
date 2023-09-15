import './styles.css';
import ConfettiExplosion from 'react-confetti-explosion';
import { useEffect, useState } from 'react';
import {useLazyGetStartSpinTriggerQuery} from '@services/api'
import { Card, Dialog } from '@mui/material';

enum SpinStatus {
  SPINNING,
  SPINNED,
  NOT_SPINNED,
}

const GameWon = () => {
  const [spinStatus, setSpinStatus] = useState(SpinStatus.NOT_SPINNED);
  const [showModal, setShowModal] = useState(false);
  const [trigger]= useLazyGetStartSpinTriggerQuery()

  const onButtonClick = () => {
    setSpinStatus(SpinStatus.SPINNED);
    setTimeout(()=>{
      setShowModal(true)
    }, 6000)
    trigger('');
  };
  useEffect(()=>{
    if(showModal){
      setTimeout(()=>{
        setShowModal(false)
      }, 6000)
    }

  },[showModal])


  return (
    <div className='game-won'>
      <img src='assets/you-win.png' alt='You win' className='you-win-img' />
      <ConfettiExplosion height={window.innerHeight * 0.8} force={2.0} />
      <p className='you-win-text'>Congratulations</p>
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
      <Dialog open={showModal}>
        <Card className='max-w-sm'>
          <div className='w-full h-40 py-2 bg-white flex justify-center'>
            <img src='/voucher.avif' alt='' height={100} />
            </div>
          <div className='text-white bg-gray-700 p-4 pb-10 relative'>
            <div className='absolute -top-10 bg-white rounded-md flex justify-center items-center border border-solid border-black h-20 w-20'>
              <img src="/KFC.png" alt='' className='object-contain' />
            </div>
            <div className='mt-10'>
              <div style={{ width: 250, textAlign: 'center', fontWeight:'600', fontSize: 24}}>#KFC200</div>
            </div>
          </div>
        </Card>
      </Dialog>
    </div>
  );
};

export default GameWon;
