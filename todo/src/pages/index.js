import React from 'react';
import Layout from '../components/layout';

export default ({ pageContext, location }) => {
	const { breadcrumb: { crumbs } } = pageContext;
	const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');

	return (
		<div style={{ color: 'purple' }}>
			<Layout crumbs={crumbs} crumbLabel={customCrumbLabel}>
				<img src="https://source.unsplash.com/random/400x200" alt="" />
			</Layout>
		</div>
	);
};
