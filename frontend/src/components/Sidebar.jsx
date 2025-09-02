import React, { useEffect, useState } from 'react'
import { ImSearch } from "react-icons/im";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  setAuthUser, setOtherUsers, setSearchTerm, setSelectedUser } from '../redux/userSlice';

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const {socket} = useSelector(store=>store.socket)
    const logoutHandler = async () => {
        try {
            if(socket){
                socket.disconnect(); // Manual disconnection
            }
            const res = await axios.get('http://localhost:8080/api/v1/user/logout', { withCredentials: true });
            toast.success(res.data.message);
            dispatch(setSelectedUser(null));
            dispatch(setAuthUser(null));
            dispatch(setOtherUsers(null));
            dispatch(setSearchTerm(''));
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    const searchSubmitHandler = (e) =>{
        e.preventDefault();
        dispatch(setSearchTerm(search));
    }
   
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col' >
            <form onSubmit={searchSubmitHandler} className='flex items-center gap-2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='input input-boardered rounded-md'
                    placeholder='Search...'
                />
                <button type='submit' className='btn bg-transparent border-0.5 h-9.5 w-12  '>
                    <ImSearch className='text-black' />
                </button>
            </form>
            <div className="divider"></div>
            <OtherUsers />
            <div className="divider"></div>
            <div className='mt-2'>
                <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar