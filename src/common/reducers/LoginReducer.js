import * as Constants from '../../common/constants'

const initialState = {
  username: null,
  password: null,
  pin: null,
  loginSuccess: false,
  errorMessage: null,
  pinError: null
}
export default function (state = initialState, action) {
  switch (action.type) {
    case Constants.SET_PREVIOUS_USERS:
      const data = action.data
      if (data.lastUser) {
        data.userList.forEach(function (element) {
          if (element.username === data.lastUser) {
            data.lastUser = {
              username: data.lastUser,
              pinEnabled: element.pinEnabled
            }
          }
        }, this)
      }
      if (data.lastUser) {
        return { ...state, username: data.lastUser.username }
      }
      if (data.userList.length > 0) {
        const topUser = data.userList[0]
        return { ...state, username: topUser.username }
      }
      return state
    case Constants.LOGIN_SUCCEESS:
      return { ...state, loginSuccess: true, loginPasswordErrorMessage: null }
    case Constants.LOGIN_USERNAME_PASSWORD_FAIL:
      return { ...state, errorMessage: action.data }

    default:
      return state
  }
}