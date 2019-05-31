import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import MovieCard from '../components/MovieCard';

const MoviePage = ({ data }) => {
  const {
    allWordpressWpMovies: { edges: movies },
  } = data;

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          {movies.map(movie => (
            <div
              key={movie.node.id}
              className="col-md-4"
              style={{ padding: 0 }}
            >
              <MovieCard
                image={
                  movie.node.featured_media.localFile.childImageSharp.fluid
                }
                link={movie.node.acf.cinema_movielink}
                title={movie.node.title}
                content={movie.node.content}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MoviePage;

export const pageQuery = graphql`
  query Movies {
    allWordpressWpMovies {
      edges {
        node {
          id
          wordpress_id
          slug
          status
          link
          title
          content
          featured_media {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          acf {
            cinema_movielink
          }
        }
      }
    }
  }
`;
