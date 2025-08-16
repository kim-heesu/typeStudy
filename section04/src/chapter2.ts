// 함수타입의 호환성
// 특정 함수타입을 다른함수타입으로 취급해도 괜찮은가? 
// 함수타입의 호환성은 두가지 조건을 모두 만족해야만한다.
// 1. 반환값의 타입이 호환되는가?
// 2. 매개변수의 타입이 호환되는가? 


// 1. 반환값의 타입이 호환되는가?
type A = () => number; // 반환값의 타입 = number
type B = () => 10; //반환값의 타입 = 넘버리터럴타입10

let a:A = () => 10;
let b:B = () => 10;

a = b; // 가능 / number에 넘버리터럴 10을 할당 (업캐스팅)
// b = a // 불가능 /  넘버리터럴10타입에 number타입을 할당(다운캐스팅)


// 2. 매개변수가 호환되는가
// 2_1. 매개변수의 개수가 같을 때 
// 매개변수를 기준으로 판단할때는 업캐스팅이 불가능하고, 다운캐스팅만 가능해진다.
type C = (value:number) => void;
type D = (value: number) => void;
type E = (value:10) => void;

let c: C = (value) => {};
let d: D = (value) => {};
let e: E = (value) => {};

// 가능한 케이스 두개 함수의 매개변수 개수가 같다
c = d;
d = c;

// 불가능한 케이스
// 매개변수의 호환성을 판단할때는 반대로 업캐스팅이 불가하고, 다운캐스팅이 가능하다
// 
e = d; // e의 매개변수는 10리터럴타입 , d의 매개변수는 넘버타입(업캐스팅)
// d = e; // d의 매개변수는 넘버타입, e의 매개변수는 10리터럴타입(다운캐스팅)

// 예시
type Animal = { // 슈퍼타입
    name: string;
}
type Dog = { // 서브타입
    name: string;
    color: string;
}

let animalFunc= (animal: Animal) => {
    console.log(animal.name);
}
let dogFunc = (dog:Dog) => {
    console.log(dog.name)
    console.log(dog.color)
}

// 슈퍼타입에 서브타입을 할당(업캐스팅)
// animalFunc = dogFunc;
// 이말은곧 아래와 같게된다.
// animalFunc에 dogFunc를 넣었으니 매개변수는 animalFunc의 타입을 따르게되고,
// 반환값은 dogFunc의 값이 들어간다.
let testFunc = (animal:Animal) => {
    console.log(animal.name)
    // console.log(animal.color)
}

// 반대로 이경우는 가능
// 서브타입에 슈퍼타입을 할당(다운캐스팅)
dogFunc = animalFunc ;

let testFunc2 = (dog:Dog) => {
    console.log(dog.name)
}

// 2_2. 매개변수의 개수가 다를때
// 할당하려고 하는 쪽의 함수의 타입에 매개변수의 개수가 더 적을때만 허용된다.
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;

// + 매개변수의 타입자체가 다르면 당연히 안된다.
// let func3: Func2 = (a='hi') => {};