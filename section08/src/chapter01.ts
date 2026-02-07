//타입조작하기
// 인덱스드엑세스타입
// key of 연산자
//mapped타입
// 템플릿리터럴타입

// 인덱스드 엑세스타입
// 객체예시
interface Post {
  title: string;
  content: string;
  author: {
    id:number;
    name: string;
  }
}
// 기존 author:{id:number; name:sstring}
// 인덱스드 엑세스타입사용시
// Post['author'] 으로 지정해주면 Post 인터페이스 내 author 타입만 쏙 뽑아준다.
// 만약 author중 id 타입만 사용하고 싶을 경우 Post['author']['id'] 이런식으로도 사용할 수 있다.

function printAuthorInfo(author:Post['author']){
  console.log(`${author.name}-${author.id}`)
}
const post :Post ={
  title:"title",
  content:"content",
  author: {
    id:1,
    name:"name"
  }
}

// 배열예시
type PostList = {
  title: string;
  name: string;
  content:string;
  author: {
    id: number;
    name:string;
    age:number
  }
}[];

const postList: PostList[number] = [
  {
    title: "title",
    name: "name",
    content: "content",
    author : {
      id: 1,
      name:"hihi",
      age:100
    }
  }
]

// 배열타입에서 특정 프로퍼티를 뽑아 사용하려면 
// 먼저 PostList[number] 처럼 인덱스로 배열에 접근한뒤
// PostList[number]["author"] 처럼 필요한 프로퍼티만을 뽑아서 사용한다.
function printAuthorInfo2(author:PostList[number]["author"]){
  console.log(`${author.name}-${author.id}`);
}

// 튶플과 함께 사용
type Tup = [number,string,boolean];
type Tup0 = Tup[0]; /// number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2];// boolean
type Tup3 = Tup[3]; // 해당인덱스가 존재하지 않으므로 에러

// 튜플 인덱스에 넘버를 넣어주면 튜플타입안에 있는 모든 타입의 최적의 공통타입을 뽑아온다.
// 해당 튜플타입의 최적의 공통타입,  number | string | boolean 유니온 타입이 된다
type TupNum = Tup[number];
