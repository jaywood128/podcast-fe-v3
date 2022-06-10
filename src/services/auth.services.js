/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/auth';

const register = (name, username, email, password) =>
  axios.post(`${BASE_API_URL}/sign-up`, {
    name,
    username,
    email,
    password,
  });

const login = (username, password) =>
  axios.post(`${BASE_API_URL}/sign-in`, {
    username,
    password,
  });

/*    .then((response) => {
      if (response.status === 200 && response.data !== null && response.data.token !== null) {
        localStorage.setItem('user', response.data);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('token', response.data.token);
        console.log(
          `local storage token set to: ${localStorage.getItem('token')}`
        );
        console.log(`current user set to ${localStorage.getItem('user')}`);
        return response.data
      }

      return response.data;
    }); */

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  console.log(`After removing user ${localStorage.removeItem('user')} `);
  console.log(`After removing token ${localStorage.removeItem('token')} `);
};

const getCurrentUser = () => localStorage.getItem('user');

// const getAuthToken = () => {
//   // return authorization header with jwt token
//   const currentUser = getCurrentUser();
//   // console.log(currentUser.token);
//   if (currentUser !== null && currentUser.token !== null) {
//     return `Bearer ${currentUser.token}`;
//   }
//   return null;
// };

export default {
  register,
  login,
  logout,
  getCurrentUser,
  // getAuthToken,
};
