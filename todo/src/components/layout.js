import { Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';
import Menu from './menu';
import query from './query/layoutQuery';
import './layout.css';

export default function Layout({ crumbs, customCrumbLabel, children }) {
	const data = query();

	return (
		<div className="bg-gray-300 text-2xl text-center flex flex-col flex-1 min-h-screen">
			<header className="mb-2 flex flex-row justify-center flex-wrap">
				<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
					<h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
				</Link>
				<p className="flex flex-row flex-no-wrap">
					[<Breadcrumb crumbs={crumbs} crumbSeparator=" > " crumbLabel={customCrumbLabel} />]
				</p>
				<Menu />
			</header>
			<section className="">{children}</section>
			<footer className="">
				{/* <Menu /> */}
				Impressum | Copyright 2020
				<symbol id="icon-facebook" viewBox="0 0 32 32">
					<path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z" />
				</symbol>
			</footer>
		</div>
	);
}
