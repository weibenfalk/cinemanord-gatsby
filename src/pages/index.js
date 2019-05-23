import React from 'react';

import SEO from '../components/seo';
import HomeHero from '../components/HomeHero';
import HomeLayout from '../components/HomeLayout';
import HomeMenu from '../components/HomeMenu';
import Quote from '../components/Quote';

import { GlobalStyle } from '../components/styles/StyledLayout';

const IndexPage = () => (
  <>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" />
      <input type="submit" />
    </form>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHero />
    <HomeLayout>
      <HomeMenu />
      <Quote />
    </HomeLayout>
    <GlobalStyle />
  </>
);

export default IndexPage;
