import { Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';

const ListLink = (props) => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export default function Layout({ location, crumbLabel, children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline` }}>MySweetSite</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
                <div>
                    <Breadcrumb location={location} crumbLabel={crumbLabel} />
                </div>
            </header>

            {children}
        </div>
    );
}
