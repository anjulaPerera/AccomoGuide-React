export enum RouteName {
  //public routes
  ROOT = "/",
  LOGIN = "/login",
  SIGNUP = "/signup",
  HOME = "/home",

  //user routes
  WARDEN_PAGE = "/accomo/warden",
  STUDENT_PAGE = "/accomo/student",
  LANDLORD_PAGE = "/accomo/landlord/dashboard",
  ADD_PROPERTY_PAGE = "/accomo/landlord/add-property",
  STUDENT_REQUEST = "/accomo/landlord/student-request",
  PROPERTY_MANAGEMENT = "/accomo/landlord/property-management",
  ARTICLE_PAGE = "/accomo/article",

  //admin routes
  ADMIN_PAGE = "/admin/dashboard", 
  ADD_ARTICLE_PAGE = "/admin/add-article",
}
