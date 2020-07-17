import React from 'react';
import Layout from '../components/layout';

export default ({ pageContext, location }) => {
	const { breadcrumb: { crumbs } } = pageContext;
	const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');

	return (
		<Layout crumbs={crumbs} crumbLabel={customCrumbLabel}>
			<section className="flex flex-col">
				<section className="flex justify-center">
					<img src="https://source.unsplash.com/random/400x200" alt="" />
				</section>
				<section>Projects</section>
				<section>technologies</section>
			</section>
		</Layout>
	);
};
