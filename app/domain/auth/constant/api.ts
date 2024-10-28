import { COMMON_API_REQUEST_PREFIX } from "@constants/api";

export const authApis = {
  authLogin: `${COMMON_API_REQUEST_PREFIX.POST}/auth/login`,
  authLogout: `${COMMON_API_REQUEST_PREFIX.POST}/auth/logout`,
  authRegister: `${COMMON_API_REQUEST_PREFIX.POST}/auth/register`,
};
