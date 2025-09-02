import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  // const user = useSelector((state)=>state.userSlice.authUser)
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden  bg-clip-padding backdrop-f backdrop-blur-lg mx-auto'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage