// #10 - Sets

window.onload = function () {

  // Sets can have unique values

  var names = new Set()

  names.add("Shaun").add("Ryu").add("Crystal")
  
  // It does not make an error, but there is only one 'Crystal' in the set.
  // 'Set' eliminates duplicates
  names.add("Crystal")

  console.log(names.size) // 3

  console.log(names.has("Crystal")) // true

  const result = names.delete("Ryu")

  // 'Delete' returns true as it successfully delete an element, but false as it fails.
  // 'Delete' method cannot be used in chaining method.
  console.log(result) // true

  // delete all elements
  names.clear()

  console.log(names)

  ////////////////////////////////////////////

  // How to remove duplicates of an array
  var ninjas = ["shaun", "crystal", "yoshi", "ryu", "yoshi", "ryu"]

  var refinedNinjas = new Set(ninjas)

  console.log(refinedNinjas)

  ninjas = [...refinedNinjas]

  console.log(ninjas)
}