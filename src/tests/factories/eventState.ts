import * as Factory from 'factory.ts';
import { IEventState } from 'redux/slices/event';
import { factoriesEventsStateData } from 'tests/factories/eventState/data';

// Фабрика для события
export const factoriesEventState = Factory.Sync.makeFactory<IEventState>({
  data: Factory.each(() => [factoriesEventsStateData.build()]) // Generate an array of event data
});
