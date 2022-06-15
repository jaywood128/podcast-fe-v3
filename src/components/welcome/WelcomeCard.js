import React from 'react';
import {
  WelcomeCardStyles,
  WelcomeSignUpSignInContainer,
} from './WelcomeCardStyles';
import { IconContainer } from '../side-bar/SidebarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { UserActionCard } from '../user-actions/sign-in/SignInContainerStyles';

const WelcomeCard = ({
  isSignInButtonActive,
  setIsSignInButtonActive,
  isSignUpButtonActive,
  setIsSignUpButtonActive,
}) => {
  const onSignInButtonClick = () => {
    // console.log(isSignInButtonActive);
    if (!isSignInButtonActive) {
      setIsSignInButtonActive((isSignInButtonActive) => !isSignInButtonActive);
    }
  };

  const onSignUpButtonClick = () => {
    console.log(isSignUpButtonActive);
    if (!isSignInButtonActive) {
      setIsSignUpButtonActive((isSignUpButtonActive) => !isSignUpButtonActive);
    }
  };
  return (
    <WelcomeCardStyles>
      <WelcomeSignUpSignInContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faPodcast} size="6x" />
          <h2
            style={{
              width: '100%',
              textAlign: 'center',
              marginBottom: '10px',
              color: 'white',
              fontSize: '2rem',
              fontWeight: '900',
            }}
          >
            Welcome to Podcaster Blaster
          </h2>
        </IconContainer>

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
              backgroundColor: isSignInButtonActive ? ' #03a9f4' : '',
              color: isSignInButtonActive ? 'black' : '',
              border: isSignInButtonActive ? 'none' : 'solid 1.5px #03a9f4',
            }}
          >
            Sign-in
          </UserActionCard>

          <UserActionCard
            onClick={onSignUpButtonClick}
            style={{
              backgroundColor: isSignUpButtonActive ? ' #03a9f4' : '',
              color: isSignUpButtonActive ? 'black' : '',
            }}
          >
            Sign-up
          </UserActionCard>
        </div>
      </WelcomeSignUpSignInContainer>
    </WelcomeCardStyles>
  );
};

export default WelcomeCard;
