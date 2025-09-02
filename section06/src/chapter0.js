// 클래스

let studentA = {
    name:'heesu',
    grade: "A",
    age: 27,
    study(){
        console.log('공부중')
    },
    instroduce(){
        console.log('hi')
    }
}
let studentB = {
    name:'heesu',
    grade: "A",
    age: 27,
    study(){
        console.log('공부중')
    },
    instroduce(){
        console.log('hi')
    }
}

// 클래스는 파스칼표기법을 쓴다.
class Student {

    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age){
        // 매개변수로 받은 값들을 실제로 만들 객체의 프로퍼티의 값으로 설정
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //매서드
    study (){
        console.log('공부중중')
    }

    instroduce(){
        console.log(`hi ${this.name}입니다!`)
    }

}

// new를 붙여서 클래스를 적고, 인수를 넘기게되면 클래스 내 생성자를 호출한다
// 클래스를 이용해서 만든 객체를 인스턴스라고한다.
// 스튜턴트 인스턴스(student 클래스를 이용해서 만든 객체라는 뜻)
let studentC = new Student('hi','A','27')
console.log(studentC) // Student { name: 'hi', grade: 'A', age: '27' }
// 매서드도 호출가능
studentC.study();
studentC.instroduce();




// 클래스 상속
class StudentDeeloper extends Student {
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill){
        // super 키워드를 이용해 부모클래스의 생성자를 호출한다.
        super(name, grade, age)
        this.favoriteSkill = favoriteSkill;
    }
    skill(){
        console.log(`좋아하는 스킬은? ${this.favoriteSkill}`)
    }
}

let studentD = new StudentDeeloper('hi','A','27','ts')
console.log(studentD)
studentD.skill()