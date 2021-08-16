export function msHosts(state=[],action){
    switch(action.type){
        case "SETUP_MS_HOSTS":
            return Object.assign({},state,{msHosts:action.msHosts});
        default:
            return state;
    }
}

export function token(state=[],action){
    switch(action.type){
        case "SETUP_TOKEN":
            return Object.assign({},state,{msHosts:action.token});
        default:
            return state;
    }
}