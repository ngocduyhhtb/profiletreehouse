const fetch = require("node-fetch");

CheckStatus = (response) => {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}
Profile = (user_name) => {
    return fetch(`https://teamtreehouse.com/${user_name}.json`)
        .then(CheckStatus)
        .then(res => res.json())
        .catch(error => {
            throw error
        });
}

module.exports = Profile;