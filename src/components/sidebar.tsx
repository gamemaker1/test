// src/components/sidebar.tsx
// The sidebar component that allows a reader to pick a certain page.

import 'antd/lib/menu/style/css'

import * as React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Affix, Menu } from 'antd'

import { pathPrefix } from '../../gatsby-config'

interface LinkItem {
	id: string
	name: string
	link: string
}
interface ParentItem {
	id: string
	name: string
	items: MenuItem[]
}

function isLinkItem(item: MenuItem): item is LinkItem {
	const result = Boolean((item as LinkItem).link)
	return result
}

function render(item: MenuItem, id: string) {
	if (isLinkItem(item)) {
		return (
			<Menu.Item key={item.link}>
				<Link to={item.link}>
					<div>{item.name}</div>
				</Link>
			</Menu.Item>
		)
	} else {
		return (
			<Menu.SubMenu
				key={id}
				title={<span style={{ fontWeight: 900 }}>{item.name}</span>}
			>
				{item.items && item.items.map((v, i) => render(v, id + '.' + i))}
			</Menu.SubMenu>
		)
	}
}

export function Sidebar() {
	return (
		<StaticQuery
			query={graphql`
				query MyQuery {
					allDirectory {
						edges {
							node {
								id
								base
								relativeDirectory
								relativePath
							}
						}
					}
				}
			`}
			render={(data) => {
				const currentPath =
					typeof window !== 'undefined'
						? window.location.pathname.replace(pathPrefix, '')
						: '/'
				const currentSection = currentPath.split('/')[1]

				const pages = data.allDirectory.edges.filter(
					({ node }) => node.relativeDirectory === currentSection
				)
				const menuItems = pages.map(({ node }) => {
					const subItems = data.allDirectory.edges.filter(
						({ node: child }) => child.relativeDirectory === node.relativePath
					)

					if (subItems.length !== 0) {
						return {
							id: node.id,
							name: node.base,
							items: subItems.map(({ node: child }) => {
								return {
									id: child.id,
									name: child.base,
									link: `/${child.relativePath}`,
								}
							}),
						}
					}

					return {
						id: node.id,
						name: node.base,
						link: `/${node.relativePath}`,
					}
				})
				if (menuItems.length === 0) {
					menuItems.push({
						id: currentSection,
						name: currentSection,
						link: currentPath,
					})
				}

				const defaultOpenKeys = menuItems.map((item) => item.id)

				return (
					<Affix>
						<Menu
							mode="inline"
							style={{ minWidth: 250, height: '100%', borderRight: 0 }}
							defaultOpenKeys={defaultOpenKeys}
							selectedKeys={[currentPath]}
						>
							{menuItems.map((v) => render(v, v.id))}
						</Menu>
					</Affix>
				)
			}}
		/>
	)
}
