import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";

// This is how you handle Routing when using the `react-router-config` package
export default [
    {
        ...HomePage,
        path: '/',
        exact: true,
    },
    {
        ...UsersListPage,
        path: '/users',
    }
];
