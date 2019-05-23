/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// ES6 way
import React from 'react';
import MailWidgetWrapper from './src/components/MailWidgetWrapper';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

// export const wrapPageElement = ({ element, props }) => (
//   // props provide same data to Layout as Page element will get
//   // including location, data, etc - you don't need to pass it
//   <MailWidgetWrapper {...props}>{element}</MailWidgetWrapper>
// );
