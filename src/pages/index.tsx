// src/pages/index.tsx
// The front page of the website.

import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const HomePage = () => {
	return (
		<div align="center" style={{ padding: 80 }}>
			<p
				style={{
					color: 'cornflowerblue',
					fontSize: 50,
					fontWeight: 'bold',
				}}
			>
				Learn, Develop and Build with Beckn
			</p>
			<h2>Create open and decentralized digital ecosystems with Beckn</h2>
			<br />
			<Button.Group size="large">
				<Button
					size="large"
					icon={<GithubOutlined />}
					href="https://github.com/beckn/protocol-specification"
					target="_blank"
				>
					Github
				</Button>
				<Button type="primary" size="large">
					<Link to="/overview">Get Started</Link>
				</Button>
			</Button.Group>
		</div>
	)
}

export default HomePage
