// gatsby/util.js
// Utility functions for content processing work.

// Remove the trailing slash in the path
const replacePath = (path) => (path === `/` ? path : path.replace(/\/$/, ``))

module.exports = { replacePath }
