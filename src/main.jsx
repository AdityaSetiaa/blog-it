import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './Store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Protected from './Components/index.js'
import Addpost from './pages/Addpost.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>

      },
      {
        path:"/login",
        element:(
          <Protected authentication={false}>
            <Login/>
          </Protected>
        )
      },
      {
        path:"/signup",
        element:(
          <Protected authentication={false}>
            <Signup/>
          </Protected>
        )
      },
      {
        path:"/all-posts",
        element:(
          <Protected authentication={false}>
            {" "}
            <AllPosts/>
          </Protected>
        )
      }, {
        path:"/all-posts",
        element:(
          <Protected authentication>
            {" "}
            <AllPosts/>
          </Protected>
        )
      }, {
        path:"/add-post",
        element:(
          <Protected authentication>
            {" "}
            <Addpost/>
          </Protected>
        )
      }, {
        path:"/edit-post/:slug",
        element:(
          <Protected authentication>
            {" "}
            <EditPost/>
          </Protected>
        )
      }, {
        path:"/post/:slug",
        element:(
          <Protected authentication>
            {" "}
            <Post/>
          </Protected>
        )
      }, {
        path:"/edit-post/:slug",
        element:(
          <Protected authentication>
            {" "}
            <EditPost/>
          </Protected>
        )
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
