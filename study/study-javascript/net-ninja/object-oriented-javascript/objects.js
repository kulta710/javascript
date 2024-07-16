// Prototype and Inheritance

function User (email, name) {
  this.email = email
  this.name = name
  this.online = false
}

// prototype must be accessed through classes itself, not instances
User.prototype.login = function () {
  this.online = true
  console.log(this.email, 'has logged in')
}

User.prototype.logout = function () {
  this.online = false
  console.log(this.email, 'has logged out')
}

function Admin (...args) {
  // inherit constructor
  User.apply(this, args)
  this.role = 'super admin'
}

// inherit prototype
Admin.prototype = Object.create(User.prototype)
// add Admin only prototype method
Admin.prototype.deleteUser = function (user) {
  users = users.filter(item => item.email !== user.email)
}

// When inherit prototype, there are prototype chains

var userOne = new User('ryu@ninjas.com', 'Ryu')
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi')
var admin = new Admin('shaun@ninjas.com', 'Shaun')

var users = [userOne, userTwo, admin]

// console.log(userOne)
// userTwo.login()

console.log(admin)