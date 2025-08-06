// 배열 array
// 숫자값으로 이루어진 배열 
let numArr = [1, 2, 3];
// 문자값들로 이루어진 배열
let strArr = ['hello', 'hi', 'lol'];
// 제네릭문법 Array<타입을지정>
let boolArr = [true, false, true];
// 배열의 요소들의 타입이 다양할 경우
let multiArr = [1, 'hi'];
// 다차원 배열을 정의
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
// 요소들이 다양한 다차원배열
let multiDoubleArr = [
    [true, 'hi'],
    [false, 'hello']
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1,2,3] // 길이가 맞지않음
// tup1 = ['1','2'] // 타입이 맞지않음
// tup1 = [3,4] // 길이,타입이 모두 맞으니 가능
let tup2 = [1, '2', true];
// tup2 = ['2',1,true] // 각자리의 타입이 맞지않음
// 컴파일후 js 파일에서는 튜플타입또한 그냥 배열과 동일하기때문에 push메서드나,pop등으로 를 이용해 값을 넣을 수 있다.
tup1.pop();
tup1.pop();
tup1.push(1);
// 튜플의 사용
const users = [
    ['김김김', 1],
    ['박박박', 2],
    ['최최최', 3],
    ['이이이', 4],
];
users.push([5, '호호호']);
console.log(users);
// 결과
// const users = [
//     ['김김김',1],
//     ['박박박',2],
//     ['최최최',3],
//     ['이이이',4],
//     [5,'호호호']
// ]
const users2 = [
    ['김김김', 1],
    ['박박박', 2],
    ['최최최', 3],
    ['이이이', 4],
];
export {};
// users2.push([5,'호호호']) // 추가하려는 타입의 위치가 안맞으므로 에러가난다.
