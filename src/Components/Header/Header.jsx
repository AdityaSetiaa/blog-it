import React from 'react'
import Logo from '../logo.jsx'
import Logoutbtn from './Logoutbtn.jsx'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from '../Container/Container.jsx'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()

  const naItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All post",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow  bg-slate-900 shadow-sky-300 font-quicksand">
      <Container>
        <nav className="flex font-Quicksand">
          <div className="mr-4">
            <Link to="/">
              <div className='flex flex-wrap gap-5'>
              {/* <Logo width={100}/> */}
              {/* <blogit className='text-5xl font-medium text-white font-Rowdies'> BlogIt</blogit> */}
              </div>
            </Link>
          </div>
          <ul className="flex ml-auto gap-4"> {/* Added gap-4 here */}
            {naItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-6 py-2 text-white duration-300 rounded hover:bg-slate-600 duration-500"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;