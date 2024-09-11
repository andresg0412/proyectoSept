import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedPayInfo: null,
};

const payInfoSlice = createSlice({
    name: 'payInfo',
    initialState,
    reducers: {
        selectPayInfo: (state, action) => {
            state.selectedPayInfo = action.payload;
        },
    },
});
export const { selectPayInfo } = payInfoSlice.actions;
export default payInfoSlice.reducer;
