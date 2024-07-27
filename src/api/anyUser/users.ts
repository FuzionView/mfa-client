import axios from 'axios';

import { UserProfile } from '@types';
import { SERVER_URL } from '../../config';

/** Gets profile data for the specified user */
export const getUserProfile = (userId: string) => axios.get(`${SERVER_URL}/users/${userId}`);

/** Creates a profile for the specified user */
export const createUserProfile = (data: UserProfile, userId: string) =>
  axios.post(`${SERVER_URL}/users/${userId}`, data);

/** Updates profile for the specified user */
export const updateUserProfile = (data: UserProfile, userId: string) =>
  axios.put(`${SERVER_URL}/users/${userId}`, data);
