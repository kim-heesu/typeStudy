// 템플릿 리터럴 타입
// 스트링리터럴 타입들을 기반으로 특정 패턴을 갖는 문자열 타입을 만드는 기능

type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' | 'black-dog' ...

type ColoredAnimal2 = `${Color}-${Animal}`;

// 아래와 같이 지정시 ${Color}-${Animal} 패턴에 맞춘 값들을 할당할 수 있다.
const coloredAniaml: ColoredAnimal2 = "black-cat"