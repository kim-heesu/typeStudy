// 객체타입
// 타입스크립트는 object 같은 단순한 이름이 아니라 객체의 구조를 기준으로 타입을 정의한다.
// 이러한 특징을 구조적 type 시스템이라고 한다. = property based type system(프로퍼티 기반 타입시스템)
// C,java와 같이 프로퍼티의 이름을 기준으로 타입을 지정하는것은 명목적 타입시스템이라 한다.

let user: object = {
    id: 1,
    name:'heesu'    
}
// user가 객체라는 것만 지정해주고 다른 정보가 없기때문에 에러가 난다.
// user.id ;

// 객체 리터럴타입을 사용
let user1:{
    id?: number; // ?의 의미는 해당 프로퍼티가 있어도되고, 없어도 된다 (선택적프로퍼티 = 옵셔널프로퍼티(optional property))
    name: string
} = {
    id: 1,
    name: '히수'
}
// 객체리터럴 타입으로 id 프로퍼티에 접근하면 오류없이 잘 수행된다.
user1.id;

type dogType = {
    name: string;
    color: string;
}
let dog: dogType = {
    name:'멍멍이',
    color: 'brown'
}
dog.name;


// user1안에 id 는 ?를 붙혀서 있어도되고, 없어도되는 프로퍼티이기때문에 오류가 나지 않는다
user1 = {
    name:'홍길동'
}


// 바꾸면 안되는 값에는 readonly
let config: {
    readonly apiKey: string;
} = {
    apiKey: 'API KEY'
}

// config.apiKey = 'hacked' // 읽기전용 속성으로 변경할 수 없다는 에러가 뜸