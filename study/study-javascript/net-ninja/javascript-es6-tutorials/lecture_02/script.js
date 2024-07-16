// #2 - Constants

window.onload = function () {

  const pi = 3.142
  // TypeError: Assignment to constant variable.
  // pi = 10
  console.log(pi)

  function calcArea (radius) {
    // pi = 10 // impossible
    const pi = 10 // But this is possible!
    // Above is local version of the constant
    console.log("The area is: " + pi * radius * radius)
  }

  console.log(pi)

  calcArea(5)
}