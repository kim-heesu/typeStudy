// 맵드타입(MappedType)
// 기존의 객체타입을 기반으로 새로운 객체 타입을 만드는 문법
// 맵드타입은 인터페이스에서는 사용할 수 없고, 타입별칭으로만 사용할 수 있다.
// 객체탕비을 조작하는 기능

interface User {
    id: number;
    name: string;
    age:number;
}

// 유저정보를 불러오는기능
function fetchUser():User {
    /// ... 기능
    return {
        id: 1,
        name: "heesu",
        age: 10
    }
}

// 유저정보를 수정하는기능
function updateUser(user: User) {
    /// ... 수정하는기능
}

//만약 업데이트하는 기능을 사용했을때, 특정 프로퍼티만 사용하고 싶다면? 
// 아래와 같이 작성할 경우 필수 프로퍼티가 충족되지않아 에러가 발생한다.
updateUser({
    age:25
})

// 타입에러를 피하기 위해 아래와 같이 작성하면 비효율적이다.
updateUser({
    id: 1,
    name: "heesu",
    age: 11
})

// 이것만을 위한 타입을 만드는것도 이상하다.
interface PartiaUser {
    id?: number;
    name?: string;
    age?:number;
}
function upDateUser2(user:PartiaUser) {
    /// 수정하는기능
}
upDateUser2({
    age:100
})

// 이떄 사용할 수 있는 맵드타입
// 인덱스 시그니쳐와 마찬가지로 [key in 'id'|'name'|'age'] 부분은 key가 어떤것이 올 수 있는지 정의하는 부분
// User[key] 이 프로퍼티의 키들이 어떤 밸류타입을 가질것인지 정의하는 부분

// 그래서 이 문법의 의미는 key는 id, name, age 프로퍼티를 가지게 되고
// value는 인덱스드엑세스 타입이다.
// 즉 User의 key가 id일때는 value의 타입이 User["id"] -> number
// User의 key가 name일때는 value의 타입이 User["name"] -> string
// User의 key가 age일때는 value의 타입이 User["age"] -> number
// 가 된다.
type PartiaUser3 = {
    [key in 'id'|'name'|'age'] : User[key];
}

// 그래서 이제 앞서 원했던 것처럼 모든 프로퍼티를 선택적 프로퍼티로 만들려면 아래와 같이 사용할 수 있다.
type PartiaUser4 = {
    [key in 'id'|'name'|'age']? : User[key];
}

// 이런식으로 변형도 가능하다
// 프로퍼티의 키는 그대로 가져오면서 value의 타입만 boolean으로 바꾸는방법
type BooleanUser = {
    [key in 'id'|'name'|'age'] : boolean;
}
// keyof 연산자를 사용해 더 간결하게 표현할 수 있다.
type BooleanUser2 ={
    [key in keyof User]: boolean;
}

// 리드온리로 만들기
type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}