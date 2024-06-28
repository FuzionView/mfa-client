import axios from 'axios';

import { UserProfile } from '@types';

export const getUserProfile = (userId: string) =>
  axios.get(`http://localhost:4000/users/${userId}`);

export const createUserProfile = (userId: string, data: UserProfile) =>
  axios.put(`http://localhost:4000/users/${userId}`, data);

export const updateUserProfile = (userId: string, data: UserProfile) =>
  axios.post(`http://localhost:4000/users/${userId}`, data);
