import { Client,Account,Databases,ID } from "appwrite";
import conf  from "../config/conf";


class  AuthService{

     client = new Client();
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);
    }
    
     account = new Account(this.client)


     async CreateAccount({email, password,name}){

        try {

            return await this.account.create(ID.unique(),email,password,name)
            
        } catch (error) {
           console.log("can't create accoutn",error) 
        }
     }
}

const authService = new AuthService();
export default  authService;