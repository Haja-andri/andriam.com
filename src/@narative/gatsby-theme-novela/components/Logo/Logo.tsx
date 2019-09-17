import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";
import customeLogo from './haja-logo.svg'

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  const _fill = fill === '#000' ? null : fill
  return (
    <LogoContainer>
      <img src={customeLogo} style={{height:40, width:40, padding:0, backgroundColor: _fill}} />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
