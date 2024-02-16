const state = {
    users : [],
}

function addUser(username, type){
    state.users.push({username: username, isLoggedIn: true, usertype: type});
}
 function getUserAndType(username){
    const searchIndex = state.users.findIndex((user) => user.username == username);
    return state.users[searchIndex];
}

module.exports = {
    addUser,
    getUserAndType
}