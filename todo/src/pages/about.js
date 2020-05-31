import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default function About({ pageContext, location }) {
	const { breadcrumb: { crumbs } } = pageContext;
	const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');
	return (
		<Layout crumbs={crumbs} crumbLabel={customCrumbLabel}>
			<div>
				<h2>About me</h2>
				<p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
				<Link to="/">Home</Link>
			</div>
		</Layout>
	);
}
