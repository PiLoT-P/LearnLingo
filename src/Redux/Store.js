import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import teachersReducer from './teachers/teachersSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
}

const teachersPersistConfig = {
    key: 'teacher',
    storage,
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedTeachersReducer = persistReducer(teachersPersistConfig, teachersReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        teachers: persistedTeachersReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);