// Entry point file for the client-side application
import React from "react";
import ReactDOM from 'react-dom';
import Home from "./components/Home";

const rootElem = document.querySelector('#root');
ReactDOM.hydrate(<Home />, rootElem);
