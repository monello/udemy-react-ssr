// Entry point file for the client-side application
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const rootElem = document.querySelector('#root');
ReactDOM.hydrate(
    <BrowserRouter><Routes /></BrowserRouter>,
    rootElem
);
