import axios from 'axios';

import { AssessmentRequest } from '@types';
import { SERVER_URL } from '../../config';

/** Creates an assessment request for the specified user and property */
export const createAssessmentRequest = (
  userId: string,
  propertyId: number,
  data: AssessmentRequest,
) =>
  axios.post(`${SERVER_URL}/users/${userId}/properties/${propertyId}/assessment-requests/`, data);

/** Gets the assessment request status for a specified user and property */
export const getRequestStatus = (userId: string, propertyId: number) =>
  axios.get(`${SERVER_URL}/users/${userId}/properties/${propertyId}/assessment-requests/status`);

/** Gets a list of assessment requests for a given property */
export const getAssessmentRequests = (userId: string, propertyId: number) =>
  axios.get(`${SERVER_URL}/users/${userId}/properties/${propertyId}/assessment-requests/all`);
