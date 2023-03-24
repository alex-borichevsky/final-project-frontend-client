import {combineReducers, configureStore} from "@reduxjs/toolkit";
import categoryReducer from './app/categories/store/categories.slice';

import productsReducer from './app/products/store/products.slice'

const rootReducer = combineReducers({
    categoryReducer,
    productsReducer,
    authReducer
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
