// #11 - Generators

window.onload = function () {

  function* gen () {
    // javascript engine read codes right to left
    // first execute console.log("pear"), then 'yield' (pause)
    yield console.log("pear")
    yield console.log("banana")
    yield console.log("apple")
    console.log("all done")
  }

  //////////////////////////////////////////////////////////////

  var myGen = gen()
  myGen.next() // pause at 'yield' point
  myGen.next() // restart the execution and pause at 'yield' point
  myGen.next() // restart the execution and pause at 'yield' point
  myGen.next() // restart and execute all

  function* gen2() {
    yield "pear"
    yield "banana"
    yield "apple"
    return "all done"
  }

  // yield & return
  // keyword 'yield' is similar with keyword 'return'
  // When we need to pause the function and return specific value, we use 'yield'
  // When we need to finish the function and return specific value finally, we use 'return'
  
  var myGen2 = gen2()
  console.log(myGen2.next()) // iterator object (has value of 'pear', 'done': false)
  console.log(myGen2.next()) // iterator object (has value of 'banana', 'done': false)
  console.log(myGen2.next()) // iterator object (has value of 'apple', 'done': false)
  console.log(myGen2.next()) // iterator object (has value of 'all done', 'done': true)

  //////////////////////////////////////////////////////////////

  function* gen3() {
    var x = yield "pear"
    var y = yield "banana"
    var z = yield "apple"
    return x + y + z
  }

  // When we submit an argument at a specific yield point, we submit the value to the left variable.

  var myGen3 = gen3()
  console.log(myGen3.next()) // iterator object (has value of 'pear', 'done': false)
  console.log(myGen3.next(10)) // iterator object (has value of 'banana', 'done': false)
  console.log(myGen3.next(5)) // iterator object (has value of 'apple', 'done': false)
  console.log(myGen3.next(3)) // iterator object (has value of 18, 'done': true)
}