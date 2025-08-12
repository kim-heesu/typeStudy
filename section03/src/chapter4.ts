// 대수타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합타입, 교집합 타입이 존재


// 합집합 - Union타입
// string과 number의 합집합 타입(string number 유니온타입)
let a: string | number; // 무한대로 타입을 추가할수있다.
a = 1;
a = 'hi';

let arr: (number | string)[] = [1, 'hi'];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person

// Dog type의 프로퍼티를 갖는 객체
let union1 : Union1 = {
    name: '',
    color: ''
}

// Person type의 프로퍼티를 갖는객체
let union2 : Union1 = {
    name: '',
    language: '',
}

// Dog, Person type의 프로퍼티를 모두 갖는 객체 (교집합에 있는 객체)
let union3: Union1 = {
    name: '',
    color: '',
    language: '',
}

// Dog, Person 두 타입이 공통적으로 가지고있는 프로퍼티만 넣었을때는 에러...
// union4는 Dog타입에는 name,color 프로퍼티가 있는데 여기에도 해당이안되고
// Person 타입에는 name, language 프로퍼티가 있는데 여기에도 해당이 안된다.
// let union4: Union1 = {
//     name:''
// }



/// 교집합타입 - intersection 타입
// number와 string의 교집합 타입 
// variable 은 never타입을 의미한다(number와 string의 교집합은 없으니까(공집합)) 
let variable: number & string;

// 일반적인 타입에서는 교집합이 거의 없기때문에 객체타입에서 많이 사용된다.

type Dog2 = {
    name: string;
    color: string;
}

type Person2 = {
    name: string;
    language: string;
}

type intersection = Dog & Person;

// 두개의 타입을 모두 만족하는 값들이 들어와야 에러가 안난다.
// 하나라도 없으면 에러남
let intersection1: intersection = {
    name: '',
    color: '',
    language: '',
}
