/* eslint-disable react/no-danger */
import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const StyledLightBox = styled.div`
  background: rgb(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200000;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text-wrapper {
    width: 50vw;
    background: #000;
    padding: 40px;
  }

  .player-wrapper {
    position: relative;
    width: 50vw;
    height: calc(50vw / 16 * 9);
    margin: 0 0 40px 0;

    :after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(235deg, #3023ae, #c86dd7);
      z-index: -2;
      filter: blur(20px);
      opacity: 0.3;
    }
  }

  .header {
    color: linear-gradient(45deg, #3023ae, #c86dd7);
    background: linear-gradient(#3023ae, #c86dd7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Quicksand', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }
`;

const LightBox = ({ show, link, title, content, callback }) => (
  <StyledLightBox show={show} onClick={callback}>
    {/* <button type="button" onClick={callback}>
      Close
    </button> */}

    <div className="player-wrapper">
      <ReactPlayer url={link} width="100%" height="100%" controls="false" />
    </div>
    <div className="text-wrapper">
      <h1 className="header">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </StyledLightBox>
);

export default LightBox;
