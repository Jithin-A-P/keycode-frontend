import NotifierStack from '@containers/notification/Notification';
import PrivateLayout from './PrivateLayout';
import MobileLayout from './MobileLayout';


const RouteLayout = () => (
    <>
      {/* <MobileLayout /> */}
      <PrivateLayout />
      <NotifierStack />
    </>
  );

export default RouteLayout;
