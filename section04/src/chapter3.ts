// 함수 오버로딩
// 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는방법
// 자바스크립트에서는 지원이 안되고, 타입스크립트에서만 지원이된다.

// 하나의 func함수
// 모든매개변수의 타입은 number
// 매개변수가 1개일경우 = *20
// 매개변수가 3개일경우 = sum

// 함수의 버전들
// 함수의 구현부 없이 선언식만 써놓은걸 오버로드 시그니처라고 한다.
function func(a:number):void;
function func(a:number, b:number, c:number):void;

// 실제구현부 = 구현시그니처
// 어떤 함수가 오버로드시그니처를 가지고 있으면 함수 호출시 
// 실제구현부의 매개변수나 타입에 따르지않고, 오버로드시그니처들 중 하나의 버전을 따라간다.
// 1번째 오버로드시그니처를 의미있게 만들어 주기 위해 b,c매개변수는 선택적 매개변수로 지정해주었다.
function func(a:number, b?:number, c?:number){
    if(typeof b ==='number' && typeof c ==='number') {
        console.log(a+b+c);
    } else {
        console.log(a*20)
    }
};

// func(); // 에러 인수개수부족
func(1);
// func(1,2); //에러 인수개수가 안맞음
func(1,2,3);

