// any
// 특정 변수의 탕비을 우리가 확실히 모를때

// let anyVar = 10;
// anyVar = 'hello'; // 초기값이 10 숫자타입이기때문에 문자열을 넣었기 때문에 오류가 난다

let anyVar:any = 10;
// 제약없이 사용가능
anyVar = 'hello'; 
anyVar = true;
anyVar = () => {};

// 컴파일시 런타입에러가 발생한다 (마지막으로 넣은게 함수이기 때문)
// 타입검사를 안하는것과 마찬가지이기 때문에 타입스크립트를 안쓰는것과 같아지는 의미
anyVar.toUpperCase();

// let num: number = 10;
// num = anyVar; // 심지어 넘버타입으로 선언한 변수에도 넣을 수 있다.

// unknown

let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = ()=>{};

let num: number = 10;

// any타입과 비슷하지만 숫자로 선언한 num변수에 anyVar 를 넣은것처럼 사용할수없다.
// 모든타입에 unknown타입은 넣을 수가 없다.
// num = unknownVar;

// 특정 타입에만 사용할 수 있는 함수들도 사용할 수 없다. (+,-,*,/ 같은 연산도 포함)
// unknownVar.toUpperCase();

// 타입오브 연산자를 이용해 타입을 명확히 밝혀주었을 때만 사용할 수 있다.
if (typeof unknownVar === 'number'){
    num= unknownVar
}