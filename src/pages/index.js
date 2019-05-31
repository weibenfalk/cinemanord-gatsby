import React from 'react';

import SEO from '../components/seo';
import HomeHero from '../components/HomeHero';
import HomeLayout from '../components/HomeLayout';
import HomeMenu from '../components/HomeMenu';

import { GlobalStyle } from '../components/styles/StyledLayout';

const IndexPage = () => (
  <>
    {/* <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message" />
    </form> */}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHero />
    <HomeLayout>
      <HomeMenu />
    </HomeLayout>
    <GlobalStyle />
  </>
);

export default IndexPage;
