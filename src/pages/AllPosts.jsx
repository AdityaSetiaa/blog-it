import { useEffect, useState } from 'react'
import React from 'react'
import Postcard from '../Components'
import PostForm from '../Components/Post-form'
import Container from '../Components/Container/Container'
import appwriteService from '../appwrite/config'

function AllPosts() {
    const [posts , setPosts ] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts) =>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8 mb-68 mt-68'>
        {/* <Container>
           <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard post={post}/>
                    </div>
                ))}
           </div>
        </Container> */}
        
    </div>
  )
}

export default AllPosts
