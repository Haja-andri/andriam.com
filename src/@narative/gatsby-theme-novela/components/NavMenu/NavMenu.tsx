import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const NavMenu = ({ fill = "#fff" }: { fill?: string }) => {
  const _fill = fill === '#000' ? null : fill
  return (
    <NavMenuContainer>
      <a style={{height:40, width:40, padding:1, color: _fill}}>A link nav</a>
    </NavMenuContainer>
  );
};

export default NavMenu;

const NavMenuContainer = styled.div`
  border: 1px solid red;
  ${mediaqueries.tablet`
    border: 1px solid blue;
  `}
`;
