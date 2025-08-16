// 서로소 유니온타입
// 교집합이 없는 탕비들로만 만든 유니온 타입을 말함
// 태그를 붙혀서 객체를 구별할 수 있는 기능이기 때문에 태그드 유니온타입이라고도 한다.

// ex string | number 같은 집합을 수학에서는 공통원소가 하나도 없는 관계. 서로소 관계에 있다고 한다.
// 이런 두개의 집합을 서로소집합이라고 표현한다.

type Admin = {
    name: string;
    kickCount: number;
};
type Member = {
    name: string;
    point: number;
};
type Guest = {
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin > {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member > {name}님 현재까지 {point} 모았습니다.
// Guest > {name}님 현재까지 {visitCount}번 방문했습니다.
// 아래 코드는 주석이 없을 경우 코드만 보고 직관적으로 어떤 조건인지 알기가 어렵다.,
function login(user:User) {
    if('kickCount' in user) { // 타입좁히기
        // admin 타입
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
    } else if ('point' in user) {
        // Member 타입
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
    } else {
        // Guest 타입
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`)
    }
}

// 개선 코드
type Admin2 = {
    tag:'ADMIN'; // 태그라는 프로퍼티를 리터럴 타입으로 추가한다.
    name: string;
    kickCount: number;
};
type Member2 = {
    tag:'MEMBER';
    name: string;
    point: number;
};
type Guest2 = {
    tag:'GUEST';
    name: string;
    visitCount: number;
};

// tag 프로퍼티의 추가로 서로소관계에 있는 타입들을 유니온 타입으로 묶어 서로소 유니온 타입이 되었다.
type User2 = Admin2 | Member2 | Guest2;

function login2(user:User2) {
    if(user.tag ==='ADMIN') { // 타입별 tag 프로퍼티로 조건을 기술하니 더욱 직관적게 되었다.
        // admin 타입
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
    } else if (user.tag ==='MEMBER') {
        // Member 타입
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
    } else {
        // Guest 타입
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`)
    }

    switch(user.tag){
        case "ADMIN" : {
            // admin 타입
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
            break;
        }
        case "MEMBER" : {
            // Member 타입
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
            break;
        }
        case "GUEST" : {
            // Guest 타입
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`)
            break;
        }   
    }
}



// 비동기 작업 결과 처리하는 객체
type AsyncTask = {
    state: 'LOADING' | "FAILED" | "SUCCESS";
    error?: {
        message: string;
    };
    response?: {
        data: string;
    }
}

const loading: AsyncTask = {
    state: "LOADING"
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: '오류발생 원인은!! '
    }
};

const success: AsyncTask = {
    state: 'SUCCESS',
    response: {
        data: '데이터~'
    }
}

// 로딩중 > 콘솔에 로딩중 출력
// 실패 > 실패에러메세지 출력
// 성공 > 성공 데이터출력
function processResult(task: AsyncTask) {
    switch(task.state) {
        case "LOADING" : {
            console.log('로딩중');
            break
        }
        case "FAILED" : {
            // task 가 정상적으로 좁혀지지않아서 이때 task 의 타입이 AsyncTask 로만 나오고 있다.
            // task.error 프로퍼티가 선택적 프로퍼티로 되어있기 때문에 테스크에 에러가 있는지 없는지 확실하게 알 수 없는 상황.
            // console.log(`에러발생 : ${task.error.message}`);

            // 옵셔널 체이닝을 사용하거나
            console.log(`에러발생 : ${task.error?.message}`);
            // non null 단언을 사용해야하는 상황이다.
            console.log(`에러발생 : ${task.error!.message}`);
            break;
        }
        case "SUCCESS" : {
            console.log(`성공 : ${task.response?.data}`);
            break;
        }
    }
}

// 서로소유니온타입으로 만들어서 오류 해결하고 안전한 코드로 만들기 
type LoadingTask = {
    state: 'LOADING';
}

type FailedTask = {
    state: 'FAILED';
    error: {
        message: string;
    };
}

type SuccessTask = {
    state: 'SUCCESS';
    response: {
        data: string;
    }
}

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask

const loading2: AsyncTask2 = {
    state: "LOADING"
};

const failed2: AsyncTask2 = {
    state: "FAILED",
    error: {
        message: '오류발생 원인은!! '
    }
};

const success2: AsyncTask2 = {
    state: 'SUCCESS',
    response: {
        data: '데이터~'
    }
}

// 로딩중 > 콘솔에 로딩중 출력
// 실패 > 실패에러메세지 출력
// 성공 > 성공 데이터출력
function processResult2(task: AsyncTask2) {
    switch(task.state) {
        case "LOADING" : {
            console.log('로딩중');
            break
        }

        // task의 state가 FAILED 일때에는 AsyncTask 의 후보들 중 FailedTask말고는 포함되는것이 절대 없다.
        // 그래서 task.state가 FAILED일때는 failed2로 타입이 잘 좁혀진다.
        case "FAILED" : {
            console.log(`에러발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS" : {
            console.log(`성공 : ${task.response?.data}`);
            break;
        }
    }
}