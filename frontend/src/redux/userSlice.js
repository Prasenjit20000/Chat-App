import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"user",
    initialState:{
        authUser:null,
        otherUsers:null,
        selectedUser:null,
        searchTerm:''
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser = action.payload;
        },
        setOtherUsers:(state,action)=>{
            state.otherUsers = action.payload;
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload;
        },
        setSearchTerm:(state,action)=>{
            state.searchTerm=action.payload;
        }
    }
});

export const {setAuthUser,setOtherUsers,setSelectedUser,setSearchTerm} = userSlice.actions;
export default userSlice.reducer;