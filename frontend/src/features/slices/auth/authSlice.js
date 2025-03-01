import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  accessToken: null, // Store access token for authentication
  refreshToken: null, // Store refresh token for refreshing tokens
  isAuthenticated: false, // Boolean to check if user is logged in
  loading: false, // To track API request state
  error: null, // Store error messages from API
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        authenticateUser: (state,action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.isAuthenticated = true
            state.loading = false
            state.error = null        
        },
        logoutUser: (state,action) => {
            return {...initialState}
        },
        setLoading: (state,action) => {
            state.loading = action.payload
        },
        setError: (state,action) => {
            state.error = action.payload
        }    
    }
})

export const { authenticateUser, logoutUser, setLoading, setError } = authSlice.actions
export default authSlice.reducer 