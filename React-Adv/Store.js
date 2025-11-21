import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './src/Countersslice'

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export default store;
