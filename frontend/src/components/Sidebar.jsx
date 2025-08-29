import React from 'react'
import { ImSearch } from "react-icons/im";
import OtherUsers from './OtherUsers';

const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col' >
            <form action="" className='flex items-center gap-2'>
                <input
                    className='input input-boardered rounded-md'
                    placeholder='...'
                />
                <button type='submit' className='btn bg-transparent border-0.5 h-9.5 w-12  '>
                    <ImSearch className='text-black' />
                </button>
            </form>
            <div className="divider"></div>
            <OtherUsers />
            <div className="divider"></div>
            <div className='mt-2'>
                <button className='btn btn-sm'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar