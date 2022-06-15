import React, { useEffect, useState } from 'react';
import authService from '../../../services/auth.services';
import {
  InputWrapContainer,
  SignInButtonContainer,
  SignInButtonStyles,
  InputStyles,
  FormContainerStyles,
  UserActionCard,
} from '../sign-in/SignInContainerStyles';
import SignUpContainerStyles from './SignUpStyles';

const SignUpPage = ({
  isSignInButtonActive,
  setIsSignInButtonActive,
  isSignUpButtonActive,
  setIsSignUpButtonActive,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState('');
  const [signInInput, setSignInInput] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [passwordInputError, setPasswordInputError] = useState('');
  const [message, setMessage] = useState();
  // const [result, setResult] = useState({});

  async function postFormFetch() {
    // eslint-disable-next-line no-console
    console.log(signInInput);
    // const settings = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(signInInput),
    // };
    // // eslint-disable-next-line no-console
    // console.log(JSON.stringify(signInInput));
    // try {
    //   setLoading("true");
    //   const response = await fetch(
    //     `http://127.0.0.1:8080/api/auth/sign-up`,
    //     settings
    //   );
    //   const json = await response.json();
    //   if (response.status !== 200) throw Error(json.message);
    //   return json;
    // } catch (error) {
    //   // eslint-disable-next-line no-alert
    //   alert(error);
    //   setLoading("null");
    //   return error;
    // }
    authService
      .register(
        signInInput.name,
        signInInput.username,
        signInInput.email,
        signInInput.password
      )
      .then(
        () => {
          // eslint-disable-next-line no-console
          console.log(`Submitted username ${signInInput.username}`);
          // history.push('/');
          // window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          // eslint-disable-next-line no-console
          console.log(message);
        }
      );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(signInInput);
    if (signInInput.password.length < 6 || signInInput.password.length > 40) {
      setPasswordInputError('Password must be between 6 and 40 characters');
      return;
    }
    postFormFetch();
  };

  const handleInputChange = (e) => {
    e.persist();
    setSignInInput((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };
  const onSignInButtonClick = () => {
    // setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
    // setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);

    if (!isSignInButtonActive && isSignUpButtonActive) {
      console.log(isSignUpButtonActive);
      setIsSignInButtonActive((isSignUnButtonActive) => !isSignUnButtonActive);
      setIsSignUpButtonActive((isSignInButtonActive) => !isSignInButtonActive);
    }
  };

  const onSignUpButtonClick = () => {
    // setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);
    // setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
  };

  useEffect(() => {}, [passwordInputError]);

  return (
    <SignUpContainerStyles>
      <FormContainerStyles onSubmit={(e) => handleSubmit(e)}>
        <h2>Sign-up</h2>
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
            // onClick={onSignUpButtonClick}
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
            name="name"
            placeholder="Your Name"
            onChange={(e) => handleInputChange(e)}
            value={signInInput.name}
            required
            size="40"
          />
        </InputWrapContainer>
        <InputWrapContainer>
          <InputStyles
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => handleInputChange(e)}
            value={signInInput.username}
            required
            size="40"
          />
        </InputWrapContainer>

        <InputWrapContainer>
          <InputStyles
            type="email"
            name="email"
            onChange={(e) => handleInputChange(e)}
            value={signInInput.email}
            required
            placeholder="Email"
            size="40"
          />
        </InputWrapContainer>
        <InputWrapContainer>
          <InputStyles
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
            value={signInInput.value}
            size="40"
          />
        </InputWrapContainer>
        <SignInButtonContainer>
          <SignInButtonStyles type="submit" />
        </SignInButtonContainer>
      </FormContainerStyles>
    </SignUpContainerStyles>
  );
};

export default SignUpPage;
