// // ** null, undefined 데이터 타입 **
// const something = null;
// const none_ = undefined;
//     // null은 절대 자연적으로 발생하지 않는다. 
//     // null은 우리가 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 사용한다.
//     // null은 "비어있다"는 것을 의도적으로 표현하는 것.
//     // undefined는 변수는 존재하는데, 그 안에 값이 할당되지 않은 것. 
//     // => 메모리에, null은 아무것도 없는 무언가로 채워진 것이고, undefined는 아예 채워지지 않은 상태.


// // ** array 객체 **
// const arr = [1,2,3,4,5,6];
// console.log(arr);
// arr.push(7);
// console.log(arr);
// console.log(arr[6]);


// *** object(객체) ***
// 우리는 이미 내장되어 있는 객체를 사용할 수도 있고, 직접 객체를 만들 수도 있다. Like function
// 기본형 :
// 데이터 타입 변수명 = {속성 : 속성값, 속성 : 속성값, ...};
// const player = {
//     name : "hojun",
//     point : 10,
//     handsome : true,
//     fat : false,
// };
// console.log(player.name); // 일반적으로 객체의 속성을 사용하듯 쓸 수도 있고,
// console.log(player["name"]); // 이렇게 ["속성이름"]으로 사용할 수도 있다.

// console.log(player);
// player.name = "hohoho"; 
// console.log(player);
// // const인데 어떻게 속성값을 바꿀 수 있나?? 
// // -> 속성값을 바꾸는 것은 object(객체) 안에 있는 속성을 바꾸는 것 
// //  const는 변수 전체를 하나의 값으로 바꾸는 것이 안되는 것이다.
// // 즉, const 안에 있는 무언가를 바꾸는 것은 전혀 문제가 없다.
// // player = false; => 이것 처럼 const 변수 전체를 하나의 값으로 바꾸려는 것은 불가능

// player.lastName = "RYU"; // 그래서 새로운 속성을 추가하는 것도 가능하다!
// player.point += 10; // 이렇게 값을 변경하는 것도 당연히 가능
// console.log(player);

// // 또한 속성(프로퍼티)뿐만 아니라 메서드도 만들 수 있다!
// const intro = {
//     name : "hojun",
//     age : 20,
//     sayHello : () => console.log("Hello!")
// };
// intro.sayHello();
 
// const caculator = {
//     add : (a,b) => console.log(a+b),
//     minus : (a,b) => console.log(a-b),
//     divide : (a,b) => console.log(a/b),
//     power : (a,b) => console.log(a**b), 
// };
// caculator.add(8,3);
// caculator.divide(8,3);
// caculator.minus(8,3);
// caculator.power(8,3);

// // ** isNaN() 함수 ** => 매개변수가 NaN인지 판별해서 불리언 값을 반환
// const age = parseInt(prompt("나이를 입력하세요."));
// console.log(isNaN(age));