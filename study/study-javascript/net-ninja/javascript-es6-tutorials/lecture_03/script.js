// #3 - The Let Keyword

window.onload = function () {

  var x = 10

  if (x > 5) {
    // Compare below two
    // var keyword has effect on global scope
    // let keyword has only effect on local scope
    // var x = 5
    let x = 5

    console.log("inside:", x)

    // And check that declaration using let keyword is impossible when there is already a variable whose name is the same.
  }

  console.log("outside:", x)

  ////////////////////////////////////////

  var varItems = document.querySelectorAll("ul.var>li")
  var letItems = document.querySelectorAll("ul.let>li")

  // The example below is very important and subtle example to understand the difference between keywords var and let.
  // If we use keyword 'var', everytime we click list element on the browser, only 4 is logged.
  // The reason for that is var keyword makes global variable. When the event function executes console.log(x) calls global the value of global variable x whose value is 4.
  for (var x = 0; x < varItems.length; x++) {
    varItems[x].onclick = function () {
      console.log("When we use 'var'", x)
    }
  }

  // When we use keyword 'let', everything is same as what we expected.
  // Use 'let'.
  for (let x = 0; x < letItems.length; x++) {
    letItems[x].onclick = function () {
      console.log("When we use 'let'", x)
    }
  }
}