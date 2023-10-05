const radius = [1,2,3,4,6,7]

function area(radius) {
 let a = []
  for(let i  = 0; i< radius.length; i++){
   a.push( Math.PI * radius[i] * radius[i])
  }
  return a
}

function circumference(radius) {
 let a = []
  for(let i  = 0; i< radius.length; i++){
    a = [...a, 2 * Math.PI * radius[i]]
  }
  return a
}
function diameter(radius) {
 let a = []
  for(let i  = 0; i< radius.length; i++){
    a = [...a, Math.PI * radius[i] * radius[i]]
  }
  return a
}

function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    filteredArr.push(arr[i])
    callback(arr[i]) ? arr[i] : null;
  }
  return filteredArr;
}

console.log(filterFunction(radius, (data) =>{
  return  data % 2 != 0
}))