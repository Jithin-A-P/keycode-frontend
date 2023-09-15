import { Button } from '@components';
import { Card, Dialog } from '@mui/material';
import { useState } from 'react';
import { Wheel, WheelDataType } from 'react-custom-roulette';
import FrowningFace from '../../assets/icons/Frowning';

const multi = 0.9;
const offY = 130;
const frownImage = { uri: FrowningFace, sizeMultiplier: 0.7, offsetY: 90 };

const data: Array<WheelDataType> = [
  {
    option: 'a KFC',
    image: { uri: '/KFC.png', sizeMultiplier: multi, offsetY: offY },
  },
  {
    option: 'Unlucky',
    image: frownImage,
  },
  {
    option: 'a Swiggy',
    image: {
      uri: '/Swiggy.png',
      sizeMultiplier: multi,
      offsetY: 0,
      landscape: true,
    },
  },
  {
    option: 'an Adidas',
    image: { uri: '/adidas.png', sizeMultiplier: multi, offsetY: offY },
  },
  {
    option: 'Unlucky',
    image: frownImage,
  },
  {
    option: 'an Amazon',
    style: {},
    image: { uri: '/Amazon.png', offsetY: 80 },
  },
];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getWinningNumber() {
  let result = randomIntFromInterval(0, data.length - 1);
  while (result === 1 || result === 4) {
    result = randomIntFromInterval(0, data.length - 1);
  }
  return result;
}

const SpinTheWheel = () => {
  const [startSpin, setStartSpin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prize] = useState(getWinningNumber());

  const showWinnings = () => {
    const { option } = data[prize];
    setShowModal(true);
    // if (option === 'Unlucky') {
    //   alert('you didnt win anything. better luck next time ');
    // } else {
    //   alert(
    //     `you have won a ${option} coupon. Please check your phone for reward`
    //   );
    // }
  };

  const startRouletteSpin = () => {
    setStartSpin(true);
  };

  const winData = data[prize];

  return (
    <div className='flex flex-col justify-center max-w-md'>
      <Wheel
        mustStartSpinning={startSpin}
        spinDuration={0.01}
        data={data}
        prizeNumber={prize}
        onStopSpinning={showWinnings}
        backgroundColors={[
          '#CBE4F9 ',
          '#CDF5F6 ',
          '#EFF9DA ',
          '#F9EBDF',
          '#F9D8D6',
          '#D6CDEA',
        ]}
        outerBorderColor='#8a91f2'
        innerBorderColor='#000000'
      />
      <Button handleButtonClick={startRouletteSpin} disabled={startSpin}>
        SPIN
      </Button>
      <Dialog open={showModal}>
        <Card className='max-w-sm'>
          <div className='w-full h-36 bg-white flex justify-center'>
            <img src='/voucher.avif' alt='' height={100} />
            </div>
          <div className='text-white bg-gray-700 p-4 pb-10 relative'>
            <div className='absolute -top-10 bg-white rounded-md flex justify-center items-center border border-solid border-black h-20 w-20'>
              <img src={winData.image.uri} alt='' className='object-contain' />
            </div>
            <div className='mt-10'>
              <p>Congrats you have won {winData.option} coupon worth Rs.500. Check your phone for more details</p>
            </div>
          </div>
        </Card>
      </Dialog>
    </div>
  );
};

export default SpinTheWheel;
