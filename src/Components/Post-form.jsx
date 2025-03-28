import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import { Button, Input, Select, RTE } from './index.js'
import Button from './button'
import Input from './input'
import Select from './Select'
import RTE from './RTE'
import appwriteService from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control}= useForm({
        defaultValues: {
            title: post?.title || '' ,
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData) 
    
    const submit = async(data) => {

        if(post){
            data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbpost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file? file.$id : undefined,
            })
            if(dbpost){
                navigate(`/post/${db.post.$id}`)
            } 
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);
            if(file){
                const field = file.$id
                data.featuredImage = fileId
                const dbpost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                    
                })
                if(dbpost){
                    navigate(`/post/${dbpost.$id}`)
                }

            }
        }
    }

    const slugTransform = useCallback((value)=>{  
        if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
    },[])
    useEffect(()=>{
        const subscription = watch((value, {name})=>{
            if(name === 'title'){
                setValue('slug', slugTransform(value.title,{shouldValidate: true}))
            }
        })
        return () => {
            subscription.unsubscribe();
        }
    },[watch, slugTransform, setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4 bg-white text-black rounded"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4 bg-white text-black rounded"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="" name="" control={control} defaultValue={""} />

    </div>
    <div className="w-1/3 px-2">
        <Input
            label="" 
            type="file"
            className="mb-4 bg-white text-black rounded"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        
    </div>
    
    <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4 mt-6 max-w-[66%]" 
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full  mt-6 max-w-[66%]">
            {post ? "Update" : "Submit"}
        </Button>
</form>
);
}
