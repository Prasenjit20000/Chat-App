import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { setAuthUser } from '../redux/userSlice'

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  })
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/login', user, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      if (res.data.success) {
        dispatch(setAuthUser(res.data));
        toast.success(res.data.message);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    finally {
      setUser({
        userName: "",
        password: ""
      })
    }
  }

  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <form onSubmit={onSubmitHandler}>
          <h1 className='text-3xl font-bold text-center text-gray-300'>
            Login
          </h1>
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
          <div className='pb-3'>
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
          <div className='flex justify-center items-center'>
            <button type='submit' className='btn btn-block btn-sm mb-2 border-slate-700'>Login</button>
          </div>
          <div className='flex justify-center items-center gap-0.5 text-sm'>
            <p>Don't have an account?</p>
            <Link className='text-gray-800 font-semibold' to='/signup'>Signup</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage