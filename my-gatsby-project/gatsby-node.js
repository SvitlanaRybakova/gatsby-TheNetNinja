// The main goal is fetch data and then generate pages based on a  template file which we already have


const path = require('path')

// export prop in node env
//  actions = method to generate pages
exports.createPages = async ({ graphql, actions }) => {
  console.log('inside');
  const { data } = await graphql(`
    query Projects {
      projects: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    console.log(node);
    actions.createPage({
      path: '/projects/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug } + "md",
    })
  })
}
