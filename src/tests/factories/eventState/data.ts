import * as Factory from 'factory.ts';

import { factoriesEvent } from '../event';

import { IEvent } from 'types/models/event';

// Фабрика данных для event state
export const factoriesEventsStateData = Factory.Sync.makeFactory<IEvent>({ ...factoriesEvent.build() });
