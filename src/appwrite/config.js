import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    database;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.database.createDocument(
                conf.apprwriteDatabaseId,
                conf.apprwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            
        }
    }
    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.database.updateDocument(
                conf.apprwriteDatabaseId,
                conf.apprwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }
    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.apprwriteDatabaseId,
                conf.apprwritecollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.apprwriteDatabaseId,
                conf.apprwritecollectionId,
                slug
            )
        } catch (error) {
            console.log(error)
        }
    }
    async getPosts(Queries = [Query.equal("status", "active")]){
    try {
        return await this.database.listDocuments(
            conf.apprwriteDatabaseId,
            conf.apprwritecollectionId,
            Queries,

        )
    } catch (error) {
        console.log(error)
        return false
    }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async deleteFile(fileID){
    try {
        return await this.bucket.deleteFile(
            conf.appwritebucketId,
            fileID
        )
        return true
    } catch (error) {
        console.log(error)
        return false
    }
    }
    async filePreview(fileID){
        try {
            return await this.bucket.getFilePreview(
                conf.apprwritebucketId,
                fileID
            )
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

const service = new Service()
export default service;