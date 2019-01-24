import axios from 'axios';
import config from '../config';
import { getNote, getNotes, createNote, updateNote, deleteNote } from './note';
import { register, login } from './user';

axios.defaults.baseURL = config.api;
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDJjYjdhNjI1YWJiNWUyZmRmZDc3MSIsInVzZXJuYW1lIjoid2l3aSIsImV4cCI6MTU1MzA2NTMzOCwiaWF0IjoxNTQ3ODgxMzM4fQ.zK14XaGF-jLHs064uHJFLnveczPj4HB0GHEANinIxYk'

export const note = {
  getNote,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};

export const user = {
  register,
  login,
};

export default {
  note,
  user,
};
