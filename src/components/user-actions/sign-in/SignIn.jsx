/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
  setIsSignInButtonActive,
  isSignUpButtonActive,
  setIsSignUpButtonActive,
}) => {
  const [message, setMessage] = useState({ message: '' });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

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

  const handleOnSubmit = (data) => {
    // e.preventDefault();
    console.log(data);

    if (localStorage.getItem('token') !== null) {
      console.log('Removing previous token');
      localStorage.removeItem('token');
    }

    if (localStorage.getItem('user') !== null) {
      console.log('Removing previous user');
      localStorage.removeItem('user');
      console.log(`After removing user: " + ${localStorage.getItem('user')}`);
    }

    console.log(data);

    // Username and passwoird validation should be replaced with react form validation

    authServices.login(data.username, data.password).then(
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
  };

  /* const handleInputChange = (data) => {
    // e.persist();
    console.log(data.target.name);
    console.log(watch('username'));

    setSignInInput((userInput) => ({
      ...userInput,
      [data.target.name]: watch(`${data.target.name}`),
    }));
  }; */
  const onSignInButtonClick = () => {
    // console.log(isSignInButtonActive);
    // if (!isSignInButtonActive) {
    //   setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
    // }
  };

  const onSignUpButtonClick = () => {
    console.log(isSignUpButtonActive);
    if (!isSignUpButtonActive && isSignInButtonActive) {
      console.log(isSignUpButtonActive);
      // toggleSignUpButton(isSignUpButtonActive);
      // toggleSignInButton(isSignInButtonActive);
      setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
      setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);
    }
  };

  const toggleSignInButton = (isSignInButtonActive) =>
    setIsSignInButtonActive(!isSignInButtonActive);

  const toggleSignUpButton = (isSignUpButtonActive) =>
    setIsSignUpButtonActive(!isSignUpButtonActive);

  useEffect(() => {}, [message.message]);

  console.log(errors);
  const watchUsername = watch('username');
  const watchPassword = watch('password');

  return (
    <SignInContainerStyles>
      {displayErrorMessage()}

      <FormContainerStyles
        onSubmit={handleSubmit((data) => handleOnSubmit(data))}
      >
        <SignInTitleStyles>
          <h2
          // style={{
          //   width: '100%',
          //   textAlign: 'center',
          //   font: 'black',
          //   marginBottom: '10px',
          //   fontSize: '1.2rem',
          // }}
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              height: '30%',
              width: '20%',
              fontFamily: 'Roboto Mono monospace',
            }}
          >
            <label htmlFor="username" style={{ width: '15%' }}>
              username
            </label>
          </div>

          <InputStyles
            {...register('username', {
              required: 'username is required',
              minLength: { value: 3, message: 'The minimum length is 3' },
            })}
            id="username"
            type="text"
            name="username"
            // onChange={(e) => handleInputChange(e)}
            // value={watchUsername}
            required
            size="40"
          />
        </InputWrapContainer>
        <p> {errors.username?.message}</p>
        <InputWrapContainer>
          <label htmlFor="password" style={{ width: '15%' }}>
            password
          </label>
          <InputStyles
            {...register('password', {
              required: 'password is required',
              minLength: { value: 3, message: 'The minimum length is 3' },
            })}
            id="password"
            type="password"
            name="password"
            // onChange={(e) => handleInputChange(e)}
            // value={watchPassword}
            size="40"
            required
          />
        </InputWrapContainer>
        <p> {errors.password?.message}</p>
        <SignInButtonContainer>
          <SignInButtonStyles type="submit" />
        </SignInButtonContainer>
        <UserActionsContainer>
          Not a member?
          {/* <UserActionLink to="/sign-up">
            Sign up <i className="fas fa-user-plus" />
          </UserActionLink> */}
        </UserActionsContainer>
      </FormContainerStyles>
    </SignInContainerStyles>
  );
};

export default SignIn;
