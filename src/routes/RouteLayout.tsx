/* eslint-disable no-nested-ternary */
import NotifierStack from '@containers/notification/Notification';
import { useLocation } from 'react-router-dom';
import PrivateLayout from './PrivateLayout';
import TVLayout from './TVLayout';
import MobileLayout from './MobileLayout';

const RouteLayout = () => {
  const route = useLocation();

  const isDashboard = route.pathname.includes('admin');
  const isTV = route.pathname.includes('tvadscreen');

  return (
    <>
      {isDashboard ? PrivateLayout : isTV ? <TVLayout /> : <MobileLayout />}
      <NotifierStack />
    </>
  );
};

export default RouteLayout;
