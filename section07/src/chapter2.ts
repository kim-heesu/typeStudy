// 제네릭 타입 여러개 선언하기
// T = string , U = number
function swap<T,U>(a:T, b:U) {
    return [b,a];
}
const [a,b] = swap ("1",2);


// 인덱스 접근 시 배열타입으로 
function returnFirstValue<T>(data: T[]) {
    return data[0];
}
// str = string | number
let str = returnFirstValue([1,"hello","mynameis"])

// 인덱스 접근시 튜플타입으로
// 첫번째 인덱스는 T이고, 이후는 모르겄다~
function returnFirstValue2<T>(data: [T, ...unknown[]]){
    return data[0];
}
let str2 = returnFirstValue2([1,"hello","mynameis"])


// number타입의 객체를 가지고 있는 타입으로 T를 제한함
function getLength<T extends {length: number}>(data:T) {
    return data.length;
}

let var1 = getLength([1,2,3,4]); // 4
let var2 = getLength("12345") // 5
let var3 = getLength(10) // 에러 


// map 메서드 만들기
//  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
const arr = [1,2,3];
const newArr = arr.map((it)=>{return it*2});

// arr = 어떤배열을 받을것인가?
// callback = 어떤 함수를 적용할것인가?
function map<T>(arr: T[] , callback: (item: T) => T){
    let result = [];
    for (let i=0; i<arr.length ; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (it) => it * 2);
map(["hi","hello"], (it) => it.toLowerCase());

// 인수와 리턴이 꼭 같은 타입일 필요 없잖아
function map2<T, U>(arr: T[] , callback: (item: T) => U){
    let result = [];
    for (let i=0; i<arr.length ; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}
map2(["hi","hello"], (it) => parseInt(it));


// forEach 만들기!
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
const arr2 = [1,2,3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr:T[], callback:(item:T) => void) {
    for(let i=0; i<arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr2,(it) => {console.log(it.toFixed())});

forEach(['123','456'],(it)=>{it});