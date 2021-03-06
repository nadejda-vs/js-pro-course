import { ACTIONS } from '../constants';

const defaultState = {
  todos: [],
  error: null,
};

export function todolistReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      let newTodos = [
        ...state.todos,
        action.todo,
      ];

      return { ...state, todos: newTodos };
    }

    case ACTIONS.SET_CHECKED: {
      let newTodos = state.todos.map((item) =>
        item?.id === action.idishnik
          ? { ...item, checked: action.checked }
          : item,
      );

      return { ...state, todos: newTodos };
    }

    case ACTIONS.REMOVE_ITEM: {
      let newTodos = state.todos.filter(
        (todo) => {
          if (todo.id === action.idishnik) {
            return false;
          } else {
            return true;
          }
        },
      );
      return { ...state, todos: newTodos };
    }

    case ACTIONS.SET_SELECTED: {
      let newTodos = state.todos.map((item) =>
        item?.id === action.idishnik
          ? { ...item, selected: action.selected }
          : item,
      );

      return { ...state, todos: newTodos };
    }

    case ACTIONS.DELETE_ALL_SELECTED: {
      let newTodos = state.todos.filter(
        (todo) => {
          if (todo.selected) {
            return false;
          } else {
            return true;
          }
        },
      );
      return { ...state, todos: newTodos };
    }

    default:
      return defaultState;
  }
}
