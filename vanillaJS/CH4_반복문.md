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

