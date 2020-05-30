import { Link } from 'gatsby';
import React from 'react';
import Header from '../components/header';

export default () => (
    <div style={{ color: 'purple' }}>
        <p>What a world</p>
        <Header headerText="Hello gatsby" />
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <Link to="/contact/">contact test</Link>
    </div>
);
