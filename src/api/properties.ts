import axios from 'axios';

import { Property } from '@types';

export const getProperties = (userId: string) =>
  axios.get(`http://localhost:4000/properties/${userId}`);

export const getProperty = (userId: string, propertyId: number) =>
  axios.get(`http://localhost:4000/properties/${userId}/${propertyId}`);

export const createProperty = (userId: string, data: Property) =>
  axios.put(`http://localhost:4000/properties/${userId}`, data);

export const updateProperty = (userId: string, propertyId: number, data: Property) =>
  axios.post(`http://localhost:4000/properties/${userId}/${propertyId}`, data);

export const deleteProperty = (userId: string, propertyId: number) =>
  axios.delete(`http://localhost:4000/properties/${userId}/${propertyId}`);
