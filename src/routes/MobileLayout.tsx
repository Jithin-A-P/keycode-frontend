import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';


import RoutePaths from './RoutesPath';

const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const MobileLandingPage = lazy(() => import('@pages/MobileLandingPage'));
const GameControllerPage = lazy(() => import('@pages/GameControllerPage'));

const PrivateLayout = () => (
  <div>
    <div className='py-[25px] text-center' style={{ boxShadow: '1px -1px 5px 1px grey' }}>
      <Typography variant='h5' className='font-medium'>
        AdSure
      </Typography>
    </div>
    <div className='max-w-[440px] w-full'>
      <div className='mx-5 my-7'>
        <Suspense>
          <Routes>
            <Route path={RoutePaths.MOBILE_HOME} element={<MobileLandingPage />} />
            <Route path={RoutePaths.GAME_CONTROLLER} element={<GameControllerPage />} />
            <Route path={RoutePaths.ALL} element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  </div>
);

export default PrivateLayout;
