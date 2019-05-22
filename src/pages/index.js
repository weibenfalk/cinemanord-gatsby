import React from 'react';

import SEO from '../components/seo';
import HomeHero from '../components/HomeHero';
import HomeLayout from '../components/HomeLayout';
import HomeMenu from '../components/HomeMenu';
import Quote from '../components/Quote';

import MailWidget from '../components/MailWidget';

import { GlobalStyle } from '../components/styles/StyledLayout';

const IndexPage = () => (
  <>
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
