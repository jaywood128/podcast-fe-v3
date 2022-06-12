import React, { useState } from 'react';
import Layout from './components/Layout';
import SignIn from './components/user-actions/sign-in/SignIn';
import SignUp from './components/user-actions/sign-up/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [jwtToken, setJwtToken] = useState('');
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  return (
    <>
      {jwtToken !== '' ? (
        <Layout />
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
