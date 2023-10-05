// 1.Problem:
// found out area of circle
// found out circumference of circle
// found out diameter of circle

const radius = [1,2,3,4,6,7]

// get area of circle
function area(radius) {
 let a = []
  for(let i  = 0; i < radius.length; i++){
   a.push( Math.PI * radius[i] * radius[i])
  }
  return a
}

// get circumference of circle
function circumference(radius) {
 let a = []
  for(let i  = 0; i< radius.length; i++){
    a.push(2 * Math.PI * radius[i])
  }
  return a
}

// get diameter of circle 
function diameter(radius) {
 let a = []
  for(let i  = 0; i< radius.length; i++){
    a.push(Math.PI * radius[i] * radius[i])
  }
  return a
}

// function filterFunction(arr, callback) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//    if(callback(arr[i])){
//     filteredArr.push(arr[i])
//    }
//   }
//   return filteredArr;
// }
// console.log(filterFunction(radius, (data) =>{
//   return  data % 2 != 1
// }))


// higherOrderFunction
const higherOrderFunction = (radius,callback) =>{
  const data = []
 for(let i = 0; i < radius.length; i++){
    data.push(callback(radius[i]))
 }
 return data
}

// area of circle
// console.log(higherOrderFunction(radius,(area) => Math.floor(Math.PI * area * area))) //[ 3, 12, 28, 50, 113, 153 ]

// area of circumference
// console.log(higherOrderFunction(radius,(cirf) => Math.floor(2 * Math.PI * cirf)))//[ 6, 12, 18, 25, 37, 43 ]

// area of diameter
// console.log(higherOrderFunction(radius, (diameter) =>2 * diameter))//[ 6, 12, 18, 25, 37, 43 ]




// problem: 2;

// (found out odd, even, also findout less than <, greater numbers >)

// odd number find out
const oddNumber = (numbers) =>{
const element = []
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 !== 0)
   element.push(numbers[i])
}
return element
}
// console.log(oddNumber)//[ 1, 3, 7 ]

// evenNumber findout
const evenNumber = (numbers) =>{
  const element = []
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0)
     element.push(numbers[i])
  }
  return element
  }
// console.log(oddNumber(radius))//[ 2, 4, 6 ]

//using higherOrderfunction to filter of array
const filterFunction = (numbers, callback) =>{
const data = []
for(let i = 0; i < numbers.length; i++){
  if(callback(numbers[i])){
    data.push(numbers[i])
  }
}
return data
}


// oddNumbers
// console.log(filterFunction(radius,(number) => number % 2 !== 0))//[ 1, 3, 7 ]
//  console.log(filterFunction(radius,(number) => number % 2 == 0))//[ 2, 4, 6 ]
//  console.log(filterFunction(radius,(number) => number >= 2 ))//[ 2, 4, 6 ]

