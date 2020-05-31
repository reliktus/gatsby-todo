import { Link } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

export default ({ location }) => (
    <div style={{ color: 'purple' }}>
        <Layout location={location} crumbLabel="Home">
            <Header headerText="Hello gatsby" />
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <Link to="/contact/">contact test</Link>
        </Layout>
    </div>
);
