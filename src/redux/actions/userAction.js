import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";
import { toggleLoading } from "./loadingActions";

const userRegister = ({ name, email, error }) => {
  return {
    type: userTypes.CREATE_USER,
    payload: {
      name,
      email,
      error,
    },
  };
};

export const userRegisterAsync = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());

      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      dispatch(userRegister({ name, email, error: false }));

      dispatch(toggleLoading());
    } catch (error) {
      console.log(error);
      dispatch(userRegister({ name, email, error: true }));
    }
  };
};
const userLogin = (user) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: user,
  };
};

export const userLoginAsync = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      sessionStorage.setItem(
        "userToken",
        JSON.stringify(user.auth.currentUser)
      );
      dispatch(
        userLogin({
          name: user.user.displayName,
          email: user.user.email,
          error: false,
        })
      );
    } catch (error) {
      dispatch(
        userLogin({
          name: "",
          email: "",
          error: true,
        })
      );
      console.log(error);
    }
  };
};

const userLogOut = () => {
  return {
    type: userTypes.LOGOUT_USER,
  };
};
export const userLogOutAync = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(userLogOut());
    } catch (error) {
      console.log(error);
    }
  };
};

export const userLoginProvider = (provider) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      dispatch(
        userLogin({
          name: user.user.displayName,
          email: user.user.email,
          error: false,
        })
      );
    } catch (error) {
      dispatch(
        userLogin({
          name: "",
          email: "",
          error: true,
        })
      );
      console.log(error);
    }
  };
};
