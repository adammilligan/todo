import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import {IEvent} from 'types/models/event';

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
        },
        remove: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(event => event.id !== action.payload);
        }
    }
});

export const {add, toggleDone, remove} = userSlice.actions;

export default userSlice.reducer;
