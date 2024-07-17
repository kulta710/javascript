// Object Literal

var userOne = {
  email: 'ryu@ninjas.com',
  name: 'Ryu',
  login () {
    // If we use 'this' keyword in a object like in this case, 'this' points to this object
    console.log(this.email, 'has logged in')
  },
  logout () {
    console.log(this.email, 'has logged out')
  }
}

// But we use 'this' keyword like below, 'this' points to global object 'window'
// this

userOne.name = 'Yoshi'

// We can access property in two different ways
userOne.email
userOne['email']

userOne['name'] = 'Mario'

// We can choose property dynamically
var prop = 'name'
userOne[prop]
prop = 'email'
userOne[prop]

// Create property
userOne.age = 25

userOne.age // = 25

userOne.logInfo = function () {}

// This way in which we create object is fine, but what can we do when we have to create 10000 objects?
// Would you copy and paste the object and rewrite all names of objects and values of properties?
// It would not be a good way

var userTwo = {
  email: 'yoshi@mariocorp.com',
  name: 'Yoshi',
  login () {
    console.log(this.email, 'has logged in')
  },
  logout () {
    console.log(this.email, 'has logged out')
  }
}

var userThree = {
  email: 'mario@mariocorp.com',
  name: 'Mario',
  login () {
    console.log(this.email, 'has logged in')
  },
  logout () {
    console.log(this.email, 'has logged out')
  }
}

// That is why we need 'Classes'