import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'notes',
  initialState: { items: ['JS', 'TS', 'React', 'Node'] },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export default slice.reducer;

export const { addNote } = slice.actions;
