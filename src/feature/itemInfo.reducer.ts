import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Item } from "../types/item.types";

interface ItemType {
    data: Item
}

const initialState: ItemType = {
    data: {},
};

export const itemInfoSlice = createSlice({
    name: "itemInfo",
    initialState,
    reducers: {
        insert: (state, action: PayloadAction<Item>) => {
            state.data = action.payload
        }
    }
});

export const { insert } = itemInfoSlice.actions;

export const getItemInfoState = (state: RootState) => state.itemInfo;

export default itemInfoSlice.reducer;
