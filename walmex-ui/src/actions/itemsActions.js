import { fetchResult } from "./serverActions";

export function fetchAgesUsersCountPerItem(json){
    return{
        type:"GET_ITEMS_AGES_USER_COUNT",
        allAgesUsersCountDTO:json
    }
}

export function fecthAllAgesWithUsersCount(item){
    const headers={
        Accept:"application/json",
        "Content-Type":"application/json",
    }
    return fetchResult("http://localhost:3000/users/age?item="+item,"GET",null,null,headers,null,fetchAgesUsersCountPerItem);
}