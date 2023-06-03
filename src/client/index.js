// Entry point file for the client-side application
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

import Routes from "./Routes";

//                        reducers, initial State, middleware
const store = createStore(reducers, {}, applyMiddleware(thunk));

const rootElem = document.querySelector('#root');
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    rootElem
);
