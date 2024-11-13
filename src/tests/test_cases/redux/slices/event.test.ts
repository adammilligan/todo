import eventSlice, { IEventState, add, toggleDone, remove } from 'redux/slices/event';

import { factoriesEventState } from 'tests/factories/eventState';

describe('redux events slice', () => {
    describe('add', () => {
        it('should correctly add a new event', () => {
            const previousState: IEventState = { data: [] };
            const newEventDescription = 'New Event Description';

            const newState = eventSlice(previousState, add(newEventDescription));

            expect(newState.data.length).toBe(1);
            expect(newState.data[0].description).toBe(newEventDescription);
            expect(newState.data[0].isDone).toBe(false);
            expect(newState.data[0].id).toBeDefined();
        });
    });

    describe('toggleDone', () => {
        it('should correctly toggle an event\'s done status', () => {
            const event = factoriesEventState.build().data[0];
            const previousState: IEventState = { data: [event] };

            const newStateAfterToggle = eventSlice(previousState, toggleDone(event.id));

            expect(newStateAfterToggle.data[0].isDone).toBe(true);

            const finalState = eventSlice(newStateAfterToggle, toggleDone(event.id));
            expect(finalState.data[0].isDone).toBe(false);
        });
    });

    describe('remove', () => {
        it('should correctly remove an event', () => {
            const event = factoriesEventState.build().data[0];
            const previousState: IEventState = { data: [event] };

            const newState = eventSlice(previousState, remove(event.id));

            expect(newState.data.length).toBe(0);
        });
    });
});
