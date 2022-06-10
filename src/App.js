import React, { useState } from 'react';
import Layout from './components/Layout';
import SignInPage from './components/user-actions/sign-in/SignInPage';

const App = () => {
  const [jwtToken, setJwtToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      {' '}
      {jwtToken !== '' ? (
        <Layout />
      ) : (
        <SignInPage
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      )}
    </div>
  );
};

export default App;
