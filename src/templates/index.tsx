// src/templates/index.tsx
// The template to render a page.

import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { RootLayout as Layout } from '../components/layout'

function PageTemplate({ data: { mdx } }: any) {
	return (
		<Layout>
			<MDXRenderer>{mdx.body}</MDXRenderer>
		</Layout>
	)
}
export const pageQuery = graphql`
	query PageQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
		}
	}
`

export default PageTemplate
