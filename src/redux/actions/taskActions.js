import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { toDoListTypes } from "../types/userTypes";

const collectionName = "todolist";
const taskCollections = collection(dataBase, collectionName);

const createTaskAction = (task) => {
  return {
    type: toDoListTypes.CREATE_TASK,
    payload: { ...task },
  };
};

export const createTaskActionAsync = (task) => {
  return async (dispatch) => {
    try {
      const doc = await addDoc(taskCollections, task);
      const taskDoc = {
        id: doc.id,
        ...task,
      };

      dispatch(createTaskAction(taskDoc));
      
    } catch (error) {
      console.log(error);
      dispatch(createTaskAction({}));
    }
  };
};
