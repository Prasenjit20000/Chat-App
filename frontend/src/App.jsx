import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
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

  return (
    <div className='p-4 h-screen flex items-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
