import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector } from 'react-redux'

const MessageContainer = () => {
  const { selectedUser,authUser } = useSelector(store => store.user);
  return (
    <>
      {
        selectedUser ? (
          <div className='flex md:min-w-[550px] flex-col '>
            <div className='flex items-center gap-2    px-4 py-2 bg-zinc-800 '>
              <div className='avatar avatar-online'>
                <div className='w-10 rounded-full'>
                  <img src={selectedUser?.profilePhoto} />
                </div>
              </div>
              <div className='flex flex-col flex-1'>
                <div className='flex gap-2 justify-between'>
                  <p>{selectedUser?.fullName}</p>
                </div>
              </div>
            </div>
            <Messages />
            <SendInput />
          </div>
        ) :
          (
            <div className='md:min-w-[550px] flex flex-col justify-center items-center '>
              <h1 className='text-4xl'>
                Hi,{authUser?.fullName}
              </h1>
              <h1 className='text-xl'>
                Let's start conversation.
              </h1>
            </div>
          )
      }
    </>
  )
}

export default MessageContainer