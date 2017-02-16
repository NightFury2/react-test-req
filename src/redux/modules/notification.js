const NOTIFICATION_MENU = 'NOTIFICATION_MENU';
const SHOW_ALL_NOTIFICATION = 'SHOW_ALL_NOTIFICATION';
const COUNT_BADGE = 'COUNT_BADGE';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

const initialState = {
  open: false,
  openAllNotification: false,
  count: 0,
  data: [
    {
      id: 17,
      title: 'Test test test 17',
      unread: true,
      datetime: new Date(),
    },
    {
      id: 16,
      title: 'Test test test 16',
      unread: true,
      datetime: new Date().setHours((new Date()).getHours() - 2),
    },
    {
      id: 14,
      title: 'Test test test 14',
      unread: true,
      datetime: new Date().setDate((new Date()).getDate() - 1),
    },
    {
      id: 13,
      title: 'Test test test 13',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 3),
    },
    {
      id: 12,
      title: 'Test test test 12',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 8),
    },
    {
      id: 11,
      title: 'Test test test 11',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 31),
    },
    {
      id: 10,
      title: 'Test test test 10',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 160),
    }
  ]
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
    case COUNT_BADGE:
      return {
        ...state,
        count: action.count
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        data: action.data
      };
    case ADD_NOTIFICATION:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

export function setOpen(open) {
  return {type: NOTIFICATION_MENU, open};
}

export function setOpenAllNotification(openAllNotification) {
  return {type: SHOW_ALL_NOTIFICATION, openAllNotification};
}

export function setCountBadges(count) {
  return {type: COUNT_BADGE, count};
}

export function removeNotification(data) {
  return {type: REMOVE_NOTIFICATION, data};
}

export function addNotification(data) {
  return {type: ADD_NOTIFICATION, data};
}
