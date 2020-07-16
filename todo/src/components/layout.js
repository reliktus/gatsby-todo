import { Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';
import Menu from './menu';
import query from './query/layoutQuery';
import './layout.css';

export default function Layout({ crumbs, customCrumbLabel, children }) {
	const data = query();

	return (
		<div className="bg-gray-300 text-2xl text-center">
			<header className="mb-2 flex flex-row justify-center">
				<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
					<h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
				</Link>
				[<Breadcrumb crumbs={crumbs} crumbSeparator=" > " crumbLabel={customCrumbLabel} />]
				<Menu />
			</header>
			<section className="">{children}</section>
			<footer className="he">
				{/* <Menu /> */}
				Impressum | Copyright 2020
			</footer>
		</div>
	);
}
