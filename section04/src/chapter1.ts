//함수타입표현식 function type expression
// 호출시그니처, 함수시그니처라고도 부르는데 공식명치은 함수타입표현식이다.
// 함수의 매개변수,반환값에 하나하나 타입을 지정하지않고 
// 타입별칭을 이용해 함수의 타입을 별도로 정의할수있다.

// a의 타입 number, b의 타입 number, 반환값의 타입 number라는 뜻
const add = (a:number, b:number):number => a+b;

// 비슷한타입을 여러개만들때 유용하게 쓸 수 있다.
type Operation = (a:number, b:number) => number;
const add2:Operation = (a,b) => a+b;
const sub:Operation = (a,b) => a-b;
const multiply:Operation = (a,b) => a*b;
const divide:Operation = (a,b) => a/b

// 타입별칭을 지정하지 않고 이런식으로도 쓸 수 있긴하다.
const add3:(a:number, b:number) => number = (a, b) => a+b;

// 함수타입표현식을 사용할때는 매개변수의 개수와 타입을 모두 맞춰줘야한다.
// 개수안맞음
// const add4:Operation = (a,b,c) => a+b;

// 타입안맞음
// const add5:Operation = (a,b) => {console.log(a.toUpperCase())}



// 호출시그니처(콜 시그니처)
// 자바스크립트의 함수고 객체이기때문에
type Operation2 = {
    (a:number, b:number): number;
}
const add6:Operation2 = (a,b) => a+b;
const sub2:Operation2 = (a,b) => a-b;

// 하이브리드타입
// 이렇게 만드는 타입을 함수로도쓰고, 객체로도 쓸수있다고해서 하이브리드 타입이라고 부른다.
type Operation3 = {
    (a:number, b:number): number;
    name:string;
}

const add7:Operation3 = (a,b) => a+b;
// add7();
// 점표기법으로도 접근할 수 있다.
add7.name
