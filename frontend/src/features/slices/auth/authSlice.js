import {createSlice,nanoid} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    userDetail : {},
}

function authenticateUser (state,action) {
    
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        authenticateUser,
    }
})