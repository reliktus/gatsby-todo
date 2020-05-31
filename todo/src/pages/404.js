import { Link } from 'gatsby';
import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                404 - no such page
                <Link to="/">Home</Link>
            </div>
        );
    }
}
