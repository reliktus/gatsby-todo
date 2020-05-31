import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default function About({ location }) {
    return (
        <Layout location={location} crumbLabel="About Us">
            <div>
                <h1>About me</h1>
                <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
                <Link to="/">Home</Link>
            </div>
        </Layout>
    );
}
