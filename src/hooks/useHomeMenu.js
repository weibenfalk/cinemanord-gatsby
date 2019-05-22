import { useStaticQuery, graphql } from 'gatsby';

const useHomeMenu = () => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
      ) {
        totalCount
        edges {
          node {
            items {
              wordpress_id
              title
              url
            }
          }
        }
      }
    }
  `);

  return menu;
};

export default useHomeMenu;
