
// const sum = (arr) => {
//   //Assignment to constant variable//
// //   const total = 0;
// let total = 0;
//   arr.forEach((x) => {
//     total += x;
//   })
//   return total
// }

// // concatenate two arrays
// const concat = (arr1, arr2) => {
//   return [...arr1, ...arr2]
// }

// exports.sum = sum
// exports.concat = concat



module.exports ={
   sum: (arr) => {
      //Assignment to constant variable//
    //   const total = 0;
    let total = 0;
      arr.forEach((x) => {
        total += x;
      })
      return total
    },
    
    // concatenate two arrays
     concat: (arr1, arr2) => {
      return [...arr1, ...arr2]
    }
}