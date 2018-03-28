const defaultState = 'SHOW_ALL';

const filter = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.type;
    default:
      return state;
  }
}

export default filter;