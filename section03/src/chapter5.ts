// 타입 추론

// a에 10 , number타입의 값으로 초기화되었기때문에 타입스크립트는 a를 number타입이라고 추론한다. (타입추론기준 = 변수의 초기값)
// 일반적으로 변수를생성하고 초기화하는 과정에서는 타입을 잘 추론해준다.

let a = 10; // a: number
let b = 'hi'; // b: string
let c = {
    id: 1, //id: number
    name: 'heesu', // name: string 
    profile: {
        nickname: 'soo'
    },
    ect: ['ㅎㅎ',1] //ect: (string|number) []
}
let {id, name, profile} = c; // id:number, name: string ...
let [one, two, three] = [1,'hi',true]; // one: number, two: string ...

function func2(msg = 'hi'){ // msg:string 파라메터의 기본값이 있으면 기본값을 기준으로 타입을 추론한다.
    return 'hi' // func2(): string 함수는 반환값을 기준으로 타입을 추론한다.
}

// function func(param) { 
//     // 이 경우 파라메터로 어떤 값이 들어올지 알 수 없어서 타입추론이 불가하다.
// }



// 허거덩스한 상황

// 초기값을 지정하지않으면 해당변수의 타입은 any가 된다.
// 변수에 따라 타입이 계속 바뀌는걸 any타입의 진화라고 한다 
let d; // 여기선 any 타입

// 근데 만약 처음부터 any타입으로 지정해주면 
// 밑에서도 모두 any 타입이 된다. 이건 진화가 아님
let d2:any;

d = 10 // 여기부터 number타입
d.toFixed() // 가능
// d.toUpperCase() // 숫자타입이니까 불가 

d= 'hi' // 여기부터는 string타입이 됨
// d.toFixed() // string타입이라 불가 
d.toUpperCase() // 가능해짐


// const 로 변수를 선언하면 리터럴타입이 된다 
// num은 number타입이 아니고 10 넘버리터럴타입임
// 왜냐면 const는 상수니까~~
const num = 10;

// const 로 선언한 num 말고 let으로 선언했을때는 num2 변수에 다른 값들을 넣을 수 있다. (좀 더 범용적으로 사용할 수 있음)
// 이를 타입 넓히기라고 한다.
let num2 = 10;