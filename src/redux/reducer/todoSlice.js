import { createSlice } from "@reduxjs/toolkit";
const initialState={
  todoItems:[]
}
const todoSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addItems: (state, action) => {  
      state.todoItems=action.payload
    },
    deleteItems: (state, action) => {
      state.todoItems=state.todoItems.filter(item => action.payload !== item.id);
    }
  }
});

export default todoSlice.reducer;
export const { addItems, deleteItems } = todoSlice.actions;