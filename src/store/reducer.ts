import { combineReducers } from 'redux';

import Notifications from '@containers/notification/reducer';

// eslint-disable-next-line import/no-cycle
import store from './store';

const rootReducer = combineReducers({
  Notifications,
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
