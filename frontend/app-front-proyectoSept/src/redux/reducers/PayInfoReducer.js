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
        updatePayInfo: (state, action) => {
            state.selectedPayInfo = action.payload;
        },
        clearPauyInfo: (state) => {
            state.selectedPayInfo = null;
        },
    },
});
export const { selectPayInfo, clearPauyInfo } = payInfoSlice.actions;
export default payInfoSlice.reducer;
