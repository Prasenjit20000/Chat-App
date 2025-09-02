import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client'
import { useState } from 'react';
import { setSocket } from './redux/socketSlice';
import { setOnLineUsers } from './redux/userSlice';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path:'/',
    element:<ProtectedRoute><HomePage/></ProtectedRoute>
    
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/signup',
    element:<SignupPage/>
  }
])


function App() {
  // const [socket,setSocket] = useState(null);
  const {authUser} = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const {socket} = useSelector(store=>store.socket);
  const {onLineUsers} = useSelector(store=>store.user);
  useEffect(()=>{
    if(authUser){
      const socket = io('http://localhost:8080',{
        withCredentials: true,
        transports: ['websocket', 'polling'],
        query:{
            userId:authUser?._id
        }
      });
      dispatch(setSocket(socket));
      socket.on('getOnlineUsers',(onlineUsers)=>{
        dispatch(setOnLineUsers(onlineUsers));
      })
      return ()=>socket.close();
    }else{
      if(socket){
        socket.close();
        dispatch(setSocket(null));
      }
    }
  },[authUser])
  console.log(onLineUsers)
  return (
    <div className='p-4 h-screen flex items-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
