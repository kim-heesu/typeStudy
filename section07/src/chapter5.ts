// 프로미스

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20)
    },3000);
})

// resolve에 20, 즉 number타입인 값을 전달했는데 ... res가 unknwon으로 나온다.. 
// 왜냐면 promise는 결과값에 대한 타입을 역으로 추론하지 안흔다.
// (타입을 따로 주지 않으면  Promise<unknown>이 기본값이기 때문.)
// (만약 resolve 값으로 타입을 추론하면 Promise 타입을 자기 자신으로 다시 추론하는 순환 추론"이 되기 때문에 TS에서 금지한다.)
promise.then((res)=>{
    console.log(res * 10);
});


// 비동기작업 시 타입을 지정해줄 수 있다.
// resolve 성공시 타입은 지정해 줄 수 있지만, 
// reject 실패시 타입은 지정해 줄 수 없어서 타입좁히기를 사용해야한다.
const promise2 = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20)
        reject("~때문에 실패")
    },3000);
})
promise2.then((res)=>{
    console.log(res * 10);
});
promise2.catch((err)=>{
    if(typeof err === 'string') {
        console.log(err);
    }
})


// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
    id: number;
    title: string;
    content: string;
}

// 2. 두번쨰 방법 fetchPost 함수에 Promise<Post> 타입부여
// 두번째로 해라~ 이게 함수 선언 부분만 보고도 바로 타입을 알 수 있기 때문에.. 
function fetchPost():Promise<Post>{
    // 1. 첫번째 방법 promise객체에 Post타입부여
    return new Promise<Post>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id:1 ,
                title: "제목",
                content: "콘텐츠"
            });     
        },3000)

    })
}
const postRequest = fetchPost();
postRequest.then((post)=>{
    post.id
})