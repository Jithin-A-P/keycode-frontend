
import { Navigate, Route, Routes } from 'react-router-dom';
import AdScreen from '@pages/AdScreen';

import RoutePaths from './RoutesPath';

const TVLayout = () =>  (
     <Routes>
        <Route
            path={RoutePaths.TVADSCREEN} element={<AdScreen />}
         />
    </Routes>
  );

export default TVLayout;
