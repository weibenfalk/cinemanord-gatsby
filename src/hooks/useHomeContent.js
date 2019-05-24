import { useStaticQuery, graphql } from 'gatsby';

const useHomeContent = () => {
  const { home } = useStaticQuery(
    graphql`
      query {
        home: wordpressPage(wordpress_id: { eq: 7 }) {
          title
          content
          acf {
            cinema_citat
          }
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
    `
  );

  return home;
};

export default useHomeContent;
