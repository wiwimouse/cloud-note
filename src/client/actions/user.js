import api from '../api'

export const types = {
  UPDATE_USER: 'UPDATE_USER',
  CLEAR_USER: 'CLEAR_USER'
}

export const updateUser = user => ({ type: types.UPDATE_USER, payload: user })

export const clearUser = () => ({ type: types.CLEAR_USER })

export const login = ({ username, password }) => async dispatch => {
  try {
    const { user } = await api.user.login(username, password)
    dispatch({ type: types.UPDATE_USER, payload: user })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const logout = clearUser

export const register = ({ username, passowrd }) => async dispatch => {
  try {
    const { user } = await api.user.register(username, passowrd)
    dispatch({ type: types.UPDATE_USER, payload: user })
  } catch (err) {
    console.log(err)
    throw err
  }
}
