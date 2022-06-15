import SignIn from '../user-actions/sign-in/SignIn';
import SignUpPage from '../user-actions/sign-up/SignUp';
import WelcomeCard from '../welcome/WelcomeCard';

const SignInSignUpContainer = ({
  signInInput,
  setSignInInput,
  setJwtToken,
  isSignInButtonActive,
  setIsSignInButtonActive,
  setIsSignUpButtonActive,
  isSignUpButtonActive,
  signUpInput,
  setSignUpInput,
}) => {
  const renderContent = () => {
    console.log(isSignInButtonActive);
    if (isSignInButtonActive) {
      return (
        <SignIn
          signInInput={signInInput}
          setSignInInput={setSignInInput}
          setJwtToken={setJwtToken}
          isSignInButtonActive={isSignInButtonActive}
          setIsSignInButtonActive={setIsSignInButtonActive}
          isSignUpButtonActive={isSignUpButtonActive}
          setIsSignUpButtonActive={setIsSignUpButtonActive}
        />
      );
    } else if (isSignUpButtonActive) {
      return (
        <SignUpPage
          setJwtToken={setJwtToken}
          setIsSignInButtonActive={isSignInButtonActive}
          isSignUpButtonActive={isSignInButtonActive}
          signUpInput={signUpInput}
          setSignUpInput={setSignUpInput}
        />
      );
    } else {
      return (
        <WelcomeCard
          isSignInButtonActive={isSignInButtonActive}
          setIsSignInButtonActive={setIsSignInButtonActive}
          isSignUpButtonActive={isSignUpButtonActive}
          setIsSignUpButtonActive={setIsSignUpButtonActive}
        />
      );
    }
  };

  return renderContent();
};

export default SignInSignUpContainer;
