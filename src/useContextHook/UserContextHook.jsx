import { React, createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase_utils.js";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_STATE = {
  currentUser: null,
};

const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`unHandle type${type} in reducer function`);
  }
};

const UserContextHook = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const {currentUser} = state;

  //console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: user,
    });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      //console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContextHook;
