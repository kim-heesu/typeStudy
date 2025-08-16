// 사용자 정의 타입가드

type Dog = {
    name: string;
    isBark: boolean;

}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

// 타입을 알려주기위한 함수를 작성
// animal is Dog 2. 이 함수가 true를 반환하면 Dog 타입이다.
function isDog(animal:Animal): animal is Dog {
    // 1. animal을 Dog타입이라고 단언해준다.
    return (animal as Dog).isBark !== undefined;
}
function isCat(animal:Animal): animal is Cat {
    return (animal as Cat).isScratch ! == undefined;
}

// 만약 서로소유니온타입으로 만들 수 없는 상황이라고 가정했을떄 
function warning(animal:Animal) {
    if(isDog(animal)) {
        animal // 이때 타입이 Dog로 잘 좁혀진다.
    } else if (isCat(animal)) {
        animal // 이때 타입은 Cat
    }
}