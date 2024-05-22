import { UserProfile } from '@types';
import axios from 'axios';

export const getUserProfile = (userId: string) =>
  axios.get(`http://localhost:3000/users/${userId}`);

export const updateUserProfile = (userId: string, data: UserProfile) =>
  axios.post(`http://localhost:3000/users/${userId}`, data);
