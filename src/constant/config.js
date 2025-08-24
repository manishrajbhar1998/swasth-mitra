// export const API_PATH = window._env?.API_PATH || "http://localhost:9001";
export const API_PATH = window._env?.API_PATH || "https://www.swasthmitra.in/swasthyamitra";

// API URLs
export const LOGIN_API = "/api/auth/login";
export const LOGOUT_API = "/v2/user/logout"
export const POST_ENQUIRY_API = "/api/enquiry/submit";
export const GET_ENQUIRY_API = "/api/enquiry/all";
export const UPDATE_ENQUIRY_API = "/api/enquiry/update";
export const GET_REGISTERED_USERS = "/api/registration"
export const POST_USER_REGISTER = "/api/registration/submit"
export const POST_PURCHASE_PLAN_API = "/api/plan-purchase/submit";
export const GET_CUSTOMER_DASHBOARD = "api/plan-purchase";
export const GET_REGISTRED_USER_DETAILS = "/api/plan-purchase/all";
export const POST_FORGOT_PASSWORD = "/api/auth/forgot-password";
export const POST_RESET_PASSWORD = "/api/auth/reset-password";



