import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { Component1 } from './Component1';
import { Component2 } from './Component2';
const initialValue = {
  name: 'Batman',
  location: 'Gowtham City',
};
export const UserContext = React.createContext();

export default function App() {
  const [userProfile, setUserProfile] = useState(initialValue);
  return (
    <UserContext.Provider value={{ userProfile, setUserProfile }}>
      <Component1 />
      <Component2 />
    </UserContext.Provider>
  );
}
