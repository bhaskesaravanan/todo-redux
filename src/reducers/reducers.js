import { combineReducers } from 'redux';

function todos(state = [], action) {
  let list = [];
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case 'DELETE_TODO':
      list = state.filter(obj => obj.id !== action.key);
      console.log(list);
      return list;
    default:
      return state;
  }
}

const todoApp = combineReducers({ todos });
export default todoApp;
