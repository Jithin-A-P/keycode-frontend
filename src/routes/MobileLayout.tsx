import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MobileYoutubeLinkPage from '@pages/MobileYoutubeLinkPage';
import MobileAnnouncementPage from '@pages/MobileAnouncementPage';
import RoutePaths from './RoutesPath';

const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const MobileLandingPage = lazy(() => import('@pages/MobileLandingPage'));
const GameControllerPage = lazy(() => import('@pages/GameControllerPage'));
const GameWonPage = lazy(() => import('@pages/GameWonPage'));
const GameLostPage = lazy(() => import('@pages/GameLostPage'));

const PrivateLayout = () => (
  <div className='h-screen bg-black'>
    <div className='max-w-[440px] w-full h-[calc(100vh-82px)] overflow-y-auto'>
      <div className='mx-4 my-7' style={{height: '90%'}}>
        <Suspense>
          <Routes>
            <Route path={RoutePaths.MOBILE_HOME} element={<MobileLandingPage />} />
            <Route path={RoutePaths.GAME_CONTROLLER} element={<GameControllerPage />} />
            <Route path={RoutePaths.GAME_WON} element={<GameWonPage />} />
            <Route path={RoutePaths.GAME_LOST} element={<GameLostPage />} />
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
