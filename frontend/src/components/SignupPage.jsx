import React from 'react'

const SignupPage = () => {
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center text-gray-300'>
          Signup
        </h1>
        <div>
          <label htmlFor="" className='label p-2'>
            <span className='text-base lable-text'>Full Name</span>
          </label>
          <input
            className='w-full input input-bordered h-10 placeholder:text-sm'
            type='text'
            placeholder='jhon doe'
          />
        </div>
        <div>
          <label htmlFor="" className='label p-2'>
            <span className='text-base lable-text'>Username</span>
          </label>
          <input
            className='w-full input input-bordered h-10 text-base placeholder:text-xs'
            type='text'
            placeholder='Username'
          />
        </div>
        <div>
          <label htmlFor="" className='label p-2'>
            <span className='text-base lable-text'>Password</span>
          </label>
          <input
            className='w-full input input-bordered h-10'
            type='Password'
          />
        </div>
        <div>
          <label htmlFor="" className='label p-2'>
            <span className='text-base lable-text'>Confirm Password</span>
          </label>
          <input
            className='w-full input input-bordered h-10'
            type='password'
            placeholder=''
          />
        </div>

      </div>
    </div>
  )
}

export default SignupPage