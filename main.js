// console.log("Hello world");
//ES5
// var a  =10
// console.log(a);
//ES6
// const b =5;
// let c=4;
// console.log(c++);

//++ --
// b=10;
// console.log(b++);
// c=100
// console.log(c++);

//типы данные
// const number=10
// console.log(typeof number);
// const string="Hello";
// console.log( typeof string);
// const boolTrue=true;
// console.log(boolTrue);
// const boolFalse=false;
// console.log (  typeof boolFalse);

// const obj={name: 'Alex'}
// console.log( typeof obj);

// const array=[1,2,3,{name: 'Alex'}]
// console.log(  array);


//----------------------------------------------
//object
// const obj={
//     name: ' Alex'
//      age: 18

// }
// console.log( obj);
// console.log(obj.name, obj.age)

// const user={
//     login:'Alex',
//     password:'123',
//     username:'alex_01',
//     followers:[
//         {
//           username:'IRINA'  ,
//           age:22
//         },
//         {
//             username:'maria',
//             age:28
//         }
//     ],
//     avatart:'image'
// }
// console.log(user);
// console.log("username:"+ user.username);
// console.log("followers:"+ user.follewers);

//оператор
// const num1=15;
// const num2=15;

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1/ num2);
// console.log(num1*num2);

// console.log(2*(num1+num2) -num1);

// let message='HELLO ,'+','dear','+'Alex'
// console.log(message);
// let message1 =`hello, dear $ {'Alex'}`
// console.log(message1);


//-----------------------------------
// let size='M';
// let euSize=0;

// if(size === '5'){
//     euSize=36;
// }else if(size ==='M'){
//     euSize=40;
// }else if(size ==='L'){
//     euSize=48;
// }else{
//     euSize=-1
// }
// console.log('eu size' ,euSize);

//switch case
// let size='S'

// switch (size) {
    // case 'S':
//         console.log('Small');
//         break;
//         case  'M':
//             console.log('Medium');
//             break;
//             case 'L':
//                 console.log(Large);
//                 break;
//     default:
//         break;



const username = prompt("Введите имя");
const lastname = prompt("Введите фамилию");

alert("Здраствуйте " + username);


const num1 = Number(prompt("Введите первое число"))
const num2= Number(prompt("Введите второе число"))

if (num1<num2){
    alert(num2 +" больше " + num1)
}else if(num1===num2){
    alert(" числа равны. ")
}else if (num1 > num2){
    alert (num1 + " больше " + num2)
}

// const a= prompt("Укажите цвет:красный,оранжевый,зеленый")
// const co=[
//     {name:red=("красный")},
//     {name:orange=("оранжевый")},
//     {name:green=("зеленый")}
// ];

// let a;

let a = prompt('Specify color:red,orange,green')

switch(a) {
    case 'red':
        alert ("Cтоять!");
        case 'orange':
            alert("Подожди");
            case 'green':
                alert("Можно идти");
          default:

}