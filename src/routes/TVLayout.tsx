import { Navigate, Route, Routes } from 'react-router-dom';
import AdScreen from '@pages/AdScreen';

import PageNotFound from '@pages/PageNotFound';
import RoutePaths from './RoutesPath';

const TVLayout = () => (
  <div className='h-screen w-screen p-5' style={{ backgroundImage: 'url(/TVBackground.jpg)'}}>
    <Routes>
      <Route path={RoutePaths.TVADSCREEN} element={<AdScreen />} />
      <Route path={RoutePaths.ALL} element={<PageNotFound />} />
    </Routes>
  </div>
);

export default TVLayout;
