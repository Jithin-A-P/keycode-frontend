import NotifierStack from '@containers/notification/Notification';

import PrivateLayout from './PrivateLayout';

const RouteLayout = () => (
    <>
      <PrivateLayout />
      <NotifierStack />
    </>
  );

export default RouteLayout;
