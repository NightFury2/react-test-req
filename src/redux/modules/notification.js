const NOTIFICATION_MENU = 'NOTIFICATION_MENU';
const SHOW_ALL_NOTIFICATION = 'SHOW_ALL_NOTIFICATION';
const LOAD_NOTIFICATION = 'LOAD_NOTIFICATION';
const LOAD_NOTIFICATION_SUCCESS = 'LOAD_NOTIFICATION_SUCCESS';
const LOAD_NOTIFICATION_FAIL = 'LOAD_NOTIFICATION_FAIL';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
const REMOVE_NOTIFICATION_SUCCESS = 'REMOVE_NOTIFICATION_SUCCESS';
const REMOVE_NOTIFICATION_FAIL = 'REMOVE_NOTIFICATION_FAIL';
const CHECK_ALL_NOTIFICATION = 'CHECK_ALL_NOTIFICATION';
const CHECK_ALL_NOTIFICATION_SUCCESS = 'CHECK_ALL_NOTIFICATION_SUCCESS';
const CHECK_ALL_NOTIFICATION_FAIL = 'CHECK_ALL_NOTIFICATION_FAIL';
const CHECK_NOTIFICATION = 'CHECK_NOTIFICATION';
const CHECK_NOTIFICATION_SUCCESS = 'CHECK_NOTIFICATION_SUCCESS';
const CHECK_NOTIFICATION_FAIL = 'CHECK_NOTIFICATION_FAIL';
const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const ADD_NOTIFICATION_SUCCESS = 'ADD_NOTIFICATION_SUCCESS';
const ADD_NOTIFICATION_FAIL = 'ADD_NOTIFICATION_FAIL';

const initialState = {
  open: false,
  openAllNotification: false,
  loaded: false,
  errorLoadNotification: null,
  errorCheckAllNotification: null,
  errorCheckNotification: null,
  errorRemoveNotification: null,
  errorAddNotification: null,
};

export default function notification(state = initialState, action = {}) {
  switch (action.type) {
    case NOTIFICATION_MENU:
      return {
        ...state,
        open: action.open
      };
    case SHOW_ALL_NOTIFICATION:
      return {
        ...state,
        openAllNotification: action.openAllNotification
      };
      // load
    case LOAD_NOTIFICATION:
      return {
        ...state,
        loadingNotification: true
      };
    case LOAD_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loadingNotification: false,
        loaded: true,
        data: action.result,
        errorLoadNotification: null
      };
    case LOAD_NOTIFICATION_FAIL:
      return {
        ...state,
        loadingNotification: false,
        loaded: false,
        data: null,
        errorLoadNotification: action.error
      };
      // check all
    case CHECK_ALL_NOTIFICATION:
      return {
        ...state,
        loadingCheckAllNotification: true
      };
    case CHECK_ALL_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loadingCheckAllNotification: false,
        data: action.result,
        errorCheckAllNotification: null
      };
    case CHECK_ALL_NOTIFICATION_FAIL:
      return {
        ...state,
        loadingCheckAllNotification: false,
        data: null,
        errorCheckAllNotification: action.error
      };
      // check
    case CHECK_NOTIFICATION:
      return {
        ...state,
        loadingCheckNotification: true
      };
    case CHECK_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loadingCheckNotification: false,
        data: action.result,
        errorCheckNotification: null
      };
    case CHECK_NOTIFICATION_FAIL:
      return {
        ...state,
        loadingCheckNotification: false,
        data: null,
        errorCheckNotification: action.error
      };
      // remove
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        loadingRemoveNotification: true
      };
    case REMOVE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loadingRemoveNotification: false,
        data: action.result,
        errorRemoveNotification: null
      };
    case REMOVE_NOTIFICATION_FAIL:
      return {
        ...state,
        loadingRemoveNotification: false,
        data: null,
        errorRemoveNotification: action.error
      };
      // add
    case ADD_NOTIFICATION:
      return {
        ...state,
        loadingAddNotification: true
      };
    case ADD_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loadingAddNotification: false,
        data: action.result,
        errorAddNotification: null
      };
    case ADD_NOTIFICATION_FAIL:
      return {
        ...state,
        loadingAddNotification: false,
        data: null,
        errorAddNotification: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.notification && globalState.notification.loaded;
}

export function setOpen(open) {
  return {type: NOTIFICATION_MENU, open};
}

export function setOpenAllNotification(openAllNotification) {
  return {type: SHOW_ALL_NOTIFICATION, openAllNotification};
}

export function load() {
  return {
    types: [LOAD_NOTIFICATION, LOAD_NOTIFICATION_SUCCESS, LOAD_NOTIFICATION_FAIL],
    promise: (client) => client.get('/notification/loadNotification')
  };
}

export function checkAllNotification() {
  return {
    types: [CHECK_ALL_NOTIFICATION, CHECK_ALL_NOTIFICATION_SUCCESS, CHECK_ALL_NOTIFICATION_FAIL],
    promise: (client) => client.get('/notification/checkAllNotification')
  };
}

export function checkNotification(id) {
  return {
    types: [CHECK_NOTIFICATION, CHECK_NOTIFICATION_SUCCESS, CHECK_NOTIFICATION_FAIL],
    promise: (client) => client.post('/notification/checkNotification', {
      data: id
    })
  };
}

export function removeNotification() {
  return {
    types: [REMOVE_NOTIFICATION, REMOVE_NOTIFICATION_SUCCESS, REMOVE_NOTIFICATION_FAIL],
    promise: (client) => client.get('/notification/removeNotification')
  };
}

export function addNotification(item) {
  return {
    types: [ADD_NOTIFICATION, ADD_NOTIFICATION_SUCCESS, ADD_NOTIFICATION_FAIL],
    promise: (client) => client.post('/notification/addNotification', {
      data: item
    })
  };
}
