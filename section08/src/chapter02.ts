// keyof 연산자
// 객체타입에 적용하는 연산자

interface Person {
    name: string;
    age:number
}

// key의 타입을 string 으로 지정하면 
// getPropertyKey(person,"name2") 처럼 없는 Person타입에 없는 프로퍼티를 지정해주어도 허용되기때문에 에러가 난다.
// 해결방법은 아래처럼 key의 타입을 유니온타입으로 설정한다
// 이방법은 프로퍼티의 개수가 늘어나면 비효율적이고, Person객체에 새로운 프로퍼티가 추가되거나 수정되면 그때마다 이부분도 같이 수정해줘야하는 번거로움이 있다.
// function getPropertyKey(person: Person, key: "name" | "age")

function getPropertyKey(person: Person, key: string){
    return person[key]
}

// 두번째 방법은 keyof 연산자를 사용하는 방법이다
// keyof는 오른쪽에 있는 객체타입으로부터(Person) 모든 키를 union타입으로 추출한다.
function getPropertyKey2(person:Person, key: keyof Person){
    return person[key]
}
const person: Person = {
    name: "name22",
    age: 22
}

getPropertyKey(person, "name");


// typeof 연산자와 함께 사용
// typeof연산자를 타입을 정의할때 사용하면?
// 아래와 같이 사용했을때 person2객체의 타입을 추론하여 Person2타입의 프로퍼티로 지정할 수 있다.
type Person2 = typeof person2;
const person2 = {
    name: "heesu",
    age: 10
}
// 아래와 같이 사용하면 이런의미가된다.
// typeof person2 
// type person2 = {
//     name: string;
//     age: number
// }
// keyof typeof person2
// person2의 모든키를 유니온타입으로 추출
// "name" | "age"
function getPropertyKey3(person:Person, key: keyof typeof person2) {
    return person[key];
}