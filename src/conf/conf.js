const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    apprwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    apprwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    apprwritecollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    apprwritebucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default conf