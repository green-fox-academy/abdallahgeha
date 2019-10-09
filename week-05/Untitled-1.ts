let array = [0, 2, 3, 2, 2, 4]


let array2 = array.filter(function (e) {
  return (e > 2)
})

let array3 = array.some(function (e) {
  return (e > 2)
})


console.log(array3)