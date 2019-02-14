import axios from 'axios';
import config from '../config';
import { getTokenFromLocalStorage } from '../utils';
import { getNote, getNotes, createNote, updateNote, deleteNote } from './note';
import { register, login } from './user';


axios.defaults.baseURL = config.api;
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${getTokenFromLocalStorage()}`;
  return config;
})

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
