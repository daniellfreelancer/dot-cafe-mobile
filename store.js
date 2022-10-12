import { configureStore }   from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import coffeeByKiloAPI from "./src/features/coffeeByKiloAPI";
import cartReducer from './src/features/cartSlice'
import usersAPI from './src/features/usersAPI'
import userReducer from './src/features/usersSlice'

const store = configureStore({


    reducer: {
        cart: cartReducer,
        [coffeeByKiloAPI.reducerPath]: coffeeByKiloAPI.reducer,
        [usersAPI.reducerPath] : usersAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coffeeByKiloAPI.middleware, usersAPI.middleware ),



  })

  setupListeners(store.dispatch)
  export default store