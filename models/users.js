let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
];

let nextId = 3;

function getAllUsers() {
    return users;
}

function addUser(name, email, role) {
    const newUser = { id: nextId++, name, email, role };
    users.push(newUser);
    return newUser;
}

function deleteUser(id) {
    users = users.filter(u => u.id !== id);
    return id;
}

module.exports = {
    getAllUsers,
    addUser,
    deleteUser
};
