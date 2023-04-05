
import instance from "./instance";
import localStorageApi from "./localStorageApi";

const config = {
  headers: { 'content-type': 'multipart/form-data' }
}

const auth_api = {
  login: (data: unknown) => {
    return instance.post(`/login`, data);
  },

  login_google: (data: unknown) => {
    return instance.post(`/login/google`, data);
  },

  signup: (data: unknown) => {
    return instance.post(`/signup`, data);
  },

  refresh_access_token: () => {
    return instance.post(`/token-refresh`, JSON.stringify(localStorageApi.getRefreshToken()));
  }


}

export {
  auth_api,
};

