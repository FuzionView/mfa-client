import axios from 'axios';

import { SERVER_URL } from '../config';

export const getAllProperties = (pageNumber: number) =>
  axios.get(`${SERVER_URL}/all-properties/${pageNumber}`);
