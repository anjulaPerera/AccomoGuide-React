import axios from "axios";
import { AppResponse } from "../models/Response";
import { Util } from "../Util";
import { User } from "../models/User";

export class PublicService {

  public static async signUp(data: Partial<any>): Promise<AppResponse<any>> {
    const url = Util.apiPublicUrl("signup/landlord");
    return await axios.post<Partial<any>, AppResponse<any>>(url, data);
  }
  public static async createPost(data: Partial<any>, userId: string): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`create/landlord/post/${userId}`); 
    return await axios.post<Partial<any>, AppResponse<any>>(url, data);
  }
  public static async updateProperty(data: Partial<any>, userId: string, postId:string): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`update/property/${postId}/${userId}`); 
    return await axios.post<Partial<any>, AppResponse<any>>(url, data);
  }
  public static async deleteProperty(userId: string, postId:string): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`delete/property/${postId}/${userId}`); 
    return await axios.post<Partial<any>, AppResponse<any>>(url);
  }
  public static async viewProperties(userId: string): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`view/properties/${userId}`); 
    return await axios.get<Partial<any>, AppResponse<any>>(url);
  }

  public static async verifyOtp(data: Partial<any>): Promise<AppResponse<any>> {
    const url = Util.apiPublicUrl("verify-otp");
    return await axios.post<Partial<any>, AppResponse<any>>(url, data);
  }
  public static async getArticles(): Promise<AppResponse<any>> {
    const url = Util.apiPublicUrl("get/articles");
    return await axios.get<Partial<any>, AppResponse<any>>(url);
  }

  public static async getLoggedInUser(): Promise<AppResponse<User>> {
    const url = Util.apiAuthUrl("get/user");
     return await axios.get<User, AppResponse<User>>(url);
  }
  
}
