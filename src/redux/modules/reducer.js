import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { pagination } from 'violet-paginator';

import appBar from './appBar';
import notification from './notification';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  pagination,
  appBar,
  notification
});
