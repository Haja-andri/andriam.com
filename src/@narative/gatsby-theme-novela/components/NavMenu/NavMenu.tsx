import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const NavMenu = ({ fill = "#fff" }: { fill?: string }) => {
  const _fill = fill === '#000' ? null : fill
  // const isDark = props;
  return (
    <NavMenuContainer fill={_fill}>
      <a className="nav-item">HOME</a>
      <a className="nav-item">ABOUT</a>
      <a className="nav-item">PORTFOLIO</a>
    </NavMenuContainer>
  );
};

export default NavMenu;

const NavMenuContainer = styled.div<{ fill: string }>`
  font-size: 1.6rem;
  .nav-item{
    margin-left:20px;
    height: 40px; 
    width: 40px; 
    color: ${p => (p.fill ? "#fff" : "#000")};  
      ${mediaqueries.tablet`
      margin-left:8px;
      font-size: 1.4rem;
    `}
    &:hover {
      font-weight: bold;
    }
  }
`;

const NavItem = styled.a<{ fill: string }>`
  height: 40px; 
  width: 40px; 
  padding: 1px; 
  color: ${p => (p.fill ? "#fff" : "#000")};
`;
