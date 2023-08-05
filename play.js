const product= (a,b) => a*b;

console.log(product(2,3))


const person= {
  name:'Shubham',
  age:23,
  greet(){
    console.log('I am '+ this.name);
  }
}
person.greet();