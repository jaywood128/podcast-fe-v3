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
  const [input, setInput] = useState({
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
    console.log(input);
    // const settings = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(input),
    // };
    // // eslint-disable-next-line no-console
    // console.log(JSON.stringify(input));
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
      .register(input.name, input.username, input.email, input.password)
      .then(
        () => {
          // eslint-disable-next-line no-console
          console.log(`Submitted username ${input.username}`);
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
    // alert(input);
    if (input.password.length < 6 || input.password.length > 40) {
      setPasswordInputError('Password must be between 6 and 40 characters');
      return;
    }
    postFormFetch();
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
    setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);
  };

  const onSignUpButtonClick = () => {
    setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);
    setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
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
            name="name"
            placeholder="Your Name"
            onChange={(e) => handleInputChange(e)}
            value={input.name}
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
            value={input.username}
            required
            size="40"
          />
        </InputWrapContainer>

        <InputWrapContainer>
          <InputStyles
            type="email"
            name="email"
            onChange={(e) => handleInputChange(e)}
            value={input.email}
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
            value={input.value}
            size="40"
          />
        </InputWrapContainer>
        <SignInButtonContainer>
          <SignInButtonStyles type="submit">Sign-up</SignInButtonStyles>
        </SignInButtonContainer>
      </FormContainerStyles>
    </SignUpContainerStyles>
  );
};

export default SignUpPage;
