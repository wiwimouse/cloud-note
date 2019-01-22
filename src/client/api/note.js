import axios from 'axios';

export function getNotes() {
  return axios
    .get('note')
    .then(({ data }) => Promise.resolve(data));
}

export function createNote(body) {
  return axios
    .post('note', {
      note: {
        body,
      },
    })
    .then(({ data }) => Promise.resolve(data.note));
}

export function getNote(slug) {
  return axios
    .get(`note/${slug}`)
    .then(({ data }) => Promise.resolve(data.note));
}

export function updateNote(slug, body) {
  return axios
    .put(`/note/${slug}`, {
      note: {
        body,
      },
    })
    .then(({ data }) => Promise.resolve(data))
}

export function deleteNote(slug) {
  return axios
    .delete(`/note/${slug}`)
    .then(({ data }) => Promise.resolve(data))
}
