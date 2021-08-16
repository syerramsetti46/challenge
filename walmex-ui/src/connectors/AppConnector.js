import {connect} from "react-redux";
import * as usersActions from "../actions/usersActions";
import * as itemsActions from "../actions/itemsActions";
import * as appActions from "../actions/appActions";
// import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import App from "../App";

function mapStateToProps(state){
    return{
        token:state.token.token,
        msHosts:state.msHosts.msHosts,
        allAgesUsersCountDTO:state.fetchAllAgesWithUsersCount.allAgesUsersCountDTO,
        usersDTO:state.fetchAllUsers.usersDTO
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({...itemsActions,...usersActions,...appActions},dispatch);
}

const AppConnector=connect(mapStateToProps,mapDispatchToProps)(App);

export default AppConnector;