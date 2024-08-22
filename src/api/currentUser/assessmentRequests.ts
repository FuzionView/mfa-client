import axios from 'axios';

import { AssessmentRequest } from '@types';
import { SERVER_URL } from '../../config';

/** Creates an assessment request for the current user and property */
export const createCurrentUserAssessmentRequest = (propertyId: number, data: AssessmentRequest) =>
  axios.post(`${SERVER_URL}/users/current/properties/${propertyId}/assessment-requests/all`, data);

/** Gets the latest assessment request status for a current user and property */
export const getCurrentUserAssessmentRequestStatus = (propertyId: number) =>
  axios.get(`${SERVER_URL}/users/current/properties/${propertyId}/assessment-requests/status`);

/** Gets a list of assessment requests for a given property */
export const getCurrentUserAssessmentRequests = (propertyId: number) =>
  axios.get(`${SERVER_URL}/users/current/properties/${propertyId}/assessment-requests/all`);
