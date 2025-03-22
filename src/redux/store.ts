import { productsReducer } from './products/slice';
import { blogReducer } from './blog/slice';
import cartReducer from './cart/slice';
import { filtersReducer } from './filters/slice';
import { wishlistReducer } from './wishlist/slice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const wishPersistConfig = {
    key: 'wish',
    storage,
};

const cartPersistConfig = {
    key: 'cart',
    storage,
};

const rootReducer = combineReducers({
    cart: persistReducer(cartPersistConfig, cartReducer),
    products: productsReducer,
    blog: blogReducer,
    filters: filtersReducer,
    wish: persistReducer(wishPersistConfig, wishlistReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
