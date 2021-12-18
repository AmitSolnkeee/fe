import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//create action
 export const createPostAction = createAsyncThunk('/create/posts', async(post, {rejectWithValue,getState,dispatch})=>{
    const user = getState().users;
    const {userAuth} = user;
    const config = {
        headers :{
            Authorization : `Bearer ${userAuth?.token}`
        }
    }
    try {
        const {data} = await axios.post('https://mern-blog-api-v1.herokuapp.com/api/posts', post,config);
        return data;
    } catch (error) {
        if(!error?.response)throw new error;
        return(rejectWithValue(error?.response?.data))
    }
})

//slices
const postSlices = createSlice({
    name: 'post',
    initialState :{},
    extraReducers : (builder) => {
       builder.addCase(createPostAction.pending, (state,action)=>{
           state.loading = true;
       })
       builder.addCase(createPostAction.fulfilled, (state,action)=>{
           state.postCreated = action?.payload;
           state.loading = false;
           state.appErr = undefined;
           state.serverErr = undefined;
       })
       builder.addCase(createPostAction.rejected, (state,action)=>{
           state.loading = false;
           state.appErr = action?.payload?.message;
           state.serverErr = action?.error?.message;
       })
    }
})
export default postSlices.reducer