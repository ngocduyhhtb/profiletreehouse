const users = new Set([
    {id: 1, name: "User1", email: "user1@gmail.com", age: 31, avatar: 'images/users/user1.png'},
    {id: 2, name: "User2", email: "user2@gmail.com", age: 20, avatar: 'images/users/user2.png'},
    {id: 3, name: "User3", email: "user3@gmail.com", age: 25, avatar: 'images/users/user3.png'}
]);
module.exports = {
    index: (req, res) => {
        res.render('users/index', {
            users: Array.from(users)
        });
    },
    search: (req, res) => {
        const name_search = req.query.name;
        const age_search = req.query.age;
        const userArray = Array.from(users);
        const result = userArray.filter(user => {
            return user.name.toLowerCase().indexOf(name_search.toLowerCase()) !== -1 && user.age === parseInt(age_search);
        });
        res.render('users/index', {users: result});
    },
    post_create: (req, res) => {
        const newUser = {
            id: Array.from(users).pop().id +1,
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        }
        users.add(newUser);
        res.redirect('/users');
    },
    get_create: (req, res) => {
        res.render('users/create');
    },
    show: (req, res) => {
        const userView = Array.from(users);
        const result = userView.find(user => {
            return user.id === parseInt(req.params.id);
        });
        res.render('users/show', {user: result});
    }
}