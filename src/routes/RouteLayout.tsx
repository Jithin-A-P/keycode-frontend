import NotifierStack from '@containers/notification/Notification';

import PrivateLayout from './PrivateLayout';
import TVLayout from './TVLayout';

const RouteLayout = () => (
    <>
      {/* <TVLayout /> */}
      <PrivateLayout />
      <NotifierStack />
    </>
  );

export default RouteLayout;
