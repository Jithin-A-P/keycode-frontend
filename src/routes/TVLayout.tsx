import { Navigate, Route, Routes } from 'react-router-dom';
import AdScreen from '@pages/AdScreen';

import PageNotFound from '@pages/PageNotFound';
import RoutePaths from './RoutesPath';

const TVLayout = () => (
  <Routes>
    <Route path={RoutePaths.TVADSCREEN} element={<AdScreen />} />
    <Route path={RoutePaths.ALL} element={<PageNotFound />} />
  </Routes>
);

export default TVLayout;
