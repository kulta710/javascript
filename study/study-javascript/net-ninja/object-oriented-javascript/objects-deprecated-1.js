// create user one
var userOneEmail = 'ryu@ninjas.com'
var userOneName = 'Ryu'
var userOneFriends = ['Yoshi']

// create user two
var userTwoEmail = 'yoshi@mariocorp.com'
var userOneName = 'Yoshi'
var userOneFriends = ['Ryu', 'Mario']

// create user three
var userTwoEmail = 'mario@mariocorp.com'
var userOneName = 'Mario'
var userOneFriends = ['Yoshi']

function login (email) {
  console.log(email, 'is now online')
}

function logout (email) {
  console.log(email, 'has logged out')
}

function logFriends (friends) {
  friends.forEach(friend => {
    console.log(friend)
  })
}

login(userOneEmail)