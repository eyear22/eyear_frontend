import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

axios.defaults.withCredentials = true;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// export const authRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });
