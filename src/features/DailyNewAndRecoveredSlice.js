import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
  { name: 'New Positive', type: 'line', data: [] },
  { name: 'New Recoveries', type: 'line', data: [] },
];

export const DailyNewAndRecoveredSlice = createSlice({
  name: 'DailyNewAndRecoveredSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setDailyNewAndRecoveredSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDailyNewAndRecoveredSlice } = DailyNewAndRecoveredSlice.actions;
export default DailyNewAndRecoveredSlice.reducer;
