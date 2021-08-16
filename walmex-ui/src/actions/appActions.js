export function setupToken(token){
    return{
        type:"SETUP_TOKEN",
        token:token
    }
}

export function setupMSHosts(msHosts){
    return{
        type:"SETUP_MS_HOSTS",
        msHosts:msHosts
    }
}
