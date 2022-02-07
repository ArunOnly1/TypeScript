const names = ['Arun', 'Asmita']

function mergeObject<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 }
}

const newObj = mergeObject({ number: 55 }, { roll: 11 })
console.log(newObj)

// Generics and Constraints
interface Lengthy {
  length: number
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = ''
  if (element.length) {
    descriptionText = `${element} of length ${element.length}`
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('Hello '))
