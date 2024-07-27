import axios from 'axios';

import { UserProfile } from '@types';
import { SERVER_URL } from '../../config';

/** Gets profile data for the current user */
export const getCurrentUserProfile = () => axios.get(`${SERVER_URL}/users/current`);

/** Creates a profile for the current user */
export const createCurrentUserProfile = (data: UserProfile) =>
  axios.post(`${SERVER_URL}/users/current`, data);

/** Updates profile for the current user */
export const updateCurrentUserProfile = (data: UserProfile) =>
  axios.put(`${SERVER_URL}/users/current`, data);
