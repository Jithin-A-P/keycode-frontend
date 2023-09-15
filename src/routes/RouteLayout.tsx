import NotifierStack from '@containers/notification/Notification';

import { useLocation } from 'react-router-dom';
import PrivateLayout from './PrivateLayout';
import TVLayout from './TVLayout';
import MobileLayout from './MobileLayout';

const RouteLayout = () => {
  const route = useLocation();

  const isDashboard = route.pathname.includes('admin');

  return (
    <>
      {!isDashboard ? <TVLayout /> : <PrivateLayout />}
      <NotifierStack />
    </>
  );
};

export default RouteLayout;
