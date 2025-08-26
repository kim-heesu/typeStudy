// 타입스크립트 클래스

const employee = {
    name: '희수',
    age: 27,
    position: 'developer',
    work(){
        console.log('작업중')
    }
}

// 클래스는 자바스크립트 클래스로 취급되면서 동시에 타입으로도 취급된다.
// (클래스 자체가 하나의 타입으로도 작용된다.)
class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 오류: 속성 '' 은 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.
    // 어차피 undefind 들어갈껀데 왜 만들었냐고 뭐라하는것

    // 해결방법 1
    // 선택적 프로퍼티로 만들기
    // name2?: string;

    // 해결방법2
    // 초기값 지정해주기
    // name3:string = '';

    // 해결방법3
    // 생성자 만들기
    constructor(name:string, age:number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 매서드 정의
    work(){
        console.log('일함')
    }
    work2(){
        console.log(`일함2${this.name}`)
    }
}

// employeeB변수의 타입이 Employee로 추론되고있다. (Employee는 클래스인데!)
const employeeB = new Employee('hihi',10,'개발자');
console.log(employeeB)

// 실제로 타입으로도 지정가능
const employeeC:Employee = {
    name:'안녕',
    age: 10,
    position: '안녕직업',
    work(){},
    work2(){}
}

// 상속
class ExecutiveOfficer extends Employee {
    // 필드
    officeNum: number;

    // 생성자
    constructor(name:string,age:number,position:string,officeNum:number){
        // 타입스크립트에서는 super를 사용하지않으면 에러가난다.(상속받은 의미가 없기때문)
        // 인수의 개수나 정보가 달라도 에러난다.
        super(name,age,position);
        this.officeNum = officeNum;
    }
}