// #6 - Template Strings

window.onload = function () {

  // line break is automatically inserted
  var temp = `hello,
  my name is Shaun        white space`

  console.log(temp)

  function logNinja (name, age) {
    console.log(`My name is ${name} and my age is ${age}.`)
  }

  logNinja('Shaun', 24)
}