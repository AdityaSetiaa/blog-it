import React from 'react'
import { useEffect, useState } from 'react'
import Postcard from '../Components/Postcard'
import Container from '../Components/Container/Container'
import appwriteService from '../appwrite/config'
import { login } from '../Store/authSlice'

export default function Home() {
    const [posts, setPosts] = useState([])
        useEffect(()=>{
            appwriteService.getPosts().then((posts)=>{
                if(posts){
                    setPosts(posts.documents)
                }
            })
        }, [])
            
            if(posts.length === 0){
                return(
                    <div className='w-full mb-62 mt-62 py-8 text-center text-gray-500'>
                        <Container>
                            <div className='flex flex-wrap'>
                                <div className='p-2 w-full'>
                                    <h1 className='text-2xl font -bold hover:text-black'>
                                        login to read posts
                                    </h1>
                                </div>
                            </div>
                        </Container>
                    </div>
                )
            }
            return (
                <div className='w-full py-8'>
                    <Container>
                        <div className='flex flex-wrap'>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <Postcard {...post} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            )

}
