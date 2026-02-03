// 제네릭인터페이스
// 반드시 사용시에 타입을 직접 지정해주어야한다.
// <K,V> 제네릭에서 K,V 같은 애들을 타입 변수라 한다 (= 타입파라미터 = 제네릭타입변수 = 제네릭타입파라미터)
interface KeyPair<K, V>{
    key: K,
    value: V
}

let keyPair:KeyPair<string, number> = {
    key: "key",
    value: 0,
}


let keyPair2:KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
}

// 인덱스 시그니처
interface NumberMap {
    [key:string]: number;
}
let numberMap1 : NumberMap = {
    key: 1234,
    key2: 1235
}

interface Map<V> {
    [key: string]: V;
}

let stringMap:Map<string> = {
    key:"value"
}

let numberMap:Map<number> = {
    key:10
}

// 제네릭 타입별칠
type Map2<V> = {
    [key: string] : V;
}

let stringMap2 : Map2<string> = {
    key: "hi"
}


// 제네릭 인터페이스 활용예시
// 유저 관리 프로그램 ( 유저구분 : 학생유저 / 개발자유저)
interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User {
    name: string;
    profile: Student | Developer;
}

function goToScholl(user:User) {
    if(user.profile.type !== 'student') {
        console.log("잘못오셨습니다.")
        return;
    }

    const school = user.profile.school;
    console.log(`${school}로 등교완료`);
}

const developerUser: User = {
    name: "heesu",
    profile: {
        type:"developer",
        skill:"Ts"
    }
}

const studentUser: User = {
    name: "hihi",
    profile: {
        type:"student",
        school: "ggSchool"
    }
}


// goToScholl같이 특정프로퍼티에 따라 달라져야하는 함수들이 계속 생긴다면 개발할때 불편하겠다.
// 개선코드
interface User2<T> {
    name: string;
    profile: T;
}

// 타입좁히기 없어도됨
function goToScholl2(user:User2<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교완료`);
}
// User2의 profile 프로퍼티에 Student타입을 넣어줘서
// developerUser2는 profile.school 이 없어서 에러난다.
goToScholl2(developerUser2)

const developerUser2: User2<Developer> = {
    name: "heesu",
    profile: {
        type:"developer",
        skill:"Ts"
    }
}

const studentUser2: User2<Student> = {
    name: "hihi",
    profile: {
        type:"student",
        school: "ggSchool"
    }
}