// 타입 좁히기
// 조건문 등을 이용해 넓은 탕비엥서 좁은타입으로 상황에 따라 좁히는 방법

// value에 따라서 number타입이면 toFixed, valeu가 string이면 touupercase
// Date면 getTime

type Person = {
    name: string;
    age: number;
}

function func(value:number|string|Date|null|Person) {
    value; // value:number | string (union타입)
    // 그래서 이때는 에러가 난다 number, string 둘다 만족하는 메소드가 아님
    // union타입은 둘다를 만족해야한다 왜냐하면 value에 string값이 들어왔는데 tpFixed()를 쓰면 에러가 나기 때문에 둘중 하나만 만족하면 불안정한 코드이다.
    // value.toFixed();
    // value.toUpperCase();

    // 타입좁히기 
    // 어떤 변수가 특정 조건문 내부에서 더 좁은 타입임을 보장할 수 있을때는 이 변수의 타입을 더 좁은 타입으로 추론해준다.
    if (typeof value === 'number') { // 이때 이런 조건을 타입 가드라고한다. (조건으로 기술한 타입 외에는 중괄호 내부로 들어갈 수 없게 막아준다.)
        console.log(value.toFixed()) // 이때 value: number
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase())
     } // 이때는 value: string
    // } else if (typeof value === 'object'){
    //     // 이경우에는 에러가 난다.
    //     // Date 객체만이 object가 아니고 null도 object이기 때문
    //     console.log(value.getTime());
    //     console.log(value)
    // }

    // 에러발생
    // instanceof 우측의 값이 타입이 들어오면 안된다.
    // else if (value instanceof Person) {
        
    // }
    // in 연산자는 value라는 값에 age라는 프로퍼티가 존재하면 true를 반환한다.
    // value && 는 value가 null 이 아님을 밝혀준다.
    // 매개변수 value의 타입을 설정해줄때 Person타입만이 age라는 프로퍼티를 가질 수 있기 때문에 해당 조건은 person타입이라고 보장할 수 있게된다. 
    else if (value && "age" in value){
        console.log(`${value.name}은 ${value.age}살 입니당`)
    }
    
    // if (value instanceof Date) {
    //     // instanceof 는 왼쪽의 값이 기재한 객체가 맞냐 확인하는 연산이다.
    //     // 이 경우에는 value가 Date인 값으로 잘 좁혀지기 때문에 에러가 발생하지 않는다.
    //     console.log(value.getTime())
    // }
}