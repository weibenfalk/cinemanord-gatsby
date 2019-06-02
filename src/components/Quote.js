import React from 'react';
import useHomeContent from '../hooks/useHomeContent';
import { QuoteWrapper } from './styles/StyledQuote';

import quoteImg from '../images/quote_sign.png';

const Quote = () => {
  const {
    acf: { cinema_citat: quote },
  } = useHomeContent();

  return <QuoteWrapper img={quoteImg}>{quote}</QuoteWrapper>;
};

export default Quote;
