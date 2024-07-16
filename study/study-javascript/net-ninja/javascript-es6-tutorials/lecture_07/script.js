// #7 - New String Methods

window.onload = function () {

  var str = "graaaaaaaavy "

  console.log(str.repeat(10))

  var str = "goodbye"

  console.log(str.startsWith('good')) // true
  console.log(str.startsWith("bye", 4)) // true
  console.log(str.endsWith("bye")) // true
  console.log(str.endsWith("good", 4)) // true

  var youSay = "goodbye"

  if (youSay.startsWith("goodbye")) {
    var iSay = "hello"
  }

  console.log(`You say ${youSay}, and I say ${iSay}.`)

  var test = "My name is Shaun"

  console.log(test.includes("name")) // true

  /*
    NEW STRING METHODS
    - repeat
    - startsWith
    - endsWith
    - includes
  */
}