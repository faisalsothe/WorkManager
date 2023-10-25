'use client'
import React, { useEffect, useState } from 'react';
import UserContext from './userContext'; // Use a relative path to import the context
import { currentUser } from '@/services/userService';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const logUser = await currentUser();
        setUser(logUser);
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);

  // Here, you can conditionally render based on the user's authentication status
  // For example, you might want to render different components based on the user state
  if (user) {
    // User is authenticated; render authenticated components
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  } else {
    // User is not authenticated; render components for non-authenticated users
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }
};

export default UserProvider;
