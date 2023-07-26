import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ADD_CUSTOMER_RECEIVE_ALERT_PRICE_LIST } from '../ActionTypeRTK/actionType';
import { add_NewCustomerAPI } from '../../API/CustomerReceiveAlertPrice/CustomerAPI';

const initialState = {
  listCustomer: [],
}


// action : add new customer api
export let actionAddCustomerAPI = createAsyncThunk(
  ADD_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
  async (customerNew) => {
    let customerNew_API = await add_NewCustomerAPI(customerNew); //action api
    return customerNew_API; //payload
  }
);


export const customerSlice = createSlice({
  name: 'customerReceiveAlertPrice',
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  extraReducers: {
     // handle reducers  relate to middleware
    // handle when call API succesfully
    [actionAddCustomerAPI.fulfilled]: (state, action) => {
      state.listCustomer.push(action.payload);            //accountNewAPi
    },


  }
})


export let { actions } = customerSlice;
export default customerSlice.reducer