import React, { useContext } from 'react';
import { UserContext } from './App';

export const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component3</h1>
      <p>{user.userProfile.name}</p>
      <p>{user.userProfile.location}</p>
    </>
  );
};
