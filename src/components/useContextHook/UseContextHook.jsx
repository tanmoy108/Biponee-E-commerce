import {React,createContext,useState,useEffect} from 'react';
import {onAuthStateChangedListener,createUserDocumentFromAuth} from "../../utils/firebase/firebase_utils.js";

export const context = createContext({
  currentUser : null,
  setCurrentUser: ()=>null,
});

const UseContextHook = ({children}) => {

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
   <context.Provider value={value}>
          {children}
   </context.Provider>
  )
}

export default UseContextHook