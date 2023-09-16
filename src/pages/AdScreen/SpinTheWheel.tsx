import { Button } from '@components';
import { Card, Dialog } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Wheel, WheelDataType } from 'react-custom-roulette';
import io from 'socket.io-client';
import {BASE_URL} from '@pages/constants';
import FrowningFace from '../../assets/icons/Frowning';

const multi = 0.7;
const offY = 130;
const frownImage = { uri: FrowningFace, sizeMultiplier: 0.5, offsetY: 90 };

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
    option: 'Unlucky',
    image: frownImage,
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
  {
    option: 'Unlucky',
    image: frownImage,
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

const SpinTheWheel = ({ triggerAfterSpin }) => {
  const [startSpin, setStartSpin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prize] = useState(0);

  const socket = useRef(null);

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
    setTimeout(()=> {
      triggerAfterSpin();
    },10000)
  };


  useEffect(() => {
    socket.current = (io as any).connect(`${BASE_URL}:5050`, {
      query: {
        type: 'screen',
        screenId: 1
      },
    });
    socket.current.on("connect", () => {
      console.log("connected to Game tUg of war");
      console.log(socket.current.id); // x8WIv7-mJelg7on_ALbx
      socket.current.emit("game_started");
    });
    socket.current.on('spin', ()=> {
      startRouletteSpin()
    });
  }, []);


  
  const winData = data[prize];

  return (
   
    <main className='h-screen w-full flex flex-col items-center mt-[40%]' >
        <div style={{
            color: '#FFFFFF', fontSize: 60, fontWeight: 700,
            boxShadow: '10px 24px 4px 0px rgba(0, 0, 0, 0.25)',
            padding: '30px 70px',
            background: 'linear-gradient(180deg, #8433B4 0%, #5B1982 100%)',
            borderRadius: '32px',
            textAlign: 'center',
            marginBottom: '70px'
          }}>
            SPIN TO WIN
          </div>
      <Wheel
        mustStartSpinning={startSpin}
        data={data}
        prizeNumber={prize}
        onStopSpinning={showWinnings}
        backgroundColors={[
          '#FDFFB4',
          '#DBEAFF',
          '#DDFFF1 ',
          '#FFE8EE',
          '#FDFFB4',
          '#DBEAFF',
          '#DDFFF1',
          '#FFE8EE',
        ]}
        outerBorderColor='#14021D'
        radiusLineColor='#FFF853'
        radiusLineWidth={1}
        spinDuration={0.5}
      />
      {/* <button onClick={startRouletteSpin} disabled={startSpin} type="button" style={{
        color: '#FFFFFF', fontSize: 74
      }}>
        SPIN TO WIN
      </button> */}
      <Dialog open={showModal}>
        <Card className='max-w-sm'>
          <div className='w-full h-40 py-2 bg-white flex justify-center'>
            <img src='/voucher.avif' alt='' height={100} />
            </div>
          <div className='text-white bg-gray-700 p-4 pb-10 relative'>
            <div className='absolute -top-10 bg-white rounded-md flex justify-center items-center border border-solid border-black h-20 w-20'>
              <img src={winData.image.uri} alt='' className='object-contain' />
            </div>
            <div className='mt-10'>
              <p>Congrats you have won {winData.option} coupon worth Rs.200. Check your phone for more details</p>
            </div>
          </div>
        </Card>
      </Dialog>
    </main>
  );
};

export default SpinTheWheel;
