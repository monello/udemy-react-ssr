import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/reducers";

export default () => {
    //                        reducers, initial State, middleware
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return store;
};
