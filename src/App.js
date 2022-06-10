import React, { useState } from 'react';
import Layout from './components/Layout';
import SignInPage from './components/user-actions/sign-in/SignInPage';

const App = () => {
  const [jwtToken, setJwtToken] = useState('');
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  return (
    <div>
      {jwtToken !== '' ? (
        <Layout />
      ) : (
        <SignInPage
          input={input}
          setInput={setInput}
          setJwtToken={setJwtToken}
        />
      )}
    </div>
  );
};

export default App;
