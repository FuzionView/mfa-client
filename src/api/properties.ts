import { Property } from '@types';
import axios from 'axios';

export const getProperties = (userId: string) =>
  axios.get(`http://localhost:3000/properties/${userId}`);

export const createProperty = (userId: string, data: Property) =>
  axios.put(`http://localhost:3000/users/${userId}`, data);
