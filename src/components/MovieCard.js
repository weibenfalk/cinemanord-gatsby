import React, { useState } from 'react';
import LightBox from './LightBox';

import {
  StyledImg,
  MovieImage,
  MovieImageTextWrapper,
  MovieImageText,
} from './styles/StyledMovieCard';

const MovieCard = ({ image, link, title, content }) => {
  const [isLightBox, setIsLightBox] = useState(false);

  const handleLightBox = () => setIsLightBox(!isLightBox);

  return (
    <>
      <LightBox
        show={isLightBox}
        callback={handleLightBox}
        link={link}
        title={title}
        content={content}
      />
      <MovieImage onClick={handleLightBox}>
        <StyledImg fluid={image} />
        {/* <Link to={link}> */}
        <MovieImageTextWrapper>
          <div className="pWrapper">
            <MovieImageText>{title}</MovieImageText>
          </div>
        </MovieImageTextWrapper>
        {/* </Link> */}
      </MovieImage>
    </>
  );
};

export default MovieCard;
