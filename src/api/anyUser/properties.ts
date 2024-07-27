import axios from 'axios';

import { Property } from '@types';
import { SERVER_URL } from '../../config';

/** Gets all properties for the current user */
export const getProperties = (userId: string) =>
  axios.get(`${SERVER_URL}/users/${userId}/properties`);

/** Gets a single property */
export const getProperty = (userId: string, propertyId: number) =>
  axios.get(`${SERVER_URL}/users/${userId}/properties/${propertyId}`);

/** Creates a property for the current user */
export const createProperty = (userId: string, data: Property) =>
  axios.post(`${SERVER_URL}/users/${userId}/properties`, data);

/** Updates a property given a property ID */
export const updateProperty = (userId: string, propertyId: number, data: Property) =>
  axios.put(`${SERVER_URL}/users/${userId}/properties/${propertyId}`, data);

/** Deletes a property given a property ID */
export const deleteProperty = (userId: string, propertyId: number) =>
  axios.delete(`${SERVER_URL}/users/${userId}/properties/${propertyId}`);
