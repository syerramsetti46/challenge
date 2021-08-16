'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    try {
        const itemToLookup = request.query.item;
        const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
        if (data)
            return response.status(200).send(JSON.stringify(data));
        else
            return response.status(404).send("Data not found");
    }
    catch (error) {
        return response.status(404).send("Error occurred");
    }
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
