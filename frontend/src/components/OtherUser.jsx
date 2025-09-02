import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    const dispatch = useDispatch();
    const selectedUserHandler = (user)=>{
        dispatch(setSelectedUser(user));
    }
    const {onLineUsers} = useSelector(store=>store.user);
    const {selectedUser} = useSelector(store=>store.user);
    const isOnline = onLineUsers.includes(user?._id);
  return (
    <>
        <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser===user ? 'border-2 border-zinc-600  text-black': ''} flex items-center gap-2 hover:border-2 hover:border-zinc-600  hover:text-black rounded-lg cursor-pointer p-2`}>
            <div className={`avatar ${isOnline? 'avatar-online':''}`}>
                <div className='w-10 rounded-full'>
                    <img src={user?.profilePhoto}/>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-2 justify-between'>
                    <p>{user?.fullName}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default OtherUser