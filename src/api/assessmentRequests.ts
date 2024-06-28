import axios from 'axios';

import { AssessmentRequest } from '@types';

export const createAssessmentRequest = (propertyId: number, data: AssessmentRequest) =>
  axios.put(`http://localhost:4000/assessment-requests/${propertyId}`, data);

export const getRequestStatus = (propertyId: number) =>
  axios.get(`http://localhost:4000/assessment-requests/${propertyId}/status`);
