import axios from 'axios';

import { Property } from '@types';
import { SERVER_URL } from '../../config';

/** Gets all properties for the current user */
export const getCurrentUserProperties = () => axios.get(`${SERVER_URL}/users/current/properties`);

/** Gets a single property */
export const getCurrentUserProperty = (propertyId: number) =>
  axios.get(`${SERVER_URL}/users/current/properties/${propertyId}`);

/** Creates a property for the current user */
export const createCurrentUserProperty = (data: Property) =>
  axios.post(`${SERVER_URL}/users/current/properties`, data);

/** Updates a property given a property ID */
export const updateCurrentUserProperty = (propertyId: number, data: Property) =>
  axios.put(`${SERVER_URL}/users/current/properties/${propertyId}`, data);

/** Deletes a property given a property ID */
export const deleteCurrentUserProperty = (propertyId: number) =>
  axios.delete(`${SERVER_URL}/users/current/properties/${propertyId}`);
