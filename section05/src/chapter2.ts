// 인터페이스(선언)합치기 Declaration Merging

// 타입별칭은 여러번 정의하면 오류가난다.
// type Person = {name:string;}
// type Person = {age:number;}

// 반면에 인터페이스는 여러번 정의해도 오류가 나지않는다.
// 그 이유는 동일한 이름으로 정의한 인터페이스들을 컴파일시 모두다 합쳐지기 때문이다.
// 이러한 현상을 선언합침이라 부른다.
interface Person2 {name:string;}
interface Person2 {age:number;}

// 동일한 프로퍼티를 다시 정의할때 타입이 안맞는경우 
// 이를 충돌이라고 표현단다.
// 인터페이스의 선언합침에서는 충돌이 허용되지않는다.
// interface Person2 {name:number}
// 인터페이스 상속과 다르게 서브타입으로 정의해도 충돌이라 판단되고, 허용되지않는다.
// interface Person2 {name:10}


const person:Person2 = {
    name:'',
    age:10
}


// 모듈보강
// 인터페이스 합치기는 보통의 개발시에는 잘 사용되지않고, 라이브러리 사용시에 타입을 보강하는 상황에서 주로 사용된다.
interface Lib {
    a: number;
    b: number
}

// 그래서 이런경우에 주로 사용한다.
// 상황에 맞춰 모듈을 보강하여 사용하는것.
interface Lib {
    c: string
}
const lib: Lib = {
    a: 1,
    b: 2,
    // 이미 타입 정의가 끝났을 경우 c프로퍼티가 Lib 인터페이스에 없기때문에 허용되지 않는다.
    c: 'hi'
}
