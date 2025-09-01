import React, { useRef, useState } from 'react'
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const SendInput = () => {

  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const {selectedUser} = useSelector(store=>store.user);
  const {messages} = useSelector(store=>store.message);
  

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,{message},{
        headers : {
          'Content-Type':'application/json'
        },
        withCredentials:true
      });

      dispatch(setMessages([...messages,res?.data?.newMessage]));
      setMessage('');
    } catch (error) {
      console.log(error); 
    }

  }
  return (
    <div>
      <form onSubmit={onSubmitHandler} className='px-4 my-3'>
        <div className='w-full relative'>
          <input
            type='text'
            placeholder='Send a message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='border text-sm rounded-lg block w-full placeholder:text-black text-black p-3 border-zinc-300'
          />
          <button type='submit' className='absolute flex items-center inset-y-0 end-0 pr-4 hover:cursor-pointer'>
            <IoSend className='h-5 w-5' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SendInput