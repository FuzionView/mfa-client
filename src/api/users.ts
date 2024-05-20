import axios from 'axios';

export const getUserProfile = (userId: string) =>
  axios.get(`http://localhost:3000/users/${userId}`);
