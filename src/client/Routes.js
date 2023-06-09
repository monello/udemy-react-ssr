import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";

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
                ...UsersListPage,
                path: '/users',
            }
        ]
    }
];

