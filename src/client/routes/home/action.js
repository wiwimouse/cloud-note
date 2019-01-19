import api from '../../api';

export const types = {
  GET_NOTES: 'GET_NOTES',
}

export const getNotes = () => async dispatch => {
  try {
    const notes = await api.note.getNotes();
    dispatch({ type: types.GET_NOTES, payload: notes });
  } catch (err) {
    console.log(err);
  }
}
