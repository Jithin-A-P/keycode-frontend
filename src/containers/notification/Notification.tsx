import { useSelector } from 'react-redux';

import { Notifier } from '@components';
import { RootState } from '@store/reducer';

import { hideNotifier } from './reducer';

const Notification = () => {
  const { notifications } = useSelector(
    (state: RootState) => state.rootReducer.Notifications
  );
  return (
    <div className='overflow-y-auto fixed bottom-4 max-h-screen'>
      {notifications.length > 0 &&
        notifications.map((message, index) => (
          <Notifier
            key={message.id}
            id={message.id}
            notification={{ ...message, position: index }}
            hideNotifier={hideNotifier}
          />
        ))}
    </div>
  );
};

export default Notification;
