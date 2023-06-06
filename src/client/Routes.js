import React from "react";
import Home from "./components/Home";
import UsersList, { loadData } from "./components/UsersList";

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
