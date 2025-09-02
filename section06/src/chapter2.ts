// 접근제어자

class Employee {
    private name: string;
    protected age: number;
    position: string;

    constructor(name:string, age:number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 매서드 정의
    work(){
        console.log('일함')
    }

    word(){
        console.log(`${this.name}`)
    }
}

const employee = new Employee('hi',23,'developer');

// 접근제어자
// public = 아무 제약이 없는상태
// 이렇게 수정할 수 있는 이유는 클래스는 객체이고,
// (인스턴스의 프로퍼티에 자유롭게 접근할수 있음)
// 각각의 필드의 접근제어자가 기본적으로 public설정이 되어있기때문이다.
// 클래스안에 필드를 지정할때 앞에 아무것도 써주지않으면 기본값이 public이다 
    // public name: string;
    // public age: number;
    // public position: string;

employee.position = 'design'

// private
// private name: string;
// 해당 클래스 내부가 아니면 어디서도 접근할 수 없다.(외부의 read나 파생클래스에서 조차 접근불가.)
// 이 클래스는 외부에서 점표기법으로 프로퍼티에 접근하는게 제한된다.
// read도 불가 (read-only)
// 클래스 내부 메서드에서는 사용가능하다.

// 아래는 오류코드이다
// employee.name='hello';

// 상속받은 클래스에서도 사용할 수 없다.

class Employee2 extends Employee {
    tall : number;

    constructor (name:string, age:number, position: string,tall:number){
         super(name,age,position);
        this.tall = tall;
    }

    // 상속받은 클래스 내 메소드에서도 사용할 수 없다.
    test(){
        // console.log(`${this.name}`)
    }
}

//protected 
// protected age: number;
// 외부에서는 접근할 수 없지만, 파생클래스에서는 접근할수있다.

class Employee3 extends Employee {
    tall : number;

    constructor (name:string, age:number, position: string,tall:number){
        super(name,age,position);
        this.tall = tall;
    }

    test(){
        console.log(`${this.age}`)
    }
}

// Employee3.age = 100


// 생성자 매개변수에 접근제어자를 달아주면 필드를 자동생성하고, 필드의 값을 자동으로 초기화한다.
        // this.name = name;
        // this.age = age;
        // this.position = position;
// 필드가 없어도 오류가 안난다.
// 오히려 이상황에 필드를 정의하면 중복되었다고 오류가 뜬다.
class Employee4 {
    constructor(private name:string, protected age:number, public position: string){
    }

    // 매서드 정의
    work(){
        console.log('일함')
    }

    word(){
        console.log(`${this.name}`)
    }
}
