import React from 'react';
import Container from '../components/container';
import styles from './about-css-modules.module.css';

const User = (props) => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
);
const IUser = (name, avatar, excerpt) => {
    return { username: name, avatar: avatar, excerpt: excerpt };
};
const users = [
    new IUser(
        'Jane Doe',
        'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
        "I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    ),
    new IUser(
        'Jane Doe',
        'https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg',
        "I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    ),
];

export default function About() {
    return (
        <Container>
            <h1>About CSS Modules</h1>
            <p>CSS Modules are cool</p>
            {users.map((user, index) => (
                <User key={index} username={user.username} avatar={user.avatar} excerpt={user.excerpt} />
            ))}
        </Container>
    );
}
