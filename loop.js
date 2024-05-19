let arr =["Thor" , "Ironman" , "Sahrukhan" , "Ajay devgan"]

for(let i=0 ; i<arr.length ; i++){

console.log(arr[i])

}
for (const iterator of arr) {
    console.log(iterator)
    
}

let cities =["Delhi","Noida", "Mumbai" , "pune" ,"hydrabad" , "Patna"]

for (const city of cities) {
    console.log(city)
    console.log(city.toUpperCase())
    
}
 //forEach loop
let a = [1,2,3,5,6 ,9,11]

a.forEach((val , index)=>{

  console.log(val , index)

})


//Map

let arr1 =[1,13,5,6,11]
let newArr = arr1.map((val)=>{

   return val**2

})

console.log(newArr)

// filter

const greaterThanSeven = (e)=>{

   if(e>7){

  return true;
   }
   return false;

}
console.log(a.filter(greaterThanSeven))


// Reduce

let arr2 = [1,2,3,4,5,6]

const red = (a,b) =>{

     return a+b
}

console.log(arr2.reduce(red))