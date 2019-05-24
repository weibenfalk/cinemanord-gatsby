/* eslint-disable react/no-danger */
import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { StyledLightBox } from './styles/StyledLightBox';

const LightBox = ({ show, link, title, content, callback }) => (
  <StyledLightBox show={show} onClick={callback}>
    {/* <button type="button" onClick={callback}>
      Close
    </button> */}

    <div className="player-wrapper">
      <ReactPlayer url={link} width="100%" height="100%" controls={false} />
    </div>
    <div className="text-wrapper">
      <h1 className="header">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </StyledLightBox>
);

export default LightBox;
