// gatsby-config.js
// Configuration for Gatsby and the various plugins used.

const config = {
	siteMetadata: {
		title: 'Beckn Developer Documentation',
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-json`,
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'beckn-developer-documentation',
				short_name: 'beckn-docs',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/assets/icon.png',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-images`],
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					default: require.resolve('./src/components/layout.tsx'),
				},
				extensions: ['.mdx', '.md'],
				plugins: [`gatsby-remark-autolink-headers`],
				gatsbyRemarkPlugins: [
					`gatsby-remark-katex`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1035,
						},
					},
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							showLineNumbers: true,
							noInlineHighlight: false,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`,
			},
		},
		`gatsby-plugin-remove-trailing-slashes`,
	],
	pathPrefix: '/test', // TODO: Remove this when merging to official repo
}

module.exports = config
