function User(obj){
    this.name=obj.name;
    this.password=obj.password;
}

var users=[];


module.exports = {
    model: User,
    addUser: function *(name, password) {
        var newUser = new User({
            name: name,
            password: password
        });
        users.push(newUser);
    },
    thereIs: function *(name) {

    },
    pwRight: function *(name, password) {

    }

};