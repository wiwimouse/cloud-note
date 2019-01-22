import axios from 'axios';
import config from '../config';
import { getNote, getNotes, createNote, updateNote, deleteNote } from './note'

axios.defaults.baseURL = config.api;
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMzQ2M2IxYmM1MTFlMjE2NjJlMmI2NiIsInVzZXJuYW1lIjoid2l3aSIsImV4cCI6MTU1MzMyMjYzMiwiaWF0IjoxNTQ4MTM4NjMyfQ.JyXu_rb4mWkAHgvovJH5KYnt1f7sfKYReLjiHNm4Utw'

export const note = {
  getNote,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};

export default {
  note,
};
