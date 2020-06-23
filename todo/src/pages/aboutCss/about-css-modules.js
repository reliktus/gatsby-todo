import React from 'react';
import Container from '../../components/container';
import Layout from '../../components/layout';
import styles from './about-css-modules.module.css';

export default ({ pageContext, location, data }) => {
    const User = (props) => (
        <div className={styles.user}>
            <img src={props.avatar} className={styles.avatar} alt="" />
            <div className={styles.description}>
                <h2 className={styles.username}>{props.username}</h2>
                <p className={styles.excerpt}>{props.excerpt}</p>
            </div>
        </div>
    );
    
    const users = [
         new sampleUser(
            'Jane Doe',
            'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
            "I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            ),
        new sampleUser(
            'Jane Doe',
            'https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg',
            "I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        )
    ];
    const {
        breadcrumb: { crumbs }
    } = pageContext;
    const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');

    return (
        <Layout crumbs={crumbs} crumbLabel={customCrumbLabel}>
            <Container>
                <h1>About CSS Modules</h1>
                <p>CSS Modules are cool</p>
                {users.map((user, index) => (
                    <User
                        key={index}
                        username={user.username}
                        avatar={user.avatar}
                        excerpt={user.excerpt}
                    />
                ))}
            </Container>
        </Layout>
    );
};

export class sampleUser{
    constructor(name, avatar, excerpt) {
        this.name = name;
        this.avatar = avatar;
        this.excerpt = excerpt;
        this.init();
    }
    init = () => ({username: this.name, avatar: this.avatar, excerpt: this.excerpt})
}