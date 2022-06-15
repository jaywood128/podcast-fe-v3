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
  signInInput,
  setSignInInput,
  setJwtToken,
  isSignInButtonActive,
  // setIsSignInButtonActive,
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

    console.log(signInInput);
    /* 
    Username and passwoird validation should be replaced with react form validation
     */
    if (signInInput.username !== null && signInInput.username) {
      authServices.login(signInInput.username, signInInput.password).then(
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

    setSignInInput((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };
  const onSignInButtonClick = () => {
    // console.log(isSignInButtonActive);
    // if (!isSignInButtonActive) {
    //   setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
    // }
  };

  const onSignUpButtonClick = () => {
    console.log(isSignUpButtonActive);
    if (!isSignInButtonActive) {
      setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);
    }
  };

  useEffect(() => {
    // setIsSignInButtonActive(true);
    // console.log(testProp);
    // console.log(isSignInButtonActive);
  }, [message.message]);

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
              fontSize: '1.2rem',
            }}
          >
            Sign-in
          </h2>
          <FontAwesomeIcon icon={faUser} size="4x" />
        </SignInTitleStyles>
        <div
          style={{
            display: 'flex',
            height: '15%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
          }}
        >
          <UserActionCard
            onClick={onSignInButtonClick}
            style={{
              backgroundColor: isSignInButtonActive ? ' #052CA3' : '',
              color: isSignInButtonActive ? 'white' : '',
            }}
          >
            Sign-in
          </UserActionCard>

          <UserActionCard
            onClick={onSignUpButtonClick}
            style={{
              backgroundColor: isSignUpButtonActive ? ' #052CA3' : '',
              color: isSignUpButtonActive ? 'white' : '',
            }}
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
            value={signInInput.username}
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
            value={signInInput.password}
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
