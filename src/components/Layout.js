import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './side-bar/Sidebar';
import SignIn from './user-actions/sign-in/SignIn';
import HomePage from './home-page/HomePage';

const Layout = ({ input, setInput, jwtToken }) => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-out" element={<SignIn />} />
      </Routes>
      <Sidebar input={input} setInput={setInput} jwtToken={jwtToken} />
    </BrowserRouter>
  </div>
);

export default Layout;
