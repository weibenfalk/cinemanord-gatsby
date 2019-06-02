import React, { useState } from 'react';
import LightBox from './LightBox';

import {
  StyledImg,
  MovieImage,
  MovieImageTextWrapper,
  MovieImageText,
} from './styles/StyledMovieCard';

const MovieCard = ({ image, link, title, content }) => {
  const [showLightBox, setshowLightBox] = useState(false);

  const handleLightBox = () => setshowLightBox(!showLightBox);

  return (
    <>
      <LightBox
        show={showLightBox}
        callback={handleLightBox}
        link={link}
        title={title}
        content={content}
      />
      <MovieImage onClick={handleLightBox}>
        <StyledImg fluid={image} />
        <MovieImageTextWrapper>
          <div className="pWrapper">
            <MovieImageText>{title}</MovieImageText>
          </div>
        </MovieImageTextWrapper>
      </MovieImage>
    </>
  );
};

export default MovieCard;
