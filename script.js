// 1. Anonymous function & IIFE
//a. Print odd numbers in an array
// Anonymous function
var oddresult=[];
var odd=function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
      oddresult.push(arr[i])
    }
  }
  return oddresult;
}
console.log(odd([1,2,3,4,5,6]));
  
//IIFE Function
var oddresult1=[];
(function (arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
      oddresult1.push(arr[i])
    }
  }
  console.log(oddresult1);
})([6,7,8,9,10,11,12]);

//arrow function  
var oddresult2=[];
var odd1=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
      oddresult2.push(arr[i])
    }
  }
  return oddresult2;
}
console.log(odd1([12,13,14,15,16,17,18,19,20])); 


// b. Convert all the strings to title caps in a string array
// Anonymous function
var sentence = function(str){
  str = str.toLowerCase().split(" ");
  for(var i=0;i<str.length;i++){
    str[i] = str[i].charAt(0).toUpperCase()+ str[i].slice(1);
  }
  return str.join(" ");
}
console.log(sentence("today IS a gOOD DaY"));

//IIFE Function
(function(str1){
  str1 = str1.toLowerCase().split(" ");
  for(var i=0;i<str1.length;i++){
    str1[i] = str1[i].charAt(0).toUpperCase()+ str1[i].slice(1);
  }
  console.log(str1.join(" "));
})("today IS a bAD DaY");

//arrow function 
var sentence1 = (str2)=>{
  str2 = str2.toLowerCase().split(" ");
  for(var i=0;i<str2.length;i++){
    str2[i]=str2[i].charAt(0).toUpperCase()+str2[i].slice(1);
  }
  return str2.join(" ");
}
console.log(sentence1("today IS a haPpY DaY"));


//c.Sum of all numbers in an array
// Anonymous function
var sum=0;
var sumres=function(arr){
  for(var i=0;i<arr.length;i++){
    sum = sum+arr[i];
  }
  return sum;
}
console.log(sumres([1,2,3,4,5]));

//IIFE Function
var sum1=0;
(function(arr){
  for(var i=0;i<arr.length;i++){
    sum1 = sum1+arr[i];
  }
  console.log(sum1);
})([1,2,3,4,5,6]);

//arrow function 
var sum2=0;
var sumres1=(arr)=>{
  for(var i=0;i<arr.length;i++){
    sum2 = sum2+arr[i];
  }
  return sum2;
}
console.log(sumres1([1,2,3,4,5,6,7,8,9,10]));


//d.Return all the prime numbers in an array
//annonymous function
var primeresult=[];
var prime=function(arr){
  for(var i=0;i<arr.length;i++){
    var count =0;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j===0){
        count = 1;
      }
    }
    if(count===0){
      primeresult.push(arr[i]);
    }
  }
  return primeresult;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]));

//IIFE Function
var primeresult1=[];
(function(arr){
  for(var i=0;i<arr.length;i++){
    var count =0;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j===0){
        count = 1;
      }
    }
    if(count===0){
      primeresult1.push(arr[i]);
    }
  }
  console.log(primeresult1);
})([1,2,3,4,5]);

//arrow function
var primeresult3=[];
var prime1=(arr)=>{
  for(var i=0;i<arr.length;i++){
    var count =0;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j===0){
        count = 1;
      }
    }
    if(count===0){
      primeresult3.push(arr[i]);
    }
  }
  return primeresult3;
}
console.log(prime1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));


//e.Return all the palindromes in an array
// Anonymous function
var palinresult =[];
var palindrome = function(arr){
  for(var i=0;i<arr.length;i++){
    var data = arr[i].split("").reverse().join("");
    if(data===arr[i]){
      palinresult.push(arr[i]);
    }
  }
  return palinresult;
}
console.log(palindrome(["level","abc","mom","dad","hello"]));

//IIFE Function
var palinresult1 = [];
(function(arr){
  for(var i=0;i<arr.length;i++){
    var data1 = arr[i].split("").reverse().join("");
    if(data1===arr[i]){
      palinresult1.push(arr[i]);
    }
  }
  console.log(palinresult1);
})(["abc","mom","dad","hello","racecar"])

//arrow function 
var palinresult2 =[];
var palindrome1 = (arr)=>{
  for(var i=0;i<arr.length;i++){
    var data = arr[i].split("").reverse().join("");
    if(data===arr[i]){
      palinresult2.push(arr[i]);
    }
  }
  return palinresult2;
}
console.log(palindrome1(["anna","abc","mom","dad","hello"]));


//f.Return median of two sorted arrays of the same size
//annonymous function
var median=function(arr1,arr2){
  let arr = [...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let n=arr.length;
  if(n%2===0){
    return((arr[n/2]+arr[n-1]/2)/2);
  }
  else{
    return(arr[Math.floor(n/2)]);
  }
}
console.log(median([1,2,3],[4,5,6]))

//IIFE function
let arr3=[1,2,3,4,5];
let arr4=[4,5,6,7,8];
(function(arr3,arr4){
  let arrres = [...arr3,...arr4];
  arrres.sort((a,b)=>a-b);
  let n=arrres.length;
  if(n%2===0){
    console.log((arrres[n/2]+arrres[n-1]/2)/2);
  }
  else{
    console.log(arrres[Math.floor(n/2)]);
  }
})(arr3,arr4)


//g.Remove duplicates from an array
//annonymous function
 var duplicate=function(arr){
    const final = arr.filter((ele,item)=>arr.indexOf(ele)===item)
    return final;
 }
 console.log(duplicate([1,1,2,5,5,2,3,8,6,6,4]));

 //IIFE Function
 (function(arr){
  const final1 = arr.filter((ele,item)=>arr.indexOf(ele)===item);
  console.log(final1);
})([2,5,5,2,3,8,6,6,4]);


//h.Rotate an array by k times
//annonymous function
var Rotate=function(arr,K){
  for(var i=0;i<K;i++){
    arr.push(arr[i]);
  }
  for(var i=0;i<K;i++){
    arr.shift()
  }
  return arr;
}
console.log(Rotate([1,2,3,4,5],3));

//IIFE function
(function(arr,K){
  for(var i=0;i<K;i++){
    arr.push(arr[i]);
  }
  for(var i=0;i<K;i++){
    arr.shift()
  }
  console.log(arr);
})([1,2,3,4,5],4);
