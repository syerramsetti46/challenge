import {store} from '../store'

export function fetchResult(url, type, request, requestBody, headers, callBackInit, callBackPost) {
  
    if ('GET' === type) {
        return fetchGet(url, type, request, requestBody, headers, callBackInit, callBackPost);
    } else if ('POST' === type) {
        return fetchPost( url, type, request, requestBody, headers, callBackInit, callBackPost);
    }
}

function fetchGet(url, type, request, requestBody, headers, callBackInit, callBackPost) {
    var token = store.getState().token.token;
    var msHosts = store.getState().msHosts.msHosts;
    var msHostsStr = msHosts ? btoa(JSON.stringify(msHosts)) : '';
    var headerWithAuth = Object.assign({}, headers, { Authorization: token, MSHosts: msHostsStr });
    return dispatch => {
        if (callBackInit !== null) {
            dispatch(callBackInit(request));
        }
        var responseStatus = null;
        return fetch(url,
            {
                redirect: 'follow',
                credentials: "same-origin",
                method: type,
                headers: headerWithAuth
            })
            .then(
                function (response) {
                    responseStatus = response.status;
                    return response.text().then(function (text) {
                        return text ? JSON.parse(text) : null
                    });
                }
            )
            .then(
                function (object) {
                    if (callBackInit !== null) {
                        //dispatch(stopSpinner());
                    }
                    dispatch(callBackPost(object));
                }
            )
            .catch(function (error) {
                console.log(url);
                console.log(error);
                if (callBackInit !== null) {
                    //dispatch(stopSpinner());
                }
                if (responseStatus === 200) {
                    // Session time out
                    //dispatch(catchException());
                }
                return null;
            }
            );
    }
}

export function fetchPost(url, type, request, requestBody, headers, callBackInit, callBackPost) {
    var token = store.getState().token.token;
    var msHosts = store.getState().msHosts.msHosts;
    var msHostsStr = msHosts ? btoa(JSON.stringify(msHosts)) : '';
    var headerWithAuth = Object.assign({}, headers, { Authorization: token, MSHosts: msHostsStr });
    return dispatch => {
        if (callBackInit !== null) {
            dispatch(callBackInit(request));
        }
        var responseStatus = null;
        return fetch(url,
            {
                redirect: 'follow',
                credentials: "same-origin",
                method: type,
                headers: headerWithAuth,
                body: requestBody
            })
            .then(
                function (response) {
                    responseStatus = response.status;
                    return response.text().then(function (text) {
                        return text ? JSON.parse(text) : null
                    });
                }
            )
            .then(
                function (object) {
                    dispatch(callBackPost(object, requestBody));
                }
            )
            .catch(function (error) {
                console.log(url);
                console.log(error);
                if (callBackInit !== null) {
                    //dispatch(stopSpinner());
                }
                if (responseStatus === 200) {
                    // Session time out
                    //dispatch(catchException());
                }
            });
    }
}



export function getHost() {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    const port = window.location.port;
    var host = '';
    if (port !== '') {
        host = protocol + '//' + hostname + ':' + port + '/';
    } else {
        host = protocol + '//' + hostname + '/';
    }
    return host;
}