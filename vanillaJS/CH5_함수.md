# 함수

| 익명 함수 선언                         | (선언적) 함수                              |
| -------------------------------- | ------------------------------------- |
| function () {<br />  <문장><br />} | function <함수이름>(){<br />  <문장><br />} |

| 호출                | 매개변수                    | 리턴                | 콜백함수                       |
| ----------------- | ----------------------- | ----------------- | -------------------------- |
| 함수 내부의 코드를 실행하는 것 | 함수에 자료 값을 넘기기 위해 사용하는 것 | 함수를 실행한 결과로 나오는 것 | 함수의 매개변수로 함수를 전달할 때, 해당 함수 |

> 웹 브라우저는 내장하고 있는 함수의 소스 코드를 볼 수 없게 막아둠

```javascript
alert(alert);
alert(prompt);
```

```
function alert(){
  [native code]
}

function prompt() {
  [native code]
}
```

> 웹 브라우저는 script 태그 내부의 내용을 한 줄씩 읽기 전에 선언적 함수부터 읽음
>
> (선언적 함수 -> script 내부 내용)

ex. 선언적 함수 -> 변수 등 script 내부를 한 줄 씩

```javascript
함수();	// 2.
var 함수 = function() {alert('함수 B')}; // 3.
function 함수() {alert('함수 A');}	// 1.
함수(); // 4.
```



### 매개변수

ex. Array() 함수의 매개변수에 따른 차이

| 함수 형태                | 설명                      |
| -------------------- | ----------------------- |
| Array()              | 빈 배열 생성                 |
| Array(number)        | 매개변수 값만큼의 크기를 가지는 배열 생성 |
| Array(any, ..., any) | 매개변수를 요소로 가지는 배열 생성     |

### 가변 인자

```javascript
function sumAll(){
  arguments	//	가변인자
  arguments.length // 가변인자의 길이
}
```



### 내부 함수

> 함수가 오버라이드 되는 등의 충돌문제 해결

```javascript
function <외부함수>(){
  function <내부함수1>(){
    <함수코드>
  }
  function <내부함수2>(){
    <함수코드>
  }
    ...}
```

> 내부 함수는 외부에서 사용할 수 없음



### 콜백 함수

> 매개변수로 전달하는 함수

```javascript
function callTenTimes(callback) {
  for(var i=0;i<10;i++){
    callback();
  }
}

var callback = function() {
  alert('함수 호출');
};

callTenTimes(callback);
```

**ex. 익명 콜백 함수**

```javascript
function callTenTimes(callback) {
  for(var i=0;i<10;i++){
    callback();
  }
}

callTenTimes(function(){
  alert('함수 호출');
});
```



### 함수를 리턴하는 함수

```javascript
function returnFunction(){
  return function(){
    alert('HELLO FUNCTION...!');
  };
}

returnFunction()();	// 리턴값으로 전달하는 함수까지 호출
```

