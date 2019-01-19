import axios from 'axios';

export function getNotes() {
  return axios.get('note')
    .then(({ data }) => Promise.resolve(data))
    .catch(err => Promise.reject(err));
}
