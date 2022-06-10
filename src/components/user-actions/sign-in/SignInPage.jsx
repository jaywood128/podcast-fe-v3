/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
import {
  UserActionLink,
  UserActionsContainer,
} from '../links/UserActionsLinkStyles';
import {
  ErrorMessageStyles,
  FormContainerStyles,
  InputWrapContainer,
  SignInButtonContainer,
  SignInButtonStyles,
  InputStyles,
  SignInTitleStyles,
  SignInContainerStyles,
} from './SignInPageContainerStyles';

const BASE_API_URL = 'http://localhost:8080/api/auth';

const SignInPage = ({ input, setInput, setJwtToken }) => {
  // const [input, setInput] = useState({
  //   username: '',
  //   password: '',
  // });
  const [message, setMessage] = useState({ message: '' });
  // eslint-disable-next-line no-unused-vars
  // const navigate = useNavigate();

  const displayErrorMessage = () => {
    if (message.message.includes('401')) {
      return (
        <ErrorMessageStyles>
          Username and/or password incorrect
        </ErrorMessageStyles>
      );
    }
    return '';
  };

  // eslint-disable-next-line no-unused-vars
  const submitLogin = async (username, password) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/sign-in`, {
        username,
        password,
      });
      console.log(response.data);
      if (response.status === 200) {
        setJwtToken(response.data.token);
      }

      // if (response.data !== null && response.data.token !== null) {
      //   // localStorage.setItem('user', response.data);
      //   // localStorage.setItem('id', response.data.id);
      //   localStorage.setItem('token', response.data.token);
      //   console.log(
      //     `local storage token set to: ${localStorage.getItem('token')}`
      //   );

      // }
    } catch (err) {
      setMessage(err);
      console.log(err);
    }
  };

  const submitSignIn = (e) => {
    e.preventDefault();

    if (localStorage.getItem('token') !== null) {
      console.log('Removing previous token');
      localStorage.removeItem('token');
    }

    // if (localStorage.getItem('user') !== null) {
    //   console.log('Removing previous user');
    //   localStorage.removeItem('user');
    //   console.log(`After removing user: " + ${localStorage.getItem('user')}`);
    // }
    console.log(input);
    if (input.username !== null && input.username) {
      submitLogin(input.username, input.password);
    }
    // authService.login(input.username, input.password).then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (err) => {
    //     const resMessage =
    //       (err.response && err.response.data && err.response.data.message) ||
    //       err.message ||
    //       err.response.data.message;
    //     console.log(resMessage);
    //     setMessage({ message: resMessage });
    //     console.log(message);
    //   }
    // );
  };

  const handleInputChange = (e) => {
    e.persist();

    setInput((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {}, [message.message]);

  return (
    <SignInContainerStyles>
      <FormContainerStyles onSubmit={(e) => submitSignIn(e)}>
        {displayErrorMessage()}
        <SignInTitleStyles>
          <FontAwesomeIcon icon={faUser} size="lg" />
          <h2 style={{ width: '100%', textAlign: 'center' }}>Login</h2>
        </SignInTitleStyles>
        <InputWrapContainer>
          <InputStyles
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => handleInputChange(e)}
            value={input.username}
            required
            size="40"
          />
        </InputWrapContainer>
        <InputWrapContainer>
          <InputStyles
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handleInputChange(e)}
            value={input.password}
            size="40"
          />
        </InputWrapContainer>
        <SignInButtonContainer>
          <SignInButtonStyles type="submit">Sign in</SignInButtonStyles>
        </SignInButtonContainer>
        {/* <UserActionsContainer>
        <UserActionLink to="/sign-up">
          <i className="fas fa-user-plus" />
        </UserActionLink>
      </UserActionsContainer> */}
      </FormContainerStyles>
    </SignInContainerStyles>
  );
};

export default SignInPage;
