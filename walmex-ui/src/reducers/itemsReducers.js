export function fetchAllAgesWithUsersCount(state=[],action){
    switch(action.type){
        case "GET_ITEMS_AGES_USER_COUNT":
            return {
                ...state,allAgesUsersCountDTO:action.allAgesUsersCountDTO
            }
        default:
            return state;
    }
}