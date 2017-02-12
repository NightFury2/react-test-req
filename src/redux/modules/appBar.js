const SET_TITLE = 'SET_TITLE';

const initialState = {
};

export default function appBar(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
}

export function setTitle(title) {
  return { type: SET_TITLE, title };
}
