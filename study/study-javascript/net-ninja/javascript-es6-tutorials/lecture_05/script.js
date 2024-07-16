// #5 - The Spread Operator

window.onload = function () {

  var meats = ["ham", "salami", "bacon"]

  console.log(...meats)

  var nums1 = [1, 2, 3]

  var nums2 = [...nums1, 4, 5, 6]

  console.log(nums2)

  var nums = [3, 5, 7]

  function addNums (a, b, c) {
    console.log(a + b + c)
  }

  addNums(...nums)
}