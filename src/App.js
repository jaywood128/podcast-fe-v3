import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import SignIn from './components/user-actions/sign-in/SignIn';
import SignUp from './components/user-actions/sign-up/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import SignInSignUpContainer from './components/authenticaton/SignInSignUpContainer';

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
  const [signInInput, setSignInInput] = useState({
    username: '',
    password: '',
  });
  const [signUpInput, setSignUpInput] = useState({
    name: '',
    username: '',
    email: '',
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
        <Layout
          signInInput={signInInput}
          setSignInInput={setSignInInput}
          setJwtToken={setJwtToken}
        />
      ) : (
        <>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <SignInSignUpContainer
                    signInInput={signInInput}
                    setSignInInput={setSignInInput}
                    setJwtToken={setJwtToken}
                    isSignInButtonActive={isSignInButtonActive}
                    setIsSignInButtonActive={setIsSignInButtonActive}
                    isSignUpButtonActive={isSignUpButtonActive}
                    setIsSignUpButtonActive={setIsSignUpButtonActive}
                    signUpInput={signUpInput}
                    setSignUpInput={setSignUpInput}
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
