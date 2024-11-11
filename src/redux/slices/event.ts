import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { IEvent } from "../../types/models/event.ts";

export interface IEventState {
    data: IEvent[];
}

const initialState: IEventState = {
    data: []
};

export const userSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const newEvent: IEvent = {
                id: uuidv4(),
                isDone: false,
                description: action.payload
            };
            state.data.push(newEvent);
        },
        toggleDone: (state, action: PayloadAction<string>) => {
            const event = state.data.find(event => event.id === action.payload);
            if (event) {
                event.isDone = !event.isDone;
            }
        }
    }
});

export const { add, toggleDone } = userSlice.actions;

export default userSlice.reducer;
