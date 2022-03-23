# 조건문

| if 조건문                                   | if else 조건문                              | if else if 조건문                           | switch 조건문                               |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| if(<불 표현식>){<br />&nbsp;&nbsp;&nbsp;<문장><br />} | if(<불 표현식>){<br />&nbsp;&nbsp;&nbsp;<문장><br />} else {<br />&nbsp;&nbsp;&nbsp;<문장><br />} | if(<불 표현식>){<br />&nbsp;&nbsp;&nbsp;<문장><br />} else if {<br />&nbsp;&nbsp;&nbsp;<문장><br />} else {<br />&nbsp;&nbsp;&nbsp;<문장><br />} | switch(<비교할 값>) {<br />&nbsp;&nbsp;&nbsp;case <값>:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<문장><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br />&nbsp;&nbsp;&nbsp;default:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<문장><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br />} |

### 짧은 조건문

> (<불표현식>) || (<불 표현식이 거짓일 때 실행할 문장>)
>
> (<불표현식>) && (<불 표현식이 참일 때 실행할 문장>)

```javascript
true || alert('실행X')
false || alert('실행O')
true && alert('실행O')
false && alert('실행X')
```



### 연습문제

1. prompt() 함수로 문자열을 입력받아 "안녕"이 들어가 있으면 "안녕하세요", 
   "잘자" 또는 "잘 자"를 입력하면 ""안녕히 주무세요"를 출력

```javascript
var inp = prompt('문자열을 입력하십시오.', '');
inp.indexOf("안녕")>=0 && (alert("안녕하세요."));
( inp.indexOf("잘자")<0 && inp.indexOf("잘 자")<0 )||(alert("안녕히 주무세요."))
```

2. 문자열을 입력받아 "안녕"이라는 글자가 들어있지 않으면 "인사를 안 하다니"라고 출력

```javascript
var inp = prompt('문자열을 입력하십시오', '');
inp.indexOf('안녕')<0 && alert('인사를 안 하다니!');
```

3. 숫자를 입력받아 4로 나눌 수 있는 숫자라면 "4로 나눌 수 있는 숫자입니다"를 출력

```javascript
var inp = Number(prompt('숫자를 입력하십시오.', ''));
if(inp % 4 == 0){
  alert('4로 나눌 수 있는 숫자');
}
```

4. 숫자를 입력받아 양수라면 "양수입니다", 음수라면 "음수입니다", 0이라면 "0입니다"를 출력

```javascript
var inp = prompt('숫자를 입력하십시오', undefined);
alert(inp > 0 ? "양수입니다" : inp<0 ? "음수입니다" : inp==0 ? "0입니다" : "숫자가 아닙니다");
```

