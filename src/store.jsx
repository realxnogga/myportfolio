
// import { configureStore } from "@reduxjs/toolkit";
// import { ThemeSliceReducer } from "./features/themeSlice";

// export const Store = configureStore({
//     reducer: {
//         ThemeSliceName: ThemeSliceReducer,
//     }
// })

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { ThemeSliceReducer } from './features/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, ThemeSliceReducer); // Wrap your reducer with persistReducer

export const Store = configureStore({
  reducer: {
    ThemeSliceName: persistedReducer,
  }
});

export const persistor = persistStore(Store); // Create a persistor object

// Export store and persistor for later use
export default { Store, persistor };
