import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  SideBarContainerStyles,
  LinkContainer,
  // LinkList,
  LinkItem,
  LinkIcon,
  StyledLink,
  TitleLink,
  IconContainer,
} from './SidebarStyles';
import AuthService from '../../services/auth.services';
import {
  UserActionLink,
  UserActionsContainer,
} from '../user-actions/links/UserActionsLinkStyles';
import { useNavigate } from 'react-router-dom';

const logout = () => {
  AuthService.logout();
};
const Sidebar = ({ signInInput, setSignInInput, jwtToken, setJwtToken }) => {
  let navigate = useNavigate();

  return (
    <SideBarContainerStyles>
      <UserActionsContainer>
        <UserActionLink
          to="/sign-out"
          onClick={() => {
            AuthService.logout();
            setJwtToken('');
          }}
        >
          <FaSignOutAlt />
        </UserActionLink>
      </UserActionsContainer>
      <LinkContainer>
        <TitleLink to="/">
          <IconContainer>
            <i className="fas fa-podcast fa-1x" />
          </IconContainer>{' '}
        </TitleLink>
        {/* <LinkList> */}
        <LinkItem>
          {/* <StyledLink to="/search-results-container">
            <LinkIcon className="fas fa-search" />
            <span>Search</span>
          </StyledLink> */}
        </LinkItem>

        <LinkItem>
          {/* <StyledLink to="/" bsClass="link">
            <LinkIcon className="fas fa-list" />
            <span>Shows</span>
          </StyledLink> */}
        </LinkItem>

        <LinkItem>
          {/* <StyledLink to="/library">
            <LinkIcon className="fas fa-star" />
            <span>Library</span>
          </StyledLink> */}
        </LinkItem>

        <LinkItem>
          {/* <StyledLink to="/all-genres">
            <LinkIcon className="fas fa-star" />
            <span>Explore</span>
          </StyledLink> */}
        </LinkItem>
        {/* </LinkList> */}
      </LinkContainer>
    </SideBarContainerStyles>
  );
};

export default Sidebar;
