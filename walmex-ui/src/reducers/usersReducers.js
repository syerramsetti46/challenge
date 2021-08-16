export function fetchAllUsers(state=[],action){
    switch(action.type){
        case "GET_USERS":
            return {
                ...state,usersDTO:action.usersDTO
            }
        default:
            return state;
    }
}