import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(item => {
        return item.id === action.id
          ? {
              ...item,
              completed: true
            }
          : item;
      });
    default:
      return state;
  }
};
export default todos;
