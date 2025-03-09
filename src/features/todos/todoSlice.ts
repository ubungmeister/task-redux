import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState, Filter, Sort } from './types';

const initialState: TodosState = {
  todos: [],
  filter: Filter.All,
  sort: Sort.Asc,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        date: new Date().toISOString(),
      });
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  editTodo,
  setFilter,
  setSort,
} = todoSlice.actions;
export default todoSlice.reducer;
