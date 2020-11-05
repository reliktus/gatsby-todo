import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Link } from 'gatsby';
import React from 'react';
import query from '../query/layoutQuery';
import Menu from '../menu';

export default function PageHeader({crumbs, customCrumbLabel}) {
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
        <header className="bg-gray-300 p-4 flex flex-col items-stretch">
				<div className="flex justify-between sm:min-w-full lg:max-w-screen-md">
					<Link to="/" className="pr-4 hover:text-blue-800">
						<h3>[{data.site.siteMetadata.title}]</h3>
					</Link>
					<Menu className="hover:text-blue-800" />
				</div>
				{outsideHome() && breadcrumbEl()}
			</header>
    )
}
