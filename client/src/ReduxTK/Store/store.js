import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../Reducer/formSlice'
import carSliceReducer from '../Reducer/carSliceReducer'
import formSlice2 from '../Reducer/formSlice2'
import  customerSlice  from '../Reducer/CustomerSliceReducer'

export const store = configureStore({
  reducer: {
    formReducer: formReducer,
    formSlice2: formSlice2,
    carReducer: carSliceReducer,
    customerSlice: customerSlice 
  },
})