// var fact = 1
// for(let i=1;i<=6;i++){
//     fact=fact*i
// }
// console.log(fact)


const arr4 = [1,2,3,4,5]
const w = arr4.reduce((a,b)=>{
    return a*b
},1)
console.log(w)