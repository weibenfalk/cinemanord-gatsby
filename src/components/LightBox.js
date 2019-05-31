/* eslint-disable react/no-danger */
import React from 'react';
import ReactPlayer from 'react-player';

import { StyledLightBox } from './styles/StyledLightBox';

const LightBox = ({ show, link, title, content, callback }) => (
  <StyledLightBox show={show} onClick={callback}>
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
