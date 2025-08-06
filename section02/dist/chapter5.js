// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 이넘타입은 자바스크립트에는 없고, 타입스크립트에서만 존재하는 타입이다.
// 타입주석들은 컴파일후 내용이 제거되지만, enum은 제거되지 않는다.
// 각각의 멤버에 숫자가 지정되는걸 숫자형 enum 이라 한다.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// enum 타입은 숫자를 지정해주지 않아도 위에서부터 0부터 자동으로 숫자가 들어간다
// enum Role {
//     ADMIN,
//     USER,
//     GUEST    
// }
// 제일 처음에 있는 멤버에게 숫자를 지정해주면 다음부터는 +1 씩해서 들어간다
// enum Role {
//     ADMIN = 10,
//     USER, // 11
//     GUEST // 12
// }
// 중간부터 지정해주면 그전까지는 0 , 1, 이런식으로 증가되고, 지정해준 멤버를 기준으로 +1 해서 들어감
// enum Role {
//     ADMIN, //0
//     USER = 10, // 10
//     GUEST // 11
// }
// 문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: '히수',
    role: Role.ADMIN, // 0 관리자
    language: Language.korean
};
const user2 = {
    name: '히히',
    role: Role.USER, // 1 일반유저
    language: Language.english
};
const user3 = {
    name: '수수',
    role: Role.GUEST // 2 게스트
};
export {};
