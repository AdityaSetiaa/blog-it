import React from 'react'
import Container from '../Components/Container/Container'
import PostForm from '../Components/Post-form'

export default function Addpost() {
  return (
    <div className='w-full py-8'>
        <Container>
           <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard post={post}/>
                    </div>
                ))}
           </div>
        </Container>
    </div>
  )
}
