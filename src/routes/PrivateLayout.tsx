import { lazy, Suspense, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from '@containers/header/Header';
import SideNavBar from '@containers/side-nav-bar/SideNavBar';

import RoutePaths from './RoutesPath';

const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const CatalogPage = lazy(() => import('@pages/CatalogPage'));
const CampaignPage = lazy(() => import('@pages/CampaignPage'));
const AdScreenPage = lazy(() => import('@pages/AdScreen'));
const GamesPage = lazy(() => import('@pages/Games'));
const PlayerPage = lazy(() => import('@pages/Player'));
const Flappy = lazy(() => import('@pages/Games/Flappy'));

const PrivateLayout = () => {
  const [isBarExpanded, setBarExpanded] = useState(true);

  const toggleSideNavBar = () => setBarExpanded(!isBarExpanded);

  return (
    <>
      <SideNavBar isBarExpanded={isBarExpanded} />
      <div
        className={`${
          isBarExpanded
            ? 'ml-[var(--expanded-sidenav-width)] w-[calc(100vw-var(--expanded-sidenav-width))]'
            : 'ml-[var(--collapsed-sidenav-width)] w-[calc(100vw-var(--collapsed-sidenav-width))]'
        } h-screen transition-all duration-[var(--sidenav-animation-duration)] motion-reduce:transition-none`}
      >
        <Header
          isBarExpanded={isBarExpanded}
          toggleSideNavBar={toggleSideNavBar}
        />
        <div className='page mt-[80px]'>
          <Suspense>
            <Routes>
              <Route
                path={RoutePaths.HOME}
                element={<Navigate to={RoutePaths.CATALOGS}  />}
              />
              <Route path={RoutePaths.CATALOGS} element={<CatalogPage />} />
              <Route path={RoutePaths.CAMPAIGNS} element={<CampaignPage />} />
              <Route
                  path={RoutePaths.TVADSCREEN} element={<AdScreenPage />}
              />
              <Route
                  path={RoutePaths.GAMES} element={<GamesPage />}
              />
              <Route
                  path={RoutePaths.PLAYERS} element={<PlayerPage />}
              />
              <Route path={RoutePaths.FLAPPY} element={<Flappy />} />
              <Route path={RoutePaths.ALL} element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
