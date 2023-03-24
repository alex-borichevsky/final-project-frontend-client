import {combineReducers, configureStore} from "@reduxjs/toolkit";
import categoryReducer from './app/categories/store/categories.slice';
import userInfoReducer from './app/users/store/users.slice';
import userOrderReducer from './app/orders/store/orders.slice';
import userSettingsReducer from './app/settings/store/settings.slice';

const rootReducer = combineReducers({
    categoryReducer,
    userInfoReducer,
    userOrderReducer,
    userSettingsReducer
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
