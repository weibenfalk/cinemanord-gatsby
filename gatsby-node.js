const path = require('path');
const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Template for the pages
  const pageTemplate = path.resolve('./src/templates/page.js');

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const { allWordpressPage } = result.data;

  allWordpressPage.edges.forEach(edge => {
    if (edge.node.status === 'publish') {
      createPage({
        path: edge.node.link,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
        },
      });
    }
  });
};
