/* eslint-disable no-fallthrough */
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      let newTodos = [...state];
      newTodos.push(payload);
      return newTodos;

    case UPDATE_TODO:
      let updateTodos = [...state];
      let index = -1;
      for (let i = 0; i < updateTodos.length; i++) {
        index++;
        if (updateTodos[i].id === payload.id) {
          break;
        }
      }
      console.log(index);
      if (index !== -1) {
        updateTodos[index] = payload;
        console.log(updateTodos);
        return updateTodos;
      }

    case DELETE_TODO:
      let deleteTodos = [...state];
      deleteTodos = deleteTodos.filter((todo) => todo.id !== payload);
      return deleteTodos;

    default:
      return state;
  }
};
