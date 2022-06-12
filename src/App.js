import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import SignIn from './components/user-actions/sign-in/SignIn';
import SignUp from './components/user-actions/sign-up/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  // const tokenCheck = localStorage.getItem('token');
  const [jwtToken, setJwtToken] = useState('');
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

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
          <Router>
            <Routes>
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
            <SignIn
              input={input}
              setInput={setInput}
              setJwtToken={setJwtToken}
            />
          </Router>
        </>
      )}
    </>
  );
};

export default App;
