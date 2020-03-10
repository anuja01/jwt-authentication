import decode from 'jwt-decode';
export const userLogin = (username, password) => {
    console.log(username, password)
    const host = 'http://localhost:3000'
     // Get a token from api server using the fetch api
     return fetch(`${host}/logout`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        })
    }).then(res => {
        console.log('response ----------', res)
        setToken(res.token) // Setting the token in localStorage
        return Promise.resolve(res);
    })
}

// const fetch = (url, options) => {
//     // performs api calls sending the required authentication headers
//     const headers = {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
//     // Setting Authorization header
//     // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
//     if (loggedIn()) {
//         headers['Authorization'] = 'Bearer ' + getToken()
//     }

//     return fetch(url, {
//         headers,
//         ...options
//     })
//         .then(_checkStatus)
//         .then(response => response.json())
// }

const getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
}

const setToken = (idToken) => {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
}
const loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = getToken() // Getting token from localstorage

    //The double exclamation is a way to cast the variable to a boolean, allowing you to easily check if the token exusts. 
    return !!token && !isTokenExpired(token) // handwaiving here
}

const _checkStatus = (response) => {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

const isTokenExpired = (token) => {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
            return true;
        }
        else
            return false;
    }
    catch (err) {
        console.log("expired check failed! Line 42: AuthService.js");
        return false;
    }
}