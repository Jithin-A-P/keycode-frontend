import NotifierStack from '@containers/notification/Notification';
<<<<<<< HEAD
import PrivateLayout from './PrivateLayout';
import MobileLayout from './MobileLayout';


const RouteLayout = () => (
    <>
      {/* <MobileLayout /> */}
      <PrivateLayout />
=======

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
>>>>>>> b415c933f148c927347d7e31a1925e20acadf0b7
      <NotifierStack />
    </>
  );
};

export default RouteLayout;
