import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import SignIn from './components/user-actions/sign-in/SignIn';
import SignUp from './components/user-actions/sign-up/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    /* box-sizing: border-box; */
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  // const tokenCheck = localStorage.getItem('token');
  const [jwtToken, setJwtToken] = useState('');
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const [isSignInButtonActive, setIsSignInButtonActive] = useState(false);
  const [isSignUpButtonActive, setIsSignUpButtonActive] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('token') !== null
    ) {
      setJwtToken(localStorage.getItem('token'));
    }
  }, [jwtToken]);

  return (
    <>
      {jwtToken !== '' ? (
        <Layout input={input} setInput={setInput} setJwtToken={setJwtToken} />
      ) : (
        <>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route
                path="/sign-up"
                element={
                  <SignUp
                    isSignUpButtonActive={isSignUpButtonActive}
                    setIsSignUpButtonActive={setIsSignUpButtonActive}
                    isSignInButtonActive={isSignInButtonActive}
                    setIsSignInButtonActive={setIsSignInButtonActive}
                  />
                }
              />
              <Route
                path="/sign-in"
                element={
                  <SignIn
                    input={input}
                    setInput={setInput}
                    setJwtToken={setJwtToken}
                    isSignInButtonActive={isSignInButtonActive}
                    setIsSignInButtonActive={setIsSignInButtonActive}
                    isSignUpButtonActive={isSignUpButtonActive}
                    setIsSignUpButtonActive={setIsSignUpButtonActive}
                  />
                }
              />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
};

export default App;
