import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { fetchAllUsers } from "./usersReducers";
import {  fetchAllAgesWithUsersCount } from "./itemsReducers";
import { token,msHosts } from "./appReducer";
// import { routerReducer } from 'react-router-redux';

const rootReducer=(history)=>
    combineReducers({
        router: connectRouter(history),
        fetchAllAgesWithUsersCount,
        fetchAllUsers,
        token,
        msHosts
    });

export default rootReducer;