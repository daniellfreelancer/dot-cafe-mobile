import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import coffeeByKiloAPI from "./src/features/coffeeByKiloAPI";
import cartReducer from './src/features/cartSlice'
import usersAPI from './src/features/usersAPI'
import userReducer from './src/features/usersSlice'
import filtersAPI from "./src/features/filtersAPI";
import mugsAPI from "./src/features/mugsAPI";
import giftCardsAPI from "./src/features/giftCardsAPI";
import coffeeMachinesAPI from "./src/features/machineAPI";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [coffeeByKiloAPI.reducerPath]: coffeeByKiloAPI.reducer,
        [usersAPI.reducerPath]: usersAPI.reducer,
        [filtersAPI.reducerPath]: filtersAPI.reducer,
        [mugsAPI.reducerPath]: mugsAPI.reducer,
        [giftCardsAPI.reducerPath]: giftCardsAPI.reducer,
        [coffeeMachinesAPI.reducerPath]: coffeeMachinesAPI.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coffeeByKiloAPI.middleware, usersAPI.middleware, filtersAPI.middleware,
        mugsAPI.middleware, giftCardsAPI.middleware, coffeeMachinesAPI.middleware)
})

setupListeners(store.dispatch)
export default store