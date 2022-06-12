import styled from 'styled-components';

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
  /* flex-direction: column; */
  width: 20%;
  height: 10%;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 5px;
`;

const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #282828; */
  background-color: indigo;
  height: 7%;
  margin-top: 20px;
  width: 20%;
`;

const SignInButtonStyles = styled.button`
  border: none;
  padding: 10px 0px;
  background: none;
  font-size: 16px;
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
  width: 90%;
  font-size: 16px;
  background: transparent;
  padding: 20px;
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  color: white;
`;

const SignInTitleStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  font-size: 24px;
  padding-top: 10px;
`;

const FormContainerStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  flex-wrap: wrap;
  font-family: Roboto Mono;
  color: white;
  background-color: indigo;
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
};
