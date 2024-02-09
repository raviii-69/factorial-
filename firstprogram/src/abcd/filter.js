// const arr2 = [1,2,3,4,5]

// let b =arr2.filter((e)=>{
//     return e%2 === 0

// })
// console.log(b)
// console.log(arr2 )


const arr3 = [1,2,3,4,5,6,7,8,9]

for(let i=0;i<arr3.length;i++){
    if (arr3[i] %2 === 0){
        console.log(arr3[i])
    }
    // else if(arr3[i] %2 !== 0){
    //     console.log(arr3[i])
    // }
}
console.log()

for(let i=0;i<arr3.length;i++){
    if (arr3[i] %2 === 1){
        console.log(arr3[i])
    }
}