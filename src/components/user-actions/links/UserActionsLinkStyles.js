import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* 
Previous name UserIconLinkContainer
 */

const UserActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  margin-top: 10px;
`;

/* 
previous name StyledUserLink 
 */

const UserActionLink = styled.button`
  color: white;
  background-color: #181818;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  font-size: 1.2rem;
  font-family: 'Roboto Mono';
  border-radius: 60%;
  border: 1.5px;
  margin: 10px 15px;

  :hover {
    background-color: rgba(64, 64, 64, 0.45);
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 5px 5px 10px grey;
  }
`;

export { UserActionsContainer, UserActionLink };
