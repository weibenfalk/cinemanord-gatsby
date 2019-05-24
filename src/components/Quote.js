import React from 'react';
import { QuoteWrapper } from './styles/StyledQuote';
import useHomeContent from '../hooks/useHomeContent';

import quoteImg from '../images/quote_sign.png';

const Quote = () => {
  const {
    acf: { cinema_citat: quote },
  } = useHomeContent();

  return <QuoteWrapper img={quoteImg}>{quote}</QuoteWrapper>;
};

export default Quote;
