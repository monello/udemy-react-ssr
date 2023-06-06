import React from "react";
import Home from "./pages/HomePage";
import UsersList, { loadData } from "./pages/UsersListPage";

// This is how you handle Routing when using the `react-router-config` package
export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/users',
        component: UsersList,
        loadData
    }
];
