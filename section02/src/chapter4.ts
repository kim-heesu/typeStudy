// 타입별칭
type userType = {
    id: number,
    name: string,
    nickname:  string,
    birth:  string,
    bio:  string,
    location:  string,
}

let user:userType = {
    id: 1,
    name: 'heesu',
    nickname: '너구리',
    birth: '2000.01.01',
    bio: '안녕',
    location: '제주도'
};

// 인덱스 시그니처
type countryCodes = {
    // string 타입으로 밸류가 스트링타입은 프로퍼티들은 모두 허용
    [key: string]: string;
}
let countryCodes: countryCodes = {
    Korea: "ko",
    unitedState: 'us',
    UnitedKingdom:'uk'
}

type CountryNumberCodes= {
    [key: string]: number
}
let countryNumberCodes:CountryNumberCodes = {
    Korea: 410,
    unitedState: 840,
    UnitedKingdom: 826
}

// 인덱스 시그니처타입은 지정한 타입을 위반하지만 않으면 에러가 나지않는다.
// 그래서 countryNumberCodes2는 아무런 프로퍼티가 없는 객체지만 에러가 나지 않는것
// (위반할 프로퍼티가 없음)
type CountryNumberCodes2= {
    [key: string]: number;

    // 근데 꼭 필요한 프로퍼티가 있다면 추가로 적어주면된다.
    // 하지만 추가적으로 지정해준 타입은 인덱스 시그니처타입과 일치하거나 호환되어야한다.
    // 지금 string으로 되어있는 키의 값은 number가 와야하는데 
    // korea: string 으로 타입을 지정해준 경우 에러가 나게된다.
    Korea: number 
}
// let countryNumberCodes2:CountryNumberCodes2 = {}
