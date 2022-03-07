# JavaScript

## callback

- 다른 함수에 매개변수로 넘겨 준 함수.

## Promise (then, catch)

- 자바스크립트 비동기 처리에 사용되는 객체. 보통 서버와 클라이언트간의 통신에서 주로 사용된다.

- Promise는 다음 중 하나의 상태를 가진다.

  > 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.

  ```javascript
  new Promise(function (resolve, reject) {
    // ...
  });
  ```

  > 이행(fulfilled): 연산이 성공적으로 완료됨.
  > 완료되면 then()을 이용하여 처리 결과 값을 받을 수 있다.

```javascript
function getData() {
  return new Promise(function (resolve, reject) {
    var data = 100;
    resolve(data);
  });
}
// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function (resolvedData) {
  console.log(resolvedData); // 100
});
```

> 거부(rejected): 연산이 실패함.
> 실패하면 이유와 처리의 결과 값을 catch() 로 반환받는다.

```javascript
function getData() {
  return new Promise(function (resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData()
  .then()
  .catch(function (err) {
    console.log(err); // Error: Request is failed
  });
```

- promise 에러 처리 방법으로는 두 가지가 있다.

  1. then()의 두 번째 인자로 에러를 처리하는 방법.
  2. catch()를 이용하는 방법.

  첫 번째 방법은 then()의 첫 번째 콜백 함수 내부에서 오류가 나는 경우엔 제대로 잡아내지 못하므로, 가급적 오류는 catch()로 처리하는 것이 바람직하다.

### Promise Chaining

- promise는 여러 개를 연결하여 사용할 수 있다.
  then() 메소드를 호출하고 나면 새로운 promise 객체가 반환된다.

```javascript
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then(function (data) {
    // ...
  })
  .then(function () {
    // ...
  })
  .then(function () {
    // ...
  });
```

## async & await

- callback hell을 벗어나기 위해 사용.

- 함수 앞에 async, 비동기 처리할 코드 앞에 await을 사용.

```javascript
const getSomthing = async () => {
  await doSomething();
};
```
