// src/pages/404.tsx
// The default 404 page of the website.

import * as React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => {
	return (
		<div>
			<h1>404</h1>
			<p>
				We couldn't find the page you are looking for.{' '}
				<Link to="/overview">Click here</Link> to go back home.
			</p>
		</div>
	)
}

export default NotFoundPage
