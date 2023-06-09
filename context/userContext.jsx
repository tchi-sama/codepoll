import { createContext, useState } from "react"
import { useEffect } from 'react';
import { onSnapshot, query, where } from 'firebase/firestore';
import { UserColRef } from "../firebase";

export const UserContext = createContext(null)

export const UserProvider= ({children})=>{
    const [user,setUser]=useState({});
    const [updateUser,setUpdateUser]=useState(0);
    const [auth,setAuth]=useState(null);
    
    const value ={
        user,
        setUser,
        updateUser,
        setUpdateUser,
        auth,
        setAuth
    }
    
  useEffect(()=>{
    setUser({})
    if (auth?.uid) {
      const q = query (UserColRef,where("userId","==",(auth?.uid).toString()))
      onSnapshot(q,(snapshot)=>{
          setUser({...snapshot.docs[0].data(),id:snapshot.docs[0].id})
      })
    }
  },[auth])

    return (
        <UserContext.Provider value={{...value}}>
            {children}
        </UserContext.Provider>
    )
}
