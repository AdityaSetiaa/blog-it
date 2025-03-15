const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    apprwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    apprwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    apprwritecollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    apprwritebucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf

