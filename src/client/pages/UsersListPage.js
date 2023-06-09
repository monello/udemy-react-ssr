import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../actions';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
    }

    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    // Manually dispatch fetchUsers()
    // > wW say "manually" because we are executing it directly on the "store" object.
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};
