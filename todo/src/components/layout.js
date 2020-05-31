import { graphql, Link, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';

const ListLink = (props) => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export default function Layout({ crumbs, customCrumbLabel, children }) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link
                    to="/"
                    style={{ textShadow: `none`, backgroundImage: `none` }}
                >
                    <h3 style={{ display: `inline` }}>
                        {data.site.siteMetadata.title}
                    </h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/aboutCss/about-css-modules/">
                        about-css-modules
                    </ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
                <Breadcrumb
                    crumbs={crumbs}
                    crumbSeparator=" > "
                    crumbLabel={customCrumbLabel}
                />
            </header>
            {children}
            <footer>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/aboutCss/about-css-modules/">
                        about-css-modules
                    </ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </footer>
        </div>
    );
}
