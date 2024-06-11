import { AssessmentRequest } from '@types';
import axios from 'axios';

export const createAssessmentRequest = (propertyId: number, data: AssessmentRequest) =>
  axios.put(`http://localhost:4000/assessment-requests/${propertyId}`, data);
