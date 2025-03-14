import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../Store/authSlice'

function Logoutbtn() {
    const Dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            Dispatch(logout())
        })
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-200' onClick={logoutHandler}>Logout</button>
  )
}

export default Logoutbtn
