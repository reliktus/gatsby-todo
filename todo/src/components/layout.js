import React from 'react';
import './layout.css';
import PageFooter from './layout/pageFooter';
import PageHeader from './layout/PageHeader';

export default function Layout({ crumbs, customCrumbLabel, children }) {
	return (
		<div className="text-2xl flex flex-col min-h-screen bg-gray-400">
			<PageHeader crumbs={crumbs} customCrumbLabel={customCrumbLabel} />
			<section className="flex-1 p-4">{children}</section>

			<PageFooter />
		</div>
	);
}
