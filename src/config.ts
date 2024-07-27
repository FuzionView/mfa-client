import axios from 'axios';

export const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
export const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;

export const AUTHO_AUDIENCE = 'https://mfa/api';

export const setAccessToken = (accessToken: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  axios.defaults.withCredentials = true;
};

export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
