class User {
  constructor (email, name) {
    this.email = email
    this.name = name
    this.score = 0
  }

  login () {
    console.log(this.email, 'just logged in')

    return this
  }

  logout () {
    console.log(this.email, 'just logged out')

    return this
  }

  updateScore () {
    this.score++
    console.log(this.email, 'score is now', this.score)

    return this
  }
}

class Admin extends User {
  deleteUser (user) {
    users = users.filter((item => item.email !== user.email))
  }
}

var userOne = new User('ryu@ninjas.com', 'Ryu')
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi')
var admin = new Admin('shaun@ninjas.com', 'shaun')

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

console.log(userOne)
console.log(userTwo)

// Method Chaining
userOne.login().updateScore().updateScore().updateScore().logout()
userTwo.login().updateScore().updateScore().logout()

var users = [userOne, userTwo, admin]

admin.deleteUser(userOne)
// userOne.deleteUser(userTwo) // impossible

console.log(users)