'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    try{
        const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
        return mockDBCall(dataAccessMethod);
    }
    catch(error){
        return error;
    }

};

const getListOfAgesOfUsersWith = (item) => {
    try {
        const dataAccessMethod = () => {
            // fill me in :)
            let returnObj = []
            const listOfItemsByUser = db.itemsOfUserByUsername;
            let allUsers = db.usersById;
            //get user age based on the  item given 
            let foundUserIndexes = [];
            let foundUserNames = [];
            let foundUsersWithAge = []
            Object.values(listOfItemsByUser).forEach((vals, i) => {
                if (vals.findIndex(v => v === item) !== -1)
                    foundUserIndexes.push(i);
            });
            let userNames = Object.keys(listOfItemsByUser);
            foundUserIndexes.forEach(i => {
                foundUserNames.push(userNames[i]);
            });
            allUsers = [...Object.values(allUsers)];
            allUsers.forEach(obj => {
                if (foundUserNames.findIndex(un => un === obj.username) !== -1) {
                    foundUsersWithAge.push({ age: obj.age, count: 1 });
                }
            })
            foundUsersWithAge.reduce(function (res, value) {
                if (!res[value.age]) {
                    res[value.age] = { age: value.age, count: 0 };
                    returnObj.push(res[value.age])
                }
                res[value.age].count += value.count;
                return res;
            }, {});
            return returnObj;
        }
        return mockDBCall(dataAccessMethod);
    }
    catch (err) {
        return err;
    }
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};
