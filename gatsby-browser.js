/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// ES6 way
import React from 'react';
import MailWidgetWrapper from './src/components/MailWidgetWrapper';
import ThemeWrapper from './src/components/ThemeWrapper';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

export const wrapPageElement = ({ element, props }) => (
  <MailWidgetWrapper {...props}>{element}</MailWidgetWrapper>
);

export const wrapRootElement = ({ element }) => (
  <ThemeWrapper>{element}</ThemeWrapper>
);
