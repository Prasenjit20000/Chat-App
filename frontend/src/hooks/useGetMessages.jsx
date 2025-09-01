import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice';


const useGetMessages = () => {
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store=>store.user);
  useEffect(()=>{
    const fetchMessages = async()=>{
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`,{withCredentials:true});
            console.log(res);
            dispatch(setMessages(res.data));
        } catch (error) {
            console.log(error);
        }
    }
    fetchMessages();
  },[selectedUser])
}

export default useGetMessages