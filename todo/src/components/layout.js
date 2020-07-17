import { Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';
import Menu from './menu';
import query from './query/layoutQuery';
import './layout.css';

export default function Layout({ crumbs, customCrumbLabel, children }) {
	const data = query();
	const outsideHome = () => crumbs.length > 1;
	const breadcrumbEl = () => (
		<div className="flex text-base flex-row flex-no-wrap">
			Location:<Breadcrumb
				crumbs={crumbs}
				crumbSeparator="/"
				crumbLabel={customCrumbLabel}
				className="flex flex-row flex-no-wrap text-base "
			/>
		</div>
	);
	return (
		<div className="text-2xl flex flex-col min-h-screen bg-gray-400">
			<header className="bg-gray-300 p-4 flex flex-col items-stretch">
				<div className="flex justify-between sm:min-w-full lg:max-w-screen-md">
					<Link to="/" className="pr-4 hover:text-blue-800">
						<h3>[{data.site.siteMetadata.title}]</h3>
					</Link>
					<Menu className="hover:text-blue-800" />
				</div>
				{outsideHome() && breadcrumbEl()}
			</header>
			<section className="flex-1 p-4">{children}</section>
			<footer className="bg-gray-300 p-4 text-base flex justify-center">
				Impressum | Copyright 2020
				{/* <symbol id="icon-facebook" viewBox="0 0 32 32">
					<path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z" />
				</symbol> */}
			</footer>
		</div>
	);
}
