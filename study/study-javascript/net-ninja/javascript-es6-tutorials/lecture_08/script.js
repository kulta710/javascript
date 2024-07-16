// #8 - Object Literal Improvements

window.onload = function () {

  var name = "Crystal"
  var belt = "Black"

  // In ES5
  var ninja = {
    name: name,
    belt: belt,
    chop: function (x) {
      console.log(`You chopped the enemy ${x} times`)
    }
  }

  // In ES6
  var ninja = {
    name,
    belt,
    chop (x) {
      console.log(`You chopped the enemy ${x} times`)
    }
  }

  console.log(ninja.name)
  console.log(ninja.belt)

  ninja.chop(3)
}