import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loggedIn: false,
}

const Login = createAsyncThunk('Authentication/Login', async() => {
    try {
        const request = await axios.get('')
    } catch (error) {
        
    }
})