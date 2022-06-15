import styled from 'styled-components';

const WelcomeCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto Mono' monospace;
`;

const WelcomeSignUpSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #404040;
  align-items: center;
  width: 26%;
  height: 65%;
  flex-wrap: wrap;
  font-family: Roboto Mono;
  color: white;
  border-radius: 5px;
  border: solid 0.5px white;
  /* box-shadow: 1px 1px #b3b3b3; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 1.5px 1.5px rgba(255, 255, 255, 0.9);
    transition: 0.3s;
  }
`;
export { WelcomeCardStyles, WelcomeSignUpSignInContainer };
