// #4 - Default Parameters

window.onload = function () {

  function log (num=10) {
    console.log(num)
  }

  // When there is no parameter, without setting default parameter, we will get undefined
  // But when we set a default parameter value, we will get the default value
  log()

  function logNinja (name="Shaun", belt="black", age=25) {
    console.log("My name is: " + name + " and my belt colour is " + belt + " and my age is " + age)
  }

  logNinja()
}