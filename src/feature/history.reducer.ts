import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface historyType {
    datas: Array<string>
}

const initialState: historyType = {
    datas: [],
};

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        insert: (state, action: PayloadAction<string>) => {
            const idx = state.datas.findIndex((data: string)=>{
                return data === action.payload
            });
            if(idx > - 1){
                let temp = [...state.datas];
                temp.splice(idx, 1);
                temp.unshift(action.payload);
                state.datas = temp.slice(0, 5);
            }else{
                let temp = [...state.datas];
                temp.unshift(action.payload);
                state.datas = temp.slice(0, 5);
            }
        }
    }
});

export const { insert } = historySlice.actions;

export const getHistoryState = (state: RootState) => state.history;

export default historySlice.reducer;
