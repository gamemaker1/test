// gatsby-node.js
// Functions that process the content during the build process.

module.exports = {
	createPages: require('./src/gatsby/create-pages').createPages,
	onCreateNode: require('./src/gatsby/on-create-node').onCreateNode,
}
