import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const formSlice2 = createSlice({
  name: 'form',
  initialState,
  reducers: {
    showForm2: (state) => {
      state.value = true
    },
    closeForm2: (state) => {
      state.value = false
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { showForm2, closeForm2 } = formSlice2.actions

export default formSlice2.reducer