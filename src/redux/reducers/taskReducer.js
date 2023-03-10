import { toDoListTypes } from "../types/userTypes";

const initialValue = {
  tasks: [],
};
export const taskReducers = (state = initialValue, action) => {
  switch (action.type) {
    case toDoListTypes.CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    default:
      return state;
  }
};
