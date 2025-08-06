// number
let num1: number = 123; //정수
let num2: number = -123; //음수
let num3: number = 0.123; //소수
let num4: number = -0.123; //음의소수
let num5: number = Infinity; //무한대
let num6: number = -Infinity; //음의무한대
let num7: number = NaN; // not a number

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello${num1}`;

// boolean
let bool1: boolean =  true;
let bool2: boolean = false;

// null
let null1: null = null

// undefined
let unde1: undefined = undefined;

// 리터럴타입
// 값 그 자체가 타입이 되는 타입
let numA:10 = 10;
let strA:'hello' = 'hello';
let boolA: true = true;

// numA = 12; 에러남


// numA의 타입은 10이라는 값만을 넣을 수 있게 지정했기 때문에 
// 12를 다시 할당하려고하면 에러가 난다.