// gatsby/on-create-node.js
// Function that runs when a node is created.

const { createFilePath } = require(`gatsby-source-filesystem`)

const { replacePath } = require('./util')

const onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: replacePath(slug),
		})
	} else if (node.internal.type === 'Mdx') {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: 'slug',
			node,
			value: replacePath(value),
		})
	}
}

module.exports = {
	onCreateNode,
}
