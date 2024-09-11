import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDeliveryInfo: null,
};

const deliveryInfoSlice = createSlice({
    name: 'deliveryInfo',
    initialState,
    reducers: {
        selectDeliveryInfo: (state, action) => {
            state.selectedDeliveryInfo = action.payload;
        },
    },
});
export const { selectDeliveryInfo } = deliveryInfoSlice.actions;
export default deliveryInfoSlice.reducer;
