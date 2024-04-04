import axios from "axios";
import { AppResponse } from "../models/Response";
import { Util } from "../Util";
import { User, UserData } from "../models/User";

export class AdminService {
  public static async getUserDetails(
    tournament: any
  ): Promise<AppResponse<User>> {
    const url = Util.apiAuthUrl(`get/user`);
    return await axios.get<any, AppResponse<User>>(url);
  }
  public static async resetPassword({
    currentPassword,
    newPassword,
  }: any): Promise<AppResponse<User>> {
    const url = Util.apiAuthUrl(`reset/password`);
    const data = {
      currentPassword: currentPassword,
      newPassword: newPassword,
    };
    return await axios.post<any, AppResponse<User>>(url, data);
  }

  public static async getAllUserListByAdmin(
    limit: number,
    offset: number
  ): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`get/user-list/${limit}/${offset}`);
    return await axios.get<void, AppResponse<any>>(url);
  }
  public static async getEveryUserByAdmin(): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`get/every-user`);
    return await axios.get<void, AppResponse<any>>(url);
  }
  public static async getUserById(userId: any): Promise<AppResponse<User>> {
    const url = Util.apiAuthUrl(`get/user/${userId}`);
    return await axios.get<User, AppResponse<any>>(url);
  }
  public static async registerAUserByWebMaster(data: Partial<any>): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl("signup/accounts");
    return await axios.post<Partial<any>, AppResponse<any>>(url, data);
  }
  public static async getPostsToApprove(data: Partial<any>): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl("view-all/properties");
    return await axios.get<Partial<any>, AppResponse<any>>(url, data);
  }
  public static async getApprovedPosts(data: Partial<any>): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl("view/properties");
    return await axios.get<Partial<any>, AppResponse<any>>(url, data);
  }
  public static async getPostsByUserWithStudentRequests(userId:any): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`view/properties/student/requests/${userId}`);
    return await axios.get<Partial<any>, AppResponse<any>>(url);
  }
  public static async approvePostByWarden(postId:any, wardenId:any): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`approve/property/${postId}/${wardenId}`);
    return await axios.post<Partial<any>, AppResponse<any>>(url);
  }
  public static async rejectPostByWarden(postId:any, wardenId:any): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`reject/property/${postId}/${wardenId}`);
    return await axios.post<Partial<any>, AppResponse<any>>(url);
  }
  public static async acceptByLandLord(postId:any, landlordId:any): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`accept/student/request/${postId}/${landlordId}`);
    return await axios.post<Partial<any>, AppResponse<any>>(url);
  }
  public static async rejectByLandLord(postId:any, landlordId:any): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`reject/student/request/${postId}/${landlordId}`);
    return await axios.post<Partial<any>, AppResponse<any>>(url);
  }
  public static async sendReservationReq(studentId:any, postId:any): Promise<AppResponse<any>> {
    const url = Util.apiAuthUrl(`send/property/request/${studentId}/${postId}`);
    return await axios.post<Partial<any>, AppResponse<any>>(url);
  }
}
