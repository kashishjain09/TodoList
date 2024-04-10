import store from "../store";
import { addItems, deleteItems } from "../reducer/todoSlice";
const {dispatch}=store
export const addData = (data) => {
  dispatch(addItems(data));
};

export const deleteData = (id) => {
  return new Promise((resolve, reject) => {
      try {
          dispatch(deleteItems(id));
          resolve();
      } catch (error) {
          reject(error);
      }
  });
};
