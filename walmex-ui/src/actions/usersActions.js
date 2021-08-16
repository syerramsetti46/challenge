import { fetchResult } from "./serverActions";

export function fetchUsers(json){
    return{
        type:"GET_USERS",
        usersDTO:json
    }
}

export function fecthAllUsers(){
    const headers={
        Accept:"application/json",
        "Content-Type":"application/json",
    }
    return fetchResult("http://localhost:3000/users/","GET",null,null,headers,null,fetchUsers);
}