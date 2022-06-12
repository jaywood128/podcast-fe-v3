/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import authServices from '../../../services/auth.services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  ErrorMessageStyles,
  FormContainerStyles,
  InputWrapContainer,
  SignInButtonContainer,
  SignInButtonStyles,
  InputStyles,
  SignInTitleStyles,
  SignInContainerStyles,
} from './SignInContainerStyles';
import {
  UserActionsContainer,
  UserActionLink,
} from '../links/UserActionsLinkStyles';

const SignIn = ({ input, setInput, setJwtToken }) => {
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

  const submitSignIn = (e) => {
    e.preventDefault();

    if (localStorage.getItem('token') !== null) {
      console.log('Removing previous token');
      localStorage.removeItem('token');
    }

    if (localStorage.getItem('user') !== null) {
      console.log('Removing previous user');
      localStorage.removeItem('user');
      console.log(`After removing user: " + ${localStorage.getItem('user')}`);
    }

    console.log(input);
    /* 
    Username and passwoird validation should be replaced with react form validation
     */
    if (input.username !== null && input.username) {
      authServices.login(input.username, input.password).then(
        (response) => {
          console.log(response.status);
          if (response.status === 200 && response.data.token) {
            console.log('inside');
            setJwtToken(response.data.token);
            localStorage.setItem('token', response.data.token);
          }
        },
        (err) => {
          const resMessage =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.response.data.message;
          console.log(resMessage);
          setMessage({ message: resMessage });
          console.log(message);
        }
      );
    }
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
      {displayErrorMessage()}
      <SignInTitleStyles>
        <h2 style={{ width: '100%', textAlign: 'center' }}>Sign in</h2>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </SignInTitleStyles>
      <FormContainerStyles onSubmit={(e) => submitSignIn(e)}>
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
          <label>Username</label>
        </InputWrapContainer>
        <InputWrapContainer>
          <InputStyles
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handleInputChange(e)}
            value={input.password}
            size="40"
            required
          />
          <label>Password</label>
        </InputWrapContainer>
        <SignInButtonContainer>
          <SignInButtonStyles type="submit">Sign in</SignInButtonStyles>
        </SignInButtonContainer>
        <UserActionsContainer>
          Not a member?
          {/* <UserActionLink to="/sign-up"> */}
          <Link to="sign-up">Sign up</Link>
          <i className="fas fa-user-plus" />
          {/* </UserActionLink> */}
        </UserActionsContainer>
      </FormContainerStyles>
    </SignInContainerStyles>
  );
};

export default SignIn;
