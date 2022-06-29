// RestOperator
// Rest Used to take list of function arguments and convert them into an Array


const restOperators=(...args) =>{
    return args.filter((el)=>el === 3)
}
console.log(restOperators(1,2,3,4,5,6,7))
