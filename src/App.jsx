import {useDispatch} from 'react-redux'
import { useState, useEffect } from 'react'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './Store/authSlice.js'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'
import { Outlet } from 'react-router-dom' 


function App() {
// console.log(import.meta.env.VITE_APPWRITE_URL)
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()
useEffect(()=>{
      authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=>{setLoading(false)})
},[])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-slate-800'>
      <div className='w-full block'>
      <Header />
      <main>
      <Outlet/>
      </main>
      <Footer/>
      </div>
    </div>
  ) : null
}

export default App
