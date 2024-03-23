
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { ThemeSliceReducer } from './features/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, ThemeSliceReducer);

export const Store = configureStore({
  reducer: {
    ThemeSliceName: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Adjusted to persist/PERSIST
      },
    }),
});

export const persistor = persistStore(Store);

export default { Store, persistor };


// import { configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 

// import { ThemeSliceReducer } from './features/themeSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, ThemeSliceReducer); 

// export const Store = configureStore({
//   reducer: {
//     ThemeSliceName: persistedReducer,
//   }
// });

// export const persistor = persistStore(Store);
// export default { Store, persistor };
