import {React,createContext,useState,useEffect} from 'react';
import {onAuthStateChangedListener,createUserDocumentFromAuth} from "../utils/firebase/firebase_utils.js";

export const userContext = createContext({
  currentUser : null,
  setCurrentUser: ()=>null,
});

const UserContextHook = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser,setCurrentUser};

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
      console.log(user);
      if(user)
      {createUserDocumentFromAuth(user);}
      setCurrentUser(user);
    });
    return unsubscribe;
  },[])


  return (
   <userContext.Provider value={value}>
          {children}
   </userContext.Provider>
  )
}

export default UserContextHook