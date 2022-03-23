## 기본 용어

| 개념         | 설명                                       |
| ---------- | ---------------------------------------- |
| 표현식        | 값을 만들어내는 간단한 코드                          |
| 문장         | 하나 이상의 표현식이 모여 구성되는 코드를 읽어들이는 단위가 되는 것   |
| 키워드        | 프로그래밍 언어가 처음 만들어질 때 저애진 특별한 의미가 있는 단어    |
| 식별자        | 이름을 붙일 때 사용하는 단어                         |
| 주석         | 프로그램 코드를 설명하며, 프로그램의 진행에 전혀 영향을 주지 않는 문장 |
| 문자열        | 문자를 표현할 때 사용하는 자료형                       |
| 숫자(Number) | 숫자를 표현할 때 사용하는 자료형                       |
| 불(Bool)    | 참과 거짓을 표현할 때 사용하는 자료형                    |
| 변수         | 값을 저장할 때 사용하는 식별자                        |

1. 표현식

```javascript
273
10 + 20 + 30 * 2
'RintIanTta'
```

2. 문장(세미콜론;이 찍힌 경우)

```javascript
10 + 20 + 30 * 2;
var rintiantta = 'Rint' + 'Ian' + 'Tta';
alert('Hello JavaScript!');
273;
```

3. 키워드

| break    | else     | instanceof | true   |
| -------- | -------- | ---------- | ------ |
| case     | false    | new        | try    |
| catch    | finally  | null       | typeof |
| continue | for      | return     | var    |
| default  | function | switch     | void   |
| delete   | if       | this       | while  |
| do       | in       | throw      | with   |

4. 식별자
   - 키워드 사용 X
   - 숫자로 시작 X
   - 특수 문자는 _ 와 $ 만 허용
   - 공백 포함 X
   - **생성자 함수의 이름은 항상 대문자로 시작**
   - **변수, 인스턴스, 함수, 메서드 이름은 항상 소문자로 시작**
   - **여러 단어로 이루어진 식별자는 각 단어의 첫 글자를 대문자로**

```javascript
// 되는 것
alpha
alpha10
_alpha
$alpha
AlPha
ALPHA
// 안되는 것
break
273alpha
has space
```

5. 주석

```javascript
<!-- html 주석 -->
// 한 줄 주석
/* 
여러 줄 주석
*/
```

6. 출력

```javascript
alert([String message])
```

7. 문자열 자료형

```
'This is "string"'
"This is 'string'"
"This is \"string\""
'This is \'string\''
```

| 이스케이프 문자 | 설명    |
| -------- | ----- |
| \t       | 수평 탭  |
| \n       | 줄 바꿈  |
| \'       | 작은따옴표 |
| \"       | 큰따옴표  |
| \\\      | 역 슬래시 |

8. 숫자 자료형

   > 복소수 안됨

```javascript
273
52.273
```

9. 불 자료형

```javascript
true // =1
false // =0
```



### 자료형 검사

> typeof 연산자

```javascript
typeof [변수]
```



### 자료형 변환

1. 숫자와 문자열 

- <u>덧셈 연산</u> 시, **숫자 자료형을 문자열 자료형으로** 자동 변환

- <u>더하기 연산자 외</u>의 사칙 연산자는 **문자열 자료형을 숫자 자료형으로** 자동 변환

  > Number() 함수 : 복소수는 NaN(Not a Number)

```javascript
Number([변수])
// ex.
var number = Math.sqrt(-3);
alert(number);	// NaN
```

2. 불 자료형

   > Boolean() 함수

```javascript
/* false */
Boolean(0)
Boolean(NaN)
Boolean('')
Boolean(null)
Boolean(undefined)
```

### 