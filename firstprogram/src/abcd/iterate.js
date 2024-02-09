// let data = {
//     name : "veer",
//     age : 23,
//     city : "jodhpur"
// }

// for(let i in data){
//     console.log(data[i])
// };

let data = {
    name : "veer",
    age : 23,
    city : "jodhpur"
}

for(let i of Object.keys(data)){
    console.log(data[i])
};