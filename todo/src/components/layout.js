import { Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';
import Menu from './menu';
import query from './query/layoutQuery';
import './layout.css';
import Container from './container';

export default function Layout({ crumbs, customCrumbLabel, children }) {
	const data = query();
	const outsideHome = () => crumbs.length > 1;
	const breadcrumbEl = () => (<div className="flex justify-start text-base flex-row flex-no-wrap">
		Location:<Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel={customCrumbLabel} className="flex text-base flex-row flex-no-wrap" />
	</div>);
	const test = () => true;
	return (
		<div className="text-2xl flex flex-col flex-1 min-h-screen justify-center bg-gray-400">
			<header className="bg-gray-300 p-4 flex flex-col max-w-md">
				<div className="flex flex-row justify-between">
					<Link to="/">
						<h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
					</Link>
					<Menu />
				</div>
				{outsideHome() && breadcrumbEl()}
			</header>
			<section className="flex-1 p-4">{children}</section>
			<footer className="bg-gray-300 p-4 text-base">
				Impressum | Copyright 2020
				{/* <symbol id="icon-facebook" viewBox="0 0 32 32">
					<path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z" />
				</symbol> */}
			</footer>
		</div>
	);
}
