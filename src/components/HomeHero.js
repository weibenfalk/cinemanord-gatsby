import React from 'react';
import useHomeContent from '../hooks/useHomeContent';

import { StyledBackgroundImage } from './styles/StyledHomeHero';

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
