import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from 'axios';
import reducers from "../client/reducers";

// accept the request param "req" that we are passing in on each request from 'src/index.js`
export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        // here we manualy pass the cookie in. We must default it to an empty string incase there is no cookie
        headers: { cookie: req.get('cookie') || '' }
    });

    //                        reducers, initial State, middleware
    const store = createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );
    return store;
};
