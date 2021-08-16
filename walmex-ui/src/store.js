import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers/rootReducer";
import { createMemoryHistory } from "history";


const defaultState = {
    token: {
        token: null,
    },
    msHosts: {
        msHosts: null,
    }
}

function configureStore(defaultState) {
    const store = createStore(rootReducer(history),
        defaultState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        ))
    return store;
}

export const history = createMemoryHistory();

export const store = configureStore(defaultState);