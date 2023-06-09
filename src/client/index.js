// Entry point file for the client-side application
import 'babel-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import Routes from "./Routes";

// This instance of axios will always append '/api' infront of each request
const axiosInstance = axios.create({
    baseURL: '/api'
});

//                        reducers, initial State, middleware
const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

const rootElem = document.querySelector('#root');
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    rootElem
);
