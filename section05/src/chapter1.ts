// 인터페이스의 확장(인터페이스 상속)
// 아래 기재한 인터페이스들은 서로간에 중복되는 프로퍼티들이 많아서 비효율적이고 (name,age)
// 슈퍼타입인 Animal 타입의 특정 프로퍼티에 수정이 생기면 서브타입인 Dog,Cat,Chicken의 프로퍼티 또한 수정해줘야하는 문제가 발생한다.
interface Animal {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    age: number;
    isBark: boolean;
}

interface Cat {
    name: string;
    age: number;
    isScratch: boolean;
}

interface Chicken {
    name: string;
    age: number;
    isFly: boolean;
}

// 그래서 이렇게 만들어줄 수 있다.
// extends 는 상속을 의미하고, 이렇게 인터페이스를 만들어주면 Animal의 프로퍼티들을 모두 가진 상태에서 isBark 프로퍼티가 추가되는 형태가된다.
interface Dog2 extends Animal {
    isBark: boolean;
    // name: string;
    // age: number;
    // isBark: boolean;
}
interface Cat2 extends Animal {
    isScratch: boolean;
    name:"CAT", // 특이한점은 상속을 받는 인터페이스에서 동일한 프로퍼티의 타입을 다시 정의할 수 있다.
    // age: string, // 하지만 다시 정의할때 새롭게 정의한 타입이 원본타입의 서브타입이여야한다.
}
interface Chicken2 extends Animal {
    isFly: boolean;
}
const dog:Dog = {
    name:'',
    age: 10,
    isBark:true,
}


// 타입별칭으로부터의 확장도 가능하다
// 인터페이스는 객체타입이면 모두 확장가능하다.
type Animal2 = {
    name: string;
    age: number;
}

interface Dog3 extends Animal2 {
    isBark: string
}

// 인터페이스 다중확장
// Dog와 Cat의 프로퍼티들을 모두 가지고 있는 DogCat 인터페이스를 만들었다.
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name:'',
    age: 10,
    isBark: true,
    isScratch: true
}