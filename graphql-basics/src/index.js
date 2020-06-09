import myCurrentLocation, { message, name, getGreeting } from './myModule'
import theRealAddinator, { subtractatron } from './math'

console.log(message)
console.log(name)
console.log(myCurrentLocation)

console.log(getGreeting("Jessica"))

console.log("ADD",theRealAddinator(5, 6))
console.log('SUBTRACT', subtractatron(9,6))

