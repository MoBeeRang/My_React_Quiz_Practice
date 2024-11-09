import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
   name: 'auth',
   initialState: { isAuthenticated: false },
   reducers: {
      login: (state, action) => {
         state.isAuthenticated = true
      },
      logout: (state, action) => {
         state.isAuthenticated = false
      },
      //  여기에 코드 작성
   },
})

export default authSlice
export const { login, logout } = authSlice.actions
