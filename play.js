// const product= (a,b) => a*b;

// console.log(product(2,3))


// const person= {
//   name:'Shubham',
//   age:23,
//   greet(){
//     console.log('I am '+ this.name);
//   }
// }
// person.greet();

//Arrays , spread and rest operators

// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// console.log(array.map(obj => {
//     if(obj===' ') return 'empty string';

//     return obj;
// }))

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
// let { key1, key3} = { ...obj1}
// key1=56;
// console.log(key1, key3)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
// let { key1, key3} = obj1


// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)


//  const arr1 = ['value1', 'value2']
//  const [ val1, val2 ] = arr1

//  console.log(val1)

//  console.log(val2)

const promise1= new Promise((res)=> res('a'));
const promise2= new Promise((res)=> res('b'));

const promise3= new Promise((res)=>
{
    setTimeout(() => res('c'), 3000)
})
const promise4= new Promise((res)=>
{
    setTimeout(() => res('d'), 0)
})
const promise5= new Promise((res)=> res('e'));

Promise.all([promise1,promise2, promise3,promise4,promise5]).then(values => console.log(values))

















