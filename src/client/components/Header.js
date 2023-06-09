import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log('My Auht status is: ', auth);

    // We use normal anchor elements here because we want normal HTML link behaviour we are not navigating inside our app
    // When we want to implement naviagtion within our app we use the Link component (see below)
    const autButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    );

    return (
        <div>
            <Link to="/">React SSR</Link>
            <div>
                <Link to="/users">Users</Link>
                <Link to="/admins">Admins</Link>
                {autButton}
            </div>
        </div>
    );
};

const mapStateToProps = ({ auth }) => {
    // return {auth: auth}
    return { auth };
};

export default connect(mapStateToProps)(Header);
