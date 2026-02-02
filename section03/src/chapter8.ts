// 제네릭함수를 안쓸경우

// 1. any타입지정
function func(value: any) {
    return value;
}
// 아래상황은 func에 어떤값을 넣든 any로 추론된다.
let num = func(10);
// 그래서 넘버가 들어온상황에 엉뚱한 메서드를 사용할 수 있게된다.
num.toUpperCase();
let bool = func (true);

// 2. unknown 타입으로 지정
function func2(value:unknown) {
    return value;
}

// value가 unknown 타입으로 추론된다.
let num2 = func2(10);
// unknown타입의 값은 어떤연산, 어떤메서드도 할수없는 전체집합이기 때문에 에러가난다.
num2.toUpperCase();


// 제네릭 함수 (제네릭 = 일반적인 , 포괄적인 = 모든타입에 두루두루 쓸수있는 범용함수)
// 함수의 인수에 따라 반환값의 타입을 가변적으로 정해줄 수 있다.
// 1. 함수명 뒤에 꺽쇠를 열고 T를 입력 
// 2. 인수의 타입을 T로 지정 
// 3. 반환값의 타입을 T로지정
function func3<T>(value: T):T {
    return value
}

let num3 = func3(10); // num3 = number
let num4 = func3(true); // num4 = boolean

// 프로그래머가 명시적을 전달 가능
// 1. 타입단언을 통한 튜플타입으로 지정
let arr = func3([1,2,3] as [number,number,number]);
// 2. T의 타입을 튜플로 지정해주기
let arr2 = func3<[number,number,number]>([1,2,3]);