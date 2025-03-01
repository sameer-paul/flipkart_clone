import {configureStore} from '@reduxjs/toolkit'
import { authenticateUser } from '../features/slices/auth/authSlice'

const store = configureStore({
    reducer : {
        auth: authenticateUser
    }
})

export default store