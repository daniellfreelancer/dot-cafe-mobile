import { configureStore }   from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import coffeeByKiloAPI from "./src/features/coffeeByKiloAPI";
import cartReducer from './src/features/cartSlice'

const store = configureStore({


    reducer: {
        cart: cartReducer,
        [coffeeByKiloAPI.reducerPath]: coffeeByKiloAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coffeeByKiloAPI.middleware ),



  })

  setupListeners(store.dispatch)
  export default store