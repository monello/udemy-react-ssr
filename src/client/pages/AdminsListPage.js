import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions/index';

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        });
    }

    render() {
        return (
            <div>
                <ul>{renderAdmins()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ admins: state.admins });
const mapDispatch = { fetchAdmins };

export default {
    component: connect(mapStateToProps, mapDispatch)(AdminsListPage),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
