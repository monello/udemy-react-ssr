import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import AdminsListPage from "./pages/AdminsListPage";
import NotFoundPage from "./pages/NotFoundPage";

// This is how you handle Routing when using the `react-router-config` package
export default [
    {
        ...App,
        // nested routes
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true,
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...UsersListPage,
                path: '/users',
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

