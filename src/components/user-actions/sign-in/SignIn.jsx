/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
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
  UserActionCard,
} from './SignInContainerStyles';
import {
  UserActionsContainer,
  UserActionLink,
} from '../links/UserActionsLinkStyles';
// import { SignUpButton } from './SignInContainerStyles';

const SignIn = ({
  input,
  setInput,
  setJwtToken,
  isSignInButtonActive,
  setIsSignInButtonActive,
  isSignUpButtonActive,
  setIsSignUpButtonActive,
}) => {
  const [message, setMessage] = useState({ message: '' });

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
  const onSignInButtonClick = () => {
    setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
    // setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);
  };

  const onSignUpButtonClick = () => {
    setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);
    setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
  };

  useEffect(() => {}, [message.message]);

  return (
    <SignInContainerStyles>
      {displayErrorMessage()}

      <FormContainerStyles onSubmit={(e) => submitSignIn(e)}>
        <SignInTitleStyles>
          <h2
            style={{
              width: '100%',
              textAlign: 'center',
              font: 'black',
              marginBottom: '10px',
            }}
          >
            Sign-in
          </h2>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </SignInTitleStyles>
        <div
          style={{
            display: 'flex',
            height: '15%',
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
          }}
        >
          <UserActionCard
            onClick={onSignInButtonClick}
            style={{
              backgroundColor: isSignInButtonActive ? ' #03a9f4' : '',
              color: isSignInButtonActive ? 'white' : '',
            }}
            to="/sign-in"
          >
            Sign-in
          </UserActionCard>

          <UserActionCard
            onClick={onSignUpButtonClick}
            style={{
              backgroundColor: isSignUpButtonActive ? ' #03a9f4' : '',
              color: isSignUpButtonActive ? 'white' : '',
            }}
            to="/sign-up"
          >
            Sign-up
          </UserActionCard>
        </div>

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
            required
          />
        </InputWrapContainer>
        <SignInButtonContainer>
          <SignInButtonStyles type="submit">Sign in</SignInButtonStyles>
        </SignInButtonContainer>
        <UserActionsContainer>
          Not a member?
          <UserActionLink to="/sign-up">
            Sign up <i className="fas fa-user-plus" />
          </UserActionLink>
        </UserActionsContainer>
      </FormContainerStyles>
    </SignInContainerStyles>
  );
};

export default SignIn;
