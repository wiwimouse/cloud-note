import axios from 'axios';

export function getNotes() {
  return axios.get('note')
    .then(({ data }) => Promise.resolve(data))
}

export function createNote() {
  return axios.post('note')
    .then(({ data }) => Promise.resolve(data))
}

export function getNote(slug) {
  return axios.get(`note/${slug}`)
    .then(({ data }) => Promise.resolve(data))
}
