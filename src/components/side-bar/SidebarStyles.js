import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBarContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #121212;
  color: #b3b3b3;
  height: 100%;
  width: 12%;
  font-family: 'Roboto Mono';
  font-size: 1.2rem;
  overflow: auto;
`;

const LinkTitle = styled.h2`
  text-align: center;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 35px;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  color: #b3b3b3;
  text-decoration: none;
  :hover {
    color: white;
    text-shadow: 2px 2px 20px white;
  }
`;

const LinkItem = styled.span`
  display: flex;
  width: 75%;
  justify-content: center;
  margin: 10px 0px;
`;

const LinkList = styled.div`
  display: flex;
  background-color: red;
  width: 100%;
  flex-direction: column;
  align-items: center;
  /* padding: 10px; */
`;

const LinkIcon = styled.i`
  padding: 10px;
`;
const TitleLink = styled(Link)`
  color: white;
  font-size: 3rem;
  padding: 0 20px;
  text-decoration: none;
  text-shadow: 2px 2px 10px white;
  font-family: 'Poppins';
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  SideBarContainerStyles,
  LinkTitle,
  LinkContainer,
  LinkItem,
  LinkList,
  LinkIcon,
  StyledLink,
  TitleLink,
  IconContainer,
};
