import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Link } from 'gatsby';
import React from 'react';
import Menu from '../menu';
import logo from '../../../static/images/rj.png';

export default function PageHeader({ crumbs, customCrumbLabel }) {
	const outsideHome = () => crumbs.length > 1;
	const breadcrumbEl = () => (
		<div className="flex text-base flex-row flex-no-wrap divide-y-2 divide-gray-300">
			Location:<Breadcrumb
				crumbs={crumbs}
				crumbSeparator="."
				crumbLabel={customCrumbLabel}
				className="flex flex-row flex-no-wrap text-base "
			/>
		</div>
	);
	return (
		<header className="bg-gray-300 p-4 flex flex-col items-stretch">
			<div className="flex justify-between sm:min-w-full lg:max-w-screen-md">
				<Link to="/" className="h-10 w-10">
					<img className="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid" src={logo} alt="" />
				</Link>
				<Menu className="hover:text-blue-800" />
			</div>
			{outsideHome() && breadcrumbEl()}
		</header>
	)
}
