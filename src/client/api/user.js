import axios from 'axios';

export function register(username, password) {
  return axios
    .post('/user', {
      user: {
        username,
        password,
      }
    })
    .then(({ data }) => Promise.resolve(data));
};

export function login(username, password) {
  return axios
    .post('/user/login', {
      user: {
        username,
        password,
      }
    })
    .then(({ data }) => Promise.resolve(data));
};
