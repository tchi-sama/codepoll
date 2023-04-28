import { createContext, useState } from "react"
import { useEffect } from 'react';
import { onSnapshot, query, where } from 'firebase/firestore';
import { UserColRef } from "../firebase";

export const UserContext = createContext(null)

export const UserProvider= ({children})=>{
    const [user,setUser]=useState({});
    const [updateUser,setUpdateUser]=useState(0);
    const [auth,setAuth]=useState({});
    
    const value ={
        user,
        setUser,
        updateUser,
        setUpdateUser,
        auth,
        setAuth
    }
    
  useEffect(()=>{
    alert(auth?.userId)
    if (auth?.userId) {
      const q = query (UserColRef,where("userId","==",(auth?.userId).toString()))
      onSnapshot(q,(snapshot)=>{
          setUser({...snapshot.docs[0].data(),id:snapshot.docs[0].id})
          alert((snapshot.docs[0].data()).userName)
      })
    }
  },[auth])

    return (
        <UserContext.Provider value={{...value}}>
            {children}
        </UserContext.Provider>
    )
}
