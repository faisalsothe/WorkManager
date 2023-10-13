'use client'
import { currentUser } from '@/services/userService';
import React, { useEffect, useState } from 'react'
import UserContext from './userContext';

const UserProvider = ({children}) => {

    const [user, setUser] = useState(undefined);

    useEffect(()=>{
        async function load(){
            try{
                const logUser=await currentUser();
                setUser({...logUser});
            }catch(error){
                console.log(error);
            }
        }
    load();
    },[]);

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider