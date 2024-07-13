//---------------
// TypeScript 101
//---------------

let myname = 'shaun'

// myname = 6

//------------------------
// Benefits of TypeScript
//------------------------

// 1 - better error feedback

function reverse(str: string) {
  return str.split('').reverse().join('')
}

const result = reverse('hello')
// const result = reverse(true)

// 2 - better autocompletion & code hints

const reversed = reverse('ninja')

// reversed.forEach

// 3 - custom types

interface MenuItem {
  title: string
  cost: number
}

function printMenuItem(item: MenuItem) {
  console.log(item.title, ': ', item.cost)
}