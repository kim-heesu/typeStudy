// void
// void > 공허 > 아무것도 없다
// void 다입은 ㄹ아무것도 없음을 의미한다.

// 함수의 반환값에도 타입을 지정할 수 있다.
// func1의 반환값은 문자열
function func1(): string {
    return "hello"
}

// 리턴값이 없는 함수에는 void를 지정할 수 있다.
function func2(): void {
    console.log('hello');
}

// void타입에는 undefined만 담을 수 있다.
// let a:void;
// a = 1;
// a ='hi';
// a = {};
a = undefined
// strictNullChecks 옵션을 false로 지정해주면 null도 가능
// a = null;


// never 
// 존재하지안흔 불가능한 타입을 갖는 타입

// 무한루프를 돌기때문에 아무런값도 반환할 수 없다.
function func4(): never{
    while (true) {}
}
// 의도적으로 오류를 발생시키는 함수
function func5 (): never {
    throw new Error();
}

let a:never;
let anyVar: any;

// never타입은 어떤값에도 담을 수 없다.
let b:void;
// a = 1;
// a ='hi';
// a = {};
a = undefined
// strictNullChecks 옵션을 false 지정해주어도 안된다.
// a = null;
// any타입도 못넣음
a = anyVar