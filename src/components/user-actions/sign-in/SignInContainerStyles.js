import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignInContainerStyles = styled.div`
  background-color: #282828;
  border: solid 1px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto Mono' monospace;
`;
const InputWrapContainer = styled.div`
  display: flex;
  width: 70%;
  height: 12%;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 9%;
  margin-top: 20px;
  width: 70%;
`;

const SignInButtonStyles = styled.button`
  border: none;
  padding: 10px 0px;
  background: none;
  font-size: 18px;
  background-color: #03a9f4;
  height: 100%;
  width: 100%;
  border-radius: 10px;

  :hover {
    -webkit-box-shadow: 3px 5px 24px #01579b; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px #01579b; /* Firefox 3.5 - 3.6 */
    box-shadow: 5px 5px 10px #01579b;
  }
`;

const BreakStylesContainer = styled.div`
  flex-basis: 100%;
  height: 0;
  background-color: greenyellow;
`;

const InputStyles = styled.input`
  height: 15%;
  width: 100%;
  font-size: 16px;
  padding: 20px;
  border: none;
  outline: none;
  border: 1px solid #404040;
  border-radius: 5px;
  color: black;
`;

const SignInTitleStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  margin-bottom: 20px;
`;

const FormContainerStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #404040;
  align-items: center;
  width: 26%;
  height: 65%;
  flex-wrap: wrap;
  font-family: Roboto Mono;
  color: white;
  border-radius: 5px;
  border: solid 0.5px white;
  box-shadow: 1px 1px #b3b3b3;
`;

const ErrorMessageStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 15%;
  font-size: 16px;
  color: #ffcccb;
  margin: 0px;
  font-size: 16px;
`;

const UserActionCard = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 50%;
  height: 50%;
  border: solid 1px white;
  text-align: center;
  text-decoration: none;

  &:active,
  &:hover {
    color: black;
    background-color: #03a9f4;
  }
`;

export {
  SignInContainerStyles,
  InputWrapContainer,
  SignInButtonContainer,
  BreakStylesContainer,
  SignInButtonStyles,
  InputStyles,
  FormContainerStyles,
  ErrorMessageStyles,
  SignInTitleStyles,
  UserActionCard,
};
