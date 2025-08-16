// 함수타입정의

// 함수를 설명하는 가장 좋은방법= 어떤매개변수를 받고, 어떤 결과값을 반환하는지
// 타입스크립트에서는 어떤 ;타입의' 매개변수를 받고,
// 어떤'타입의' 결과를 반환하는지

// func 는 매개변수 a,b 는 모두 넘버타입이며, 반환값또한 넘버타입이다
function func(a:number, b:number):number {
    return a + b;
}

// 화살표함수의 정의
const add = (a:number,b:number):number => a+b;
// 만약 결과값의 타입을 지정해주지 않아도 반환값을 기준으로 자동으로 추론해준다.
const add3 = (a:number,b:number) => a+b;


// 함수의 매개변수

// 1. 주의의사항
// 기본값과 다른타입으로 타입을 지정해주면 오류가난다
// 매개변수 name:number = 'heesu'
function instro(name = 'heesu', tall:number) {
    console.log(`name: ${name}`);
    console.log(`tall: ${tall}`)
}

// 2. 주의사항
// 매개변수의 타입과 다른 타입의 인수를 전달하면 오류가난다
// instro(1);

// 3. 주의사항
// 인수가 부족한경우
// instro('heesu')

// 생략하고 싶은경우에는 매개변수에 ? 를 붙여 선택적 프로퍼티로 만들어줌
function instro2(name = 'heesu', tall?:number) {
    console.log(`name: ${name}`);
    // 하지만 선택적 프로퍼티에 어떤 연산을 하려고하면 에러가뜬다.
    // tall은 undefined 수도있는데, undefined에 + 10 연산은 불가하기때문이다.
    // console.log(`tall: ${tall + 10}`)

    // 타입좁히기로 에러 해결가능
    if(typeof tall ==='number') {
       console.log(`tall: ${tall + 10}`)
    }
}

// 선택적 매개변수는 필수매개변수 뒤에 오면안된다.
// function test1 (name = 'heesu', tall?:number, age:number) {

// }

function test2 (name = 'heesu',age:number,tall?:number, ) {

}

// rest파라미터
// ...rest는 가변적길이의 인수들을 묶어 배열로 전달한다.
// 배열의 길이를 고정하고싶으면 튜플타입으로 전달
// ...rest:[number,number,number]
function getSum(...rest:number[]){
    let sum = 0;
    rest.forEach((item)=>{
        sum+=item
    })
    return sum;
}
getSum(1,2,3,4,5)
getSum(1,2,3)
