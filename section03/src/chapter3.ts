// unknown 타입(전체집합)
// 언노운타입은 모든값을 업캐스팅할 수 있다.(슈퍼타입임)
function unknownExam(){
    let a: unknown = 1;
    let b: unknown = 'hi';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // 다운캐스팅 불가
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}


// Never 타입
// 네버타입은 모든타입의 부분집합이다 (공집합)

function neverExam(){
    // 해당함수를 never 로 지정해주는것은 함수가 반환할 수 있는것이 없다는걸 의미한다.
    // 이함수가 반환하는 값의 종류는 공집합이다라는 의미
    function neverFunc():never {
        while(true){}
    }

    // never 타입은 모든 타입의 서브타입(부분집합)이기때문에 어떤 타입의 변수에도 값을 넣을 수 있다. (업캐스팅)
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅은 당연히 안됨
    // let never1: never = 1
}


// void
function voidExam() {
    function voidFunc():void {
        console.log('hi')
    }

    // void는 undefined의 슈퍼타입이다.
    let voidVar: void = undefined;

    // void 타입은 undefined의 슈퍼타입이기때문에 반환값으로도 지정할 수 있다.
    function voidFunc2():void {
        return undefined;
    }    
}


// any 타입 (치트키)
function anyExam (){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar :undefined;
    let neverVar: never;

    // any 타입은 다운캐스팅이 허용된다.
    // undefined는 타입계층도상 any타입의 서브타입이지만 에러가 발생하지 않는다.
    anyVar = unknownVar;
    
    undefinedVar = anyVar;

    // 예외적으로 never타입은 공집합이기 때문에 never타입에 까지 다운캐스팅 할 순 없다.
    // neverVar = anyVar
}   