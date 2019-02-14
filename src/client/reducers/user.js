import { types } from '../actions/user'

const initialState = () => {
  const user = localStorage.getItem('user')

  if (user) {
    const { username, token } = JSON.parse(user)
    return {
      username: username || '',
      token: token || ''
    }
  }

  return {
    username: '',
    token: ''
  }
}

export default (state = initialState(), action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      const { username, token } = action.payload
      localStorage.setItem('user', JSON.stringify({ username, token }))
      return { username, token }
    case types.CLEAR_USER:
      localStorage.removeItem('user')
      return initialState()
    default:
      return state
  }
}
