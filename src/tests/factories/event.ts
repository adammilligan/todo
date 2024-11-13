import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';

export interface IEvent {
    id: string;
    isDone: boolean;
    description: string;
}

export const factoriesEvent = Factory.Sync.makeFactory<IEvent>({
    id: Factory.each(i => faker.string.uuid() + i),
    isDone: Factory.each(() => faker.datatype.boolean()),
    description: Factory.each(() => faker.lorem.sentence()),
});
