/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageHero from '../components/PageHero';

const PageContent = styled.article`
  margin: 20px 0 0 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: linear-gradient(45deg, #3023ae, #c86dd7);
    background: linear-gradient(#3023ae, #c86dd7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Quicksand', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    line-height: 1.8rem;
    color: #ddd;
  }
`;

const PageTemplate = ({ data }) => (
  <Layout>
    {data.currentPage.featured_media ? (
      <PageHero
        img={data.currentPage.featured_media.localFile.childImageSharp.fluid}
      />
    ) : null}
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <PageContent className="col">
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
        </PageContent>
      </div>
    </div>
  </Layout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
