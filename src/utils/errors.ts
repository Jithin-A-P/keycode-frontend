// eslint-disable-next-line import/no-cycle
import store from '@store/store';
import { showNotifier } from '@containers/notification/reducer';

export const handleApiError = (message = 'Something went wrong') => {
  store.dispatch(
    showNotifier({
      message,
      type: 'error',
    })
  );
};
