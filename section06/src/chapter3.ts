// 인터페이스와 클래스

interface CharactorInterface {
    name: string;
    moveSpeed: number;
    move():void;
}


// implements = 구현하다라는 뜻
// 여기서의 인터페이스는 클래스의 설계도 역할을 한다.
// Charactor클래스가 CharactorInterface라는 설계도를 구현하고 있는 것
class Charactor implements CharactorInterface {
    constructor(public name:string, public moveSpeed: number, private extra : string) {}
    move():void {
        console.log(`${this.name}`)
    }
}

// 인터페이스는 무조건 public필드만 정의할수있다. ( 다른 접근제어자를 달면 오류가 난다.)
// 프라이빗 필드가 필요하다면 따로 지정도 가능하다.