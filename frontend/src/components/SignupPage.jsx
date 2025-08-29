import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import toast from 'react-hot-toast'

const SignupPage = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: ""

  })
  const handleCheckBox = (gender) => {
    setUser({ ...user, gender: gender })
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/register', user, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    finally {
      setUser({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
      })
    }
  }
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <form onSubmit={onSubmitHandler}>
          <h1 className='text-3xl font-bold text-center text-gray-300'>
            Signup
          </h1>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base lable-text'>Full Name</span>
            </label>
            <input
              className='w-full input input-bordered h-10 text-base placeholder:text-xs placeholder:text-gray-600'
              type='text'
              placeholder='full name'
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base lable-text'>Username</span>
            </label>
            <input
              className='w-full input input-bordered h-10 text-base placeholder:text-xs placeholder:text-gray-600'
              type='text'
              placeholder='username'
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base lable-text'>Password</span>
            </label>
            <input
              className='w-full input input-bordered h-10 text-base placeholder:text-xs placeholder:text-gray-600'
              type='Password'
              placeholder='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base lable-text'>Confirm Password</span>
            </label>
            <input
              className='w-full input input-bordered h-10 text-base placeholder:text-xs placeholder:text-gray-600'
              type='password'
              placeholder='confirm password'
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
            />
          </div>
          <div className='flex items-center py-3 gap-3'>
            <div className='flex items-center'>
              <p className='mx-1'>Male</p>
              <input
                type="checkbox"
                className="checkbox border-gray-500"
                checked={user.gender === "male"}
                onChange={() => handleCheckBox("male")} />
            </div>
            <div className='flex items-center'>
              <p className='mx-1'>Female</p>
              <input
                type="checkbox"
                className="checkbox border-gray-500"
                checked={user.gender === "female"}
                onChange={() => handleCheckBox("female")}
              />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <button type='submit' className='btn btn-block btn-sm mb-2 border-slate-700'>Signup</button>
          </div>
          <div className='flex justify-center items-center gap-0.5 text-sm'>
            <p>Already have an account?</p>
            <Link className='text-gray-800 font-semibold' to='/login'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage