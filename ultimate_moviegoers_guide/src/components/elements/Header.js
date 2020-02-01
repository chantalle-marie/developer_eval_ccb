import React from 'react';
import styled from 'styled-components';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

// 1. Learn how to create a styled basic components
// 2. Learn how to handle props in styled components
// 3. Create a global style with styled components

// These style components are imbedded here. 
// They can be moved into their own seperate file and imported above.
// Look up tagged function
const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px){
      min-height: 0px;
    }
  }
`;

const StyledRMDBLogo = styled.img`
  width: 250px;
  margin-top: 20px;

  @media screen and (max-width: 500px){
    width: 150px;
    margin-top: 5px;
  }
`;

const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px){
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </StyledHeader>
)

export default Header;
