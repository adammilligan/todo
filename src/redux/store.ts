import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import eventsStore from './slices/event'


const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({ events: eventsStore });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const ignoredActions = [FLUSH, PAUSE, PERSIST, PURGE, REGISTER];

export const setupStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: { ignoredActions } }).prepend()
});

export const persistor = persistStore(setupStore);

export type State = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
