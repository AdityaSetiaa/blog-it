import React from 'react'
import {Container, Logo, Logoutbtn} from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()

  const naItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },{
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },{
      name: "All post",
      slug: "/all-post",
      active: authStatus
    },{
      name: "Add post",
      slug: "/add-post",
      active: authStatus
    },
  ]
  return (
    <header className='py-3 shadow bg-grey-500'>
          <Container>
            <nav className='flex'>
              <div className='mr-4'>
                  <Link to='/'>
                  <Logo/>
                  </Link>
              </div>
              <ul className='flex ml-auto'>
                {naItems.map((item)=>
                item.active ? (
                  <li key={item.name}>
                    <button onClick={()=>navigate} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100'>{item.name}</button>
                  </li>
                ) : null
                )}
                {authStatus && (
                  <li>
                    <Logoutbtn/>
                  </li>
                )}
              </ul>
            </nav>
          </Container>
    </header>
  )
}

export default Header
