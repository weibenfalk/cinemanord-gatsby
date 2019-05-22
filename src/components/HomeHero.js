import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import useHomeContent from '../hooks/useHomeContent';

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100vh;
  z-index: 1;
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  background-color: #000;
`;

const HomeHero = () => {
  const { featured_media: media } = useHomeContent();
  return (
    <StyledBackgroundImage
      Tag="section"
      fluid={media.localFile.childImageSharp.fluid}
      backgroundColor="#000"
    />
  );
};

export default HomeHero;
