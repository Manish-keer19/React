// import conf from "../config/conf";
// import { Client, Account, ID } from "appwrite";

// export class AuthService {

//     Client = new Client();
//     account;

//     constructor() {
//         this.Client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.Client)

//     }

//     async createAccount({ email, password, name }) {

//         try {
//             const useraccount = await this.account.create(ID.unique(), email, password, name)

//             if (useraccount) {
//                 //  call another method :
//                 return this.Login({ email, password })
//             }
//             else {
//                 return useraccount;
//             }
//         } catch (error) {

//             console.log("create account eroor", error);
//         }
//     }

//     async Login({ email, password }) {
//         try {

//             return await this.account.createEmailPasswordSession(email, password)

//         } catch (error) {

//             throw error

//         }
//     }


//     async getCurrentUser() {
//         try {
//             return await this.account.get();

//         } catch (error) {
//             throw error;
//         }

//         return null;
//     }


//     async Logout() {

//         try {

//             await this.account.deleteSessions();
//         } catch (error) {

//             throw error;
//         }
//     }




// }



// const authService = new AuthService

// export default authService





import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.Login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Create account error", error);
      throw error;
    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Get current user error", error);
      throw error;
    }
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("Logout error", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
