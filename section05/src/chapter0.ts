// 인터페이스

// 객체타입
interface Person {
    name: string;
    // 읽기전용 프로퍼티
    readonly age: 10;
    // 선택적 프로퍼티
    tall?: number;
    sayHi: ()=> void;
    // 호출시그니처 사용가능
    // sayHi():void;

    // 오버로드 시그니처 사용시
    // 함수표현식을 사용하면 에러가난다.
    // sayhi2?:()=>void;
    // sayhi2?:(a:number,b:number) => void;

    //호출시그니쳐로 사용가능
    sayhi3():void;
    sayhi3(a:number,b:number):void;
}

// 객체타입과 인터페이스의 차이점
// 객체타입
// 유니온타입가능
type Type1 = number | string;
// 인터섹션타입가능
type Type2 = number & string;
// 인터페이스
// 유니온타입이나 인터섹션 타입 불가능
// 프로퍼티를 유니온,인터섹션 타입으로 만들어서 사용해야함
// interface Type3 {test:number} | string;
interface Type3_1 {test:number | string;}
// interface Type4 {test:number} & string;
interface Type4_1 {test:number& string;} 


const person: Person = {
    name:'hi',
    age: 10,
    // tall 프로퍼티 생략가능
    sayHi: function(){
        console.log('hi')
    },
    sayhi3(a?: number, b?: number) {
        if (a !== undefined && b !== undefined) {
            console.log(`두 숫자의 합: ${a + b}`);
        } else {
            console.log("인자 없음");
        }
    }
}

// readonly 프로퍼티 수정불가
// person.age = 10;

// 함수오버로딩 사용가능
person.sayhi3();
person.sayhi3(10,20)





// 추가
// 자바스크립트에서는 보통 
// 스네이크 test_name
// 카멜 testName
// 파스칼 TestName
// 이 3가지의 표기법을 주로 사용하는데

// 타입스크립트의 인터페이스 사용시 IPerson 같은 헝가리안 표기법을 사용하기도 한다.


