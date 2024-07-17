import conf from "../config/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {

    client = new Client();
    Databases;
    bucket;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async CreatePost({ title, slug, content, featuredImgagem, status, userId }) {

        try {
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImgagem,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImgagem, status }) {

        try {
            return await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImgagem,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deleteDocument(slug) {
        try {

            await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
                ,
                slug,
            )
            return true
        } catch (error) {

            throw error
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

        } catch (error) {
            throw error
            return false;
        }
    }


    async getPosts(queries = [Query.equal("status", active)]) {
        try {
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )

        } catch (error) {
            throw error;
            return false;
        }

    }

    // file upload method 
    async uploadFlie(file){
 try {
    return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file

    )
     
 } catch (error) {
    throw error;
    return false;
 }
    }


    async deletFile(fileid){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileid,
            )
            
        } catch (error) {
          throw error;  
        }
    }

    async getfilepreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}


const service = new Service();
export default service;