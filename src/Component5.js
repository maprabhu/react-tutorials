import React, { useContext } from 'react';
import { UserContext } from './App';

export const Component5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component5</h1>
      <input
        type="text"
        onChange={(e) =>
          user.setUserProfile({ ...user.userProfile, name: e.target.value })
        }
      />
    </>
  );
};
