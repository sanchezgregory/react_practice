export function inmutabilityPractice(element) {
  // let counter = 0
  // const setCounter = (count) => {
  //   counter = count
  //   element.innerHTML = `count is ${counter}`
  // }
  // element.addEventListener('click', () => setCounter(counter + 1))
  // setCounter(0)

  // Variables de tipo primitivo son siempre inmutables. Y los no primitivo son mutables (es decir, que pueden cambiar)
  // Los primitivos siempre se pasan por valor, y los no primitivos se pasan por referencia

  // arrays
  let colors = ['azul', 'rojo']

  let colors2 = colors

  colors2[1] = 'verde'
  console.log(colors2)
  console.log(colors)

  // Al asignar color a colors2 y en colors2 se hacen alguna modificacion, en realidad se le pasa la referencia de colors, por lo tanto, colors y colors2 sufren los cambio
  // y para evitar esto, usamos el spred operator, para asi evitar la mutabilidad

  let data1 = ['one', 'two']

  let data2 = [...data1]

  console.log(data1, data2)

  data2[1] = 'three'
  console.log(data1, data2)

  // Ahora con objetos pasa lo mismo

  let person = {
    name: 'hola mundo',
    occupation: 'programador'
  }

  let person2 = person

  console.log(person, person2)

  let person3 = {...person}
  person3.salary = 4000
  console.log(person, person3)

  // ahora vemos arreglos de objetos

  let people = [
    {
      name: 'helo',
      age: 12
    },
    {
      name: 'martin',
      age: 16
    }
  ]

  let people2 = people.map( person => {
    person.user = 'user'
    return person})

  console.log(people, people2)

  // para evitar la mutacion de people debido al cambio en people2. Hacemos el spredoperator

  let people3 = people.map( person => {
    const add = 'Vzla'
    return {
      ...person,
      address: add
    }
  })

  console.log(people, people3)

  // Unir dos objetos con spread
  let obj1 = {
    marca: 'Apple', 
  }
  let obj2 = {modelo: 'Pro max 15S'}

  let obj3 = {...obj1,...obj2}

  console.log(obj3)
}