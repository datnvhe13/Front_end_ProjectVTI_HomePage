import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_CARS_LIST } from '../ActionTypeRTK/actionType';
import { getListCarAPI } from '../../API/CarAPI';

const initialState = {
  listCar: [],
}
// action 
export let actionFetchListCarsAPI_MDW = createAsyncThunk(FETCH_CARS_LIST, async()=>{
    let listCarsAPI =  await getListCarAPI();
    return listCarsAPI;
})

export const carSliceReducer = createSlice({
  name: 'carSliceReducer',
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  extraReducers: {
    // handle reducers  relate to middleware
    // handle when call API succesfully
    [actionFetchListCarsAPI_MDW.fulfilled]: (state, action) => {
        state.listCar = action.payload
    }
  }
 
})
// export let {actions} = carSliceReducer
export default carSliceReducer.reducer
