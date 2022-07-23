
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import  hotels from './hotels/reducer';
const PERSISTED_KEYS: string[] = [];

const store = configureStore({
  reducer: { hotels },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ serializableCheck: false })
      .prepend(save({ states: PERSISTED_KEYS }))
      .concat(thunkMiddleware);
  },
  preloadedState: load({ states: PERSISTED_KEYS })
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
