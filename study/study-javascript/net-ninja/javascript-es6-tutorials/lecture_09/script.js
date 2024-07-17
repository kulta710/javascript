// #9 - Arrow Functions (Fat Arrows)

window.onload = function () {

  // In ES5
  var ninjaGreeting = function () {
    console.log("hiiiiiya")
  }

  // In ES6
  var ninjaGreeting = name => console.log(`${name} says hiiiiiya`)

  ninjaGreeting("Mark")

  // Test
  // When we omit {} in our arrow function, javascript engine consider it as a return value. But there is a function, the engine execute the function and return the returning value of the function.
  var test = arg => test2(arg)

  console.log(test("return value")) // return value

  function test2 (arg) {
    return arg
  }

  // *** Very Important
  // When we send a function using 'function' keyword as an argument (callback function), 'this' keyword refers to that functions itself.
  var ninja = {
    name: "Shaun",
    chop (x) {
      window.setInterval(function () {
        if (x > 0) {
          console.log(this.name + "chopped the enemy")
          x--
        }
      }, 1000)
    }
  }

  // But when we use a arrow function, 'this' keyword refers to the object which is what we expect.
  // That is the important nature of 'arrow function'
  var ninja = {
    name: "Shaun",
    chop (x) {
      window.setInterval(() => {
        if (x > 0) {
          console.log(this.name + " chopped the enemy")
          x--
        }
      }, 1000)
    }
  }

  ninja.chop(5)
}