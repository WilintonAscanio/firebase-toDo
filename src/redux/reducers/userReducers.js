import { userTypes } from "../types/userTypes";

const initialState = {
  name: "",
  email: "",
  error: false,
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.CREATE_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        error : action.payload.error
      };

    case userTypes.LOGIN_USER:
        return {
            ...action.payload

        }  
    case userTypes.LOGOUT_USER :
      return {
        ...state
      }    

    default:
      return initialState;
  }
};
