import React from 'react';
import { Link } from 'gatsby';
import query from './query/layoutQuery';
import helpers from './helpers';
// export default class Menu extends React.Component {
export default function Menu() {
	// render() {
	const ListLink = (props) => (
		<li className="pr-4">
			<Link to={props.to}>{helpers(props.name)}</Link>
		</li>
	);
	const data = query();
	const menuPages = data.allFile.edges.map(
		(el, index) => el.node.name !== 'index' && <ListLink key={index} to={`/${el.node.name}`} name={el.node.name} />
	);
	return (
		<div>
			<ul className="flex flex-row flex-no-wrap">
				<ListLink to="/" name={'Home'} />
				{menuPages}
				{/* <ListLink to="/aboutCss/about-css-modules/">about css nested page</ListLink> */}
			</ul>{' '}
		</div>
	);
	// }
}
