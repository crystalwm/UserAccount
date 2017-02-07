function User(obj) {
    this.name = obj.name;
    this.password = obj.password;
}

var users = [
    { name: 'tom', password: 'tom' },
    { name: 'lily', password: 'lily' }
];


module.exports = {
    model: User,
    addUser: function*(name, password) {
        var newUser = new User({
            name: name,
            password: password
        });
        users.push(newUser);
    },
    thereIs: function*(name) {

    },
    pwRight: function*(name, password) {

        console.log('pwRight:input name:' + name + '\n');
        console.log('pwRight:input password:' + password + '\n');
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.name == name && user.password == password) {
                return true;
            }
        }
        return false;
    }

};