import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';

import MobileYoutubeLinkPage from '@pages/MobileYoutubeLinkPage';
import MobileAnnouncementPage from '@pages/MobileAnouncementPage';
import RoutePaths from './RoutesPath';

const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const MobileLandingPage = lazy(() => import('@pages/MobileLandingPage'));

const PrivateLayout = () => (
  <div className='h-screen'>
    <div className='py-[25px] text-center' style={{ boxShadow: '1px -1px 5px 1px grey' }}>
      <Typography variant='h5' className='font-medium'>
        AdSure
      </Typography>
    </div>
    <div className='max-w-[440px] w-full h-[calc(100vh-82px)] overflow-y-auto'>
      <div className='mx-4 my-7' style={{height: '90%'}}>
        <Suspense>
          <Routes>
            <Route path={RoutePaths.MOBILE_HOME} element={<MobileLandingPage />} />
            <Route path={RoutePaths.MOBILE_YOUTUBE_LINK} element={<MobileYoutubeLinkPage />} />
            <Route path={RoutePaths.MOBILE_ANNOUNCEMENT} element={<MobileAnnouncementPage />} />
            <Route path={RoutePaths.ALL} element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  </div>
);

export default PrivateLayout;
