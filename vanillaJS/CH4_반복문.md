# 반복문

- 배열 선언과 접근

```javascript
// 배열 선언
var array = [ 1, '안녕', true ]

// 배열 접근
array[0]
array[1]
```

- while 반복문

  > 조건에 비중을 두는 반복문

```javascript
while ([불 표현식]) {
  [문장]
}
```

- do while 반복문

```javascript
do {
	[문장]
} while([불 표현식])
```

- for 반복문

  > 횟수에 비중을 두는 반복문

```javascript
for(var i=0;i<[반복횟수];i++){
  [문장]
}

for([초기식]; [조건식]; [종결식]){
  [문장]
}
```

> 1. 초기식 실행
> 2. 조건식 비교 - 조건이 거짓이면 반복문 종료
> 3. 문장 실행
> 4. 종결식 실행
> 5. 2번으로

- for in 반복문

```javascript
for(var [반복변수] in [배열 또는 객체]){
  [문장]
}
```



### 중첩 반복문

ex. 피라미드 만들기

```
*
**
***
****
*****
******
*******
********
*********
```

```javascript
var output='';
for(var i=1;i<=10;i++){
  for(var j=0;j<i;j++){
    output += '*';
  }
  output += '\n';
}
console.log(output);
```

ex2. 피라미드 만들기

```
     *
    ***
   *****
  *******
 *********
***********
```



### 연습문제

1. "안녕"이 들어가 있으면 "안녕하세요"를 출력하는 프로그램에, 

   반복문을 적용해서 계속 입력을 받게 하고, 입력한 문장 또는 현재 시각에 따라 다양한 질문과 답변을 하는 프로그램을 만드시오.(ex. "잘 있어" 등을 입려가면 반복문 종료)

```javascript
var input = '';
var msg = '말을 걸어보세요.';
var answer = ['뭐라고?', 'ㅋㅋㅋㅋㅋ', '어이없어', '미안', 'ㅎㅎ', ';', '넌 참 재밌는 아이야.'];
var prev = -1, idx = -1;
do {
  input = prompt(msg, '');
  if(input.indexOf('?')>=0){
    msg = answer[0];
  } else {
    while(prev == idx){
    	idx = Math.floor(Math.random() * 6);
    }
    prev = idx;
    msg = answer[idx];
  }
} while(input.indexOf('빠이') < 0 && input.indexOf('바이') < 0 && input.indexOf('바위') < 0)
```

2. 1 부터 100까지 더하는 프로그램

2-1. 사용자에게 입력받은 특정한 숫자부터 특정한 숫자까지 더하는 프로그램

```javascript
var answer1 = 0, answer2 = 0;
for(var i=1;i<=100;i++){
  answer1 += i;
}
var start=prompt(), end=prompt();
for(var i=start;i<=end;i++){
  answer2 += Number(i);
}
alert('1부터 100까지 합 : ' + answer1);
alert(start+'부터 ' + end + '까지 합 : '+answer2);
```

3. 1부터 100까지 곱하는 프로그램

3-1. 사용자에게 입력받은 특정한 숫자부터 특정한 숫자까지 곱하는 프로그램

```javascript
var answer1 = 1, answer2 = 1;
for(var i=1;i<=100;i++){
  answer1 *= i;
}
var start=prompt(), end=prompt();
for(var i=start;i<=end;i++){
  answer2 *= Number(i);
}
alert('1부터 100까지 곱 : ' + answer1);
alert(start+'부터 ' + end + '까지 곱 : '+answer2);
```



4. [52, 273, 103, 32, 57, 103, 31, 2]와 같은 숫자 배열이 주어질 때, 배열 내부에서의 최대값과 최소값을 찾는 코드

```javascript
var array = [52, 273, 103, 32, 57, 103, 31, 2];
var min = array[0], max = array[0];
for(var i=0;i<array.length;i++){
  min = array[i] < min ? array[i] : min;
  max = array[i] > max ? array[i] : max;
}
alert('최소값은 '+min+'\n최대값은 '+max);
array.sort(function(a, b) {
  return a - b;
});
alert('최소값은 '+array[0]+'\n최대값은 '+array[array.length-1]);
```

