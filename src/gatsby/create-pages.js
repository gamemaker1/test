// gatsby/create-pages.js
// Creates an entry for a page in the GraphQL database.

const { resolve } = require('path')

const { replacePath } = require('./util')

const createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const Template = resolve(`src/templates/index.tsx`)

	return graphql(`
		{
			allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
		}
	`).then((result) => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}
		result.data.allMdx.edges.forEach(({ node }) => {
			createPage({
				path: replacePath(node.fields.slug),
				component: Template,
				context: { id: node.id },
			})
		})
	})
}

module.exports = { createPages }
