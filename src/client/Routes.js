import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";

// This is how you handle Routing when using the `react-router-config` package
export default [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/users',
        component: UsersListPage,
        loadData
    }
];
