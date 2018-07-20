# JAVA

## 참고(References)
> [java의 정석 - 2nd Edition](https://books.google.co.kr/books/about/Java%EC%9D%98_%EC%A0%95%EC%84%9D.html?id=YWPtQwAACAAJ&source=kp_cover&redir_esc=y)

## 목차(Table of Contents)

1. 변수(Variable)
2. 연산자(Operator)
3. 조건문과 반복문
4. 배열
5. 객체지향 프로그래밍 I
6. 객체지향 프로그래밍 II
7. 예외처리(Exception Handling)
8. java.lang Pakage
9. 내부 클래스
10. 컬랙션 프레임워크와 유용한 클래스
11. 쓰레드(Thread)
12. 입출력(I/O)
13. 네트워킹(Networking)

- - -

## 0. JAVA(Java Programming Language)

## 0.1. 자바언어의 특징

1. 운영체제에 독립적이다.
2. 객체지향언어이다.
3. 자동 메모리 관리(Garbage Collection)
4. 네트워크와 분산처리를 지원
5. 멀티쓰레드를 지원(Multi-thread)
6. 동적 로딩(Dynamic Loading) 지원

## 1. 변수(Variable)

## 1.1. 변수의 타입
- 기본형(Primitive type)
	`boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`
  계산을 위한 실제 값을 저장한다.

	| 종류/크기 | 1 byte | 2 byte | 4 byte | 8 byte |
  |--------|:--------:|:--------:|:--------:|:--------:|
  | 논리형 | `boolean` | | | |
  | 문자형 | | `char` | | |
  | 정수형 | `byte` | `short` | `int` | `long` |
  | 실수형 | | | `float` | `double` |


- 참조형(Reference type)
	8개의 기본형을 제외한 나머지 타입, 객체의 주소를 저장

## 1.2. 문자열 변환
```java
// 문자열 + any type -> 문자열 + 문자열 -> 문자열
// any type + answkduf -> 문자열 + 문자열 -> 문자열

String toStr = 7 + ""; // 7 (문자열 변환시 "" 사용)
```

## 1.3. 형변환
```java
// (타입) 피연산자, '캐스트 연산자' 또는 '형변환 연산자' 이용
int score = (int)85.1; // 85
```

> 1. `boolean`을 제외한 나머지 7개의 기본형은 서로 형변환이 가능하다.
> 2. 기본형과 참조형은 서로 형변환할 수 없다.
> 3. 서로 다른 타입의 변수간의 연산은 형변환을 하는 것이 원칙이지만,
값의 범위가 작은 타입에서 큰 타입으로의 형변환은 생략할 수 있다.

## 1.4. 변수의 타입에 따른 기본 값

| 자료형 | 기본값 |
| :---: | :---: |
| `boolean` | `false` |
| `char` | `\u0000` |
| `byte`, `short`, `int` | `0` |
| `long` | `0L` |
| `float` | `0.0f` |
| `double` | `0.0d` 또는 `0.0` |
| 참조형 변수 | `null` |


## 2. 연산자

1. (단항) > 산술 > 비교 > 논리 > (삼항) > 대입
2. 단항(1) > 이항(2) > 삼항(3). 단항 연산자의 우선순위가 이항 연산자보다 높다.
3. 단항 연산자와 대입 연산자를 제외한 모든 연산의 진행방향은 왼쪽에서 오른쪽이다. (←)

## 2.1. 피연산자의 타입에 따른 이항연산결과

| 피연산자1 | 피연산자2 | 연산결과 |
| ------ | :------: | :------: |
| `byte`, `short`, `char` | `byte`, `short`, `char` | `int` |
| `byte`, `short`, `char`, `int` | `int` | `int` |
| `byte`, `short`, `char`, `int`, `long` | `long` | `long` |
| `byte`, `short`, `char`, `int`, `long`, `float` | `float` | `float` |
| `byte`, `short`, `char`, `int`, `long`, `float`, `double` | `double` | `double` |

## 3. 조건문과 반복문

## 3.1. 조건문 - `if`, `switch`

The Syntax of `if`:
```java
if (조건식 1) {
	// '조건식 1'의 연산결과가 true일 때 수행될 문장
} else if (조건식 2) {
	// '조건식 2'의 연산결과가 true일 때 수행될 문장
} else {
	// 위의 어느 조건식도 만족하지 않을 때 수행될 문장
}
```

The Syntax of `switch`:
```java
switch (조건식) {
	case 값1:
  	// 조건식의 결과가 값1과 같을 경우 수행될 문장
  	break;
  case 값2:
  	// 조건식의 결과가 값2와 같을 경우 수행될 문장
    break;
  // ...
  default:
  	// 조건식의 결과와 일치하는 case문이 없을 때 수행될 문장
}
```

## 3.2. 반복문 - `for`, `while`, `do-while`

The syntax of `for`:
```java
// 실행 순서 (초기화 > 조건식 > 수행될 문장 > 증감식 > 조건식)
for (초기화; 조건식; 증감식) {
	// 조건식이 true일 때 수행될 문장
}
```

The syntax of `while`:
```java
while (조건식) {
	// 조건식의 연산결과가 true일 때 수행될 문장
}
```

The syntax of `do-while`:
```java
do {
	// 조건식의 연산결과가 true 일 때 수행될 문장(첫 진입시에는 조건식을 확인하지 않음)
} while (조건식);
```

## 3.3. break & continue
- `break` - 현재 위치에서 가장 가까운 `switch` 또는 반복문을 벗어나는데 사용
- `continue` - 반복문의 끝으로 이동하여 다음 반복을 진행하는데 사용

## 3.4. 반복문을 위한 라벨(Label for Loops)

반복문이 중첩되어 있는 경우 라벨을 사용하여 가장 가까운 위치의 반복문이 아닌
라벨이 선언된 위치로 이동할 수 있다.

```java
Loop1: for(int i=2; i <= 9; i++) {
  for(int j=1; j <= 9; j++) {
    if(j == 5) {
      // break Loop1; // (1)
      // break; // (2)
      // continue Loop1; // (3)
      // continue; // (4)
    }
    System.out.println(i + "*" + j + "=" + i*j);
    // (4)
  } // (2)
  // (3)
}
// (1)
```

## 4. 배열

## 4.1. 배열의 선언 및 생성
원하는 타입을 선언하고, 변수 또는 타입에 배열임을 의미하는 대괄호 `[]`를 붙인다.

| 선언방법 | 선언 예 |
| ------ | ------ |
| 타입[] 변수이름; | int[] score; |
| 타입 변수이름[]; | int score[]; |

```java
int[] score; // 배열을 선언한다. (생성된 배열을 다루는데 사용될 참조변수 선언)
score = new int[5] // 배열을 생성한다. (5개의 int값을 저장할 수 있는 공간 생성)
```

## 4.2. 배열의 초기화
```java
int[] score = { 100, 90, 80, 70 }; // (1)
int[] score = new int[]{ 100, 90, 80, 70 }; // (2)

String[] name = { new String("Kim"), new String("Park"), new String("Yu") }; // (2)
String[] name = { "Kim", "Park", "Yu" }; // (1)
String[] name = new String[]{ "Kim", "Park", "Yu" }; // (2)

// 배열을 초기화 할 때에는 (1) 방식을 사용하나, 
// 선언과 초기화를 따로 해야 하는 경우에는 (2) 방식 사용
```

## 4.3. 다차원 배열 & 가변 배열

| 선언방법 | 선언 예 |
| ------ | ------ |
| 타입[][] 변수이름; | int[][] score; |
| 타입 변수이름[][]; | int score[][]; |
| 타입[] 변수이름[]; | int[] score[]; |

두 번째 차원의 크기를 지정하지 않는 방식으로 **가변 배열**을 사용할 수 있다.
```java
int[][] score = new int[5][];
score[0] = new int[5];
score[1] = new int[4];
score[2] = new int[3];
score[3] = new int[2];
score[4] = new int[1];
```

## 4.4. 배열의 복사

배열 간의 내용을 복사하려면 `for`문을 사용하거나, System클래스의 `arraycopy()`를 사용하면 된다.

The syntax of `arraycopy`:
```java
System.arraycopy(arr1, 0, arr2, 0, arr1.length);
// arr1[0]에서 arr2[0]으로 arr1.length개의 데이터를 복사한다.
```

## 5. 객체지향 프로그래밍 I

## 5.1. 객체지향언어의 주요 특징

1. 코드의 재사용성이 높다.
	> 새로운 코드를 작성할 때 기존의 코드를 이용하여 쉽게 작성할 수 있다.
2. 코드의 관리가 용이하다.
	> 코드간의 관계를 이용해서 적은 노력으로 쉽게 코드를 변경할 수 있다.
3. 신뢰성이 높은 프로그래밍을 가능하게한다.
	> 제어자와 메서드를 이용해서 데이터를 보호하고 올바른 값을 유지하도록 하며,
	> 코드의 중복을 제거하여 코드의 불일치로 인한 오동작을 방지할 수 있다.


## 5.2. 클래스와 객체

> **클래스의 정의** - 객체를 정의해 놓은 것
> **클래스의 용도** - 객체를 생성하는데 사용

> **객체의 정의** - 실제로 존재하는 것. 사물 도는 개념
> **객체의 용도** - 객체가 가지고 있는 기능과 속성에 따라 다름

> **유형의 객체** - 책상, 의자, 자동차와 같은 사물
> **무형의 객체** - 수학공식, 프로그램 에러와 같은 논리나 개념


## 5.3. 객체와 인스턴스
클래스로부터 객체를 만드는 과정을 클래스의 ***인스턴스화(instantiate)***라고 하며,
어떤 클래스로부터 만들어진 객체를 그 클래스의***인스턴스(instance)***라고 한다.

## 5.4. 객채의 구성요소 - 속성과 기능

> **속성(property)** - **멤버변수(member variable)**, 특성(attribute), 필드(filed), 상태(status)
> **기능(function)** - **메서드(method)**, 행위(behavior), 함수(function)

The example of `class`:
```java
class Tv {
  // Tv의 속성(member variable)
  String color; // 색상
  boolean power; // 전원상태(on/off)
  int channel; // 채널
  
  // Tv의 기능(method)
  void power() { power != power; } // Tv를 켜거나 끄는 기능의 메서드
  void channelUp() { ++channel; } // Tv의 채널을 높이는 기능으 메서드
  void channelDown() { --channel; } // Tv의 채널을 낮추는 기능의 메서드
}

class TvTest {
  public void main(String args[]) {
    Tv t; // Tv인스턴스를 참조하기 위한 변수 t를 선언
    t = new Tv(); // Tv인스턴스를 생성
    t.channel = 7; // Tv인스턴스의 멤버변수를 channel의 값을 7로 셋팅
    t.channelDown(); // Tv인스턴스의 메서드 channelDown()을 호출, channel == 6
  }
}
```

> 인스턴스(instance)는 참조변수를 통해서만 다룰 수 있으며,
> 참조변수의 타입은 인스턴스의 타입과 일치해야 한다.

## 5.5. 변수와 메서드

```java
class Variables {
  int iv; // 인스턴스 변수(instance variable)
  static int cv; // 클래스 변수(class variable, static variable, shared variable)
	
  void method() {
  	int lv = 0; // 지역 변수(local variable)
  }
}
```

### 5.5.1. 변수

| 변수의 종류 | 선언위치 | 생성시기 |
| :------: | :------: | ------ |
| 클래스변수 <br> (class variable) | 클래스 영역 | 클래스가 메모리에 올라갈 때 |
| 인스턴스변수 <br> (instance variable) | 클래스 영역 | 인스턴스가 생성되었을 때 |
| 지역변수 <br> (local variable) | 클래스 영역 이외의 영역 <br> (메서드, 생성자, 초기화블럭 내부) | 변수 선언문이 수행되었을 때 |

> 인스턴스변수는 인스턴스가 생성될 때 마다 생성되므로 인스턴스마다 각기 다른 값을 유지할 수 있지만, 클래스 변수는 모든 인스턴스가 하나의 저장공간을 공유하므로, 항상 공통된 값을 갖는다.

### 5.5.2. 메서드
> 메서드는 어떤 작업을 수행하기 위한 명령문의 집합으로 선언부와 구현부로 나뉜다. 

- 하나의 메서드는 한 가지 기능만 수행하도록 작성하는 것이 좋다.
- 반복적으로 수행되어야 하는 여러 문장을 하나의 메서드로 정의해 놓으면 좋다.
- 관련된 여러 문장을 하나의 메서드로 만들어 놓는 것이 좋다.

The syntax:
```java
/*
리턴타입 메서드명(타입 변수명, 타입 변수명, ...) {
  // 메서드 호출시 수행될 코드
}
*/

int add(int a, int b) {
  int result = a + b;
  
  return result; // 호출한 메서드의 결과를 반환
}

void power() { // 반환값이 없는 경우 리턴타입 대신 void를 사용
  power = !power;
}
```

### 5.5.3. `return` 문

메서드가 정상적으로 종료되는 경우: 
> - 메서드의 블럭`{}`내의 마지막 문장까지 수행되었을 때
> - 메서드의 블럭`{}`내에 있는 문장을 수행 중 `return`문을 만났을 때

- 반환값이 있는 경우, 반환값은 메서드의 선엄주에 정의된 반환타입과 일치하거나, 
반환타입으로 자동형변환이 가능한 것이어야 한다.
- 메서드 내에서 `return`문을 여러 번 쓰는 것보다 가능하면 변수를 사용해서 리턴값을
저장했다가 마지막에 한 번만 사용하는 것이 좋다.


### 5.5.4. JVM의 메모리구조

1. 메서드 영역(Method area)
	> 프로그램 실행 중 어떤 클래스가 사용되면, JVM은 해당 클래스의 클래스파일(*.class)을 읽어서 분석하여 클래스에 대한 정보(클레스 데이터)를 이곳에 저장한다, 이 때, 그 클래스의 클래스변수(class variable)도 이 영역에 함께 생성된다.
2. 힙(Heap)
	> 인스턴스가 생성되는 공간. 프로그램 실행 중 생성되는 인스턴스는 모두 이곳에 생성된다. 즉, 인스턴스변수(instance variable)들이 생성되는 공간이다.
3. 호출스택(Call stack 또는 Execution stack)
	> 호출스택은 메서드의 작업에 필요한 메모리 공간을 제공한다. 메서드가 호출되면, 호출스택에 호출된 메서드를 위한 메모리가 할당되며, 이 메모리는 메서드가 작업을 수행되는 동안 지역변수(매개변수 포함)들과 연산의 중간결과 등을 저장하는데 사용된다. 그리고 메서드가 작업을 마치면 할당되었던 메모리공간은 반환되어 비워진다.

### 5.5.5. 기본형 매개변수와 참조형 매개변수

> **기본형 매개변수** - 변수의 앖을 읽기만 할 수 있다.(read only)
> **참조형 매개변수** - 변수의 값을 읽고 변경할 수 있다. (rea & write)

### 5.5.6. 클래스메서드(static method)와 인스턴스메서드(instance method)

> **인스턴스메서드** - 인스턴스변수와 관련된 작업을 하는, 즉 메서드의 작업을 수행하는데 인스턴스변수를 필요로하는 메서드이다.
> **클래스메서드** - 인스턴스와 관계없는(인스턴스변수나 인스턴스메서드를 사용하지 않는) 메서드를 클래스메서드(static method)라고 하며, 변수 선언부의 앞에 `static`을 붙인다.

- 클래스의 멤버변수 중 모든 인스턴스에 공통된 값을 유지해야하는 것이 있는지 살펴보고 있으면, `static`을 붙여준다.
- 메서드 내에서 인스턴스변수를 사용하지 않는다면, `static`을 붙여 클래스메서드로 사용한다.
	> 메서드 호출시간이 짧아지기 때문에 효율이 높아진다.

## 5.6. 메서드 오버로딩(Method overloading)
> 한 클래스 내에 같은 이름의 메서드를 여러 개 정의하는 것을
> **메서드 오버로딩** 또는 간단히 **오버로딩**이라 한다. (같은 기능 수행)

1. 메서드 이름이 같아야 한다.
2. 매개변수의 개수 또는 타입이 달라야 한다.
3. 매개변수는 같고 리턴타입이 다른 경우에는 오버로딩이 성립되지 않는다.

## 5.7. 생성자(Constructor)

> 생성자는 인스턴스가 생성될 때 호출되는 '인스턴스 초기화 메서드'이다.
> 따라서 인스턴스 변수의 초기화 작업에 주로 사용되며, 인스턴스 생성 시에 실행되어야
> 할 작업을 위해서도 사용된다.

생성자의 조건:
1. 생성자의 이름은 클래스의 이름과 같아야 한다.
2. 생성자는 리턴 값이 없다.
3. 생성자도 오버로딩(Overloading)이 가능하므로, 하나의 클래스에 여러 개의 생성자가 존재할 수 있다.

### 5.7.1. 생성자에서 다른 생성자 호출하기 - `this()`, `this`

같은 클래스의 멤버들 간에 서로 호출할 수 있는 것처럼 생성자 간에도 서로 호출이 가능하다.
단, 다음의 두 조건을 만족시켜야 한다.

- 생성자의 이름으로 클래스이름 대신 `this`를 사용한다.
- 한 생성자에서 다른 생성자를 호출할 때 반드시 첫 줄에서만 호출이 가능하다.

> `this` - 인스턴스 자신을 가리키는 참조변수, 인스턴스의 주소가 저장되어 있다. 모든 인스턴스 메서드에 지역변수로 숨겨진 채로 존재한다. 
> `this()`, `this(매개변수)` - 생성자, 같은 클래스의 다른 생성자를 호출할 때 사용된다.

### 5.7.2. 생성자를 이용한 인스턴스의 복사

```java
Car(Car c) {
  color = c.color;
  getType = c.getType;
  door = c.door;
}
```

## 5.8. 변수의 초기화

멤버변수(클래스변수와 인스턴스변수)는 초기화를 하지 않아도 자동적으로 변수의 자료형에 맞는 기본값으로 초기화가 이루어지므로 초기화하지 않고 사용해도 되지만, ++**지역변수**는 사용하기 전에 반드시 초기화를 해야한다.++

**멤버변수의 초기화 방법**
1. 명시적 초기화(Explicit initialization)
2. 생성자(Constructor)
3. 초기화 블럭(Initialization block), 인스턴스 초기화 블럭과 클래스 초기화 블럭으로 나뉜다.
	> 초기화 작업이 복잡하여 명시적 초기화만으로는 부족한 경우 초기화 블럭을 사용한다.
	> - 인스턴스 초기화 불럭이 생성자보다 먼저 수행된다.

  ```java
  class InitBlock {
    static { /* 클래스 초기화 블럭 */ }
    
    { /* 인스턴스 초기화 블럭 */ }
    
    // ...
  }
  ```

## 6. 객체지향 프로그래밍 II

## 6.1. 상속(Inheritance)

> **상속이란**, 기존의 클래스를 재사용하여 새로운 클래스를 작성하는 것이다.
> 이러한 특징은 코드의 재사용성을 높이고 코드의 중복을 제거하여 프로그램의 생산성과 유지보수에 크게 기여한다.

The Syntax:
```java
class Child extends Parent {
  // ..
}
```

> **조상 클래스** - 부모(Parent)클래스, 상위(Super)클래스, 기반(Base)클래스
> **자손 클래스** - 자식(Child)클래스, 하위(Sub)클래스, 파생된(Derived)클래스

- 생성자와 초기화 블럭은 상속되지 않는다. 멤버만 상속된다.
- 자손 클래스의 멤버 개수는 조상 클래스보다 항상 같거나 많다.
- 자손 클래스의 인스턴스를 생성하면 조상 클래스의 멤버와 자손 클래스의 멤버가 합쳐진 하나의 인스턴스로 생성된다.

### 6.1.1. 클래스간의 관계 - 포함관계

> 상속 이외에도 클래스를 재사용하는 또 다른 방법이 있는데, 그 것은 클래스 간에 '포함(Composite)'관계를 맺어 주는 것이다.
> 클래스 간의 포함관계를 맺어주는 것은 한 클래스의 멤버변수로 다른 클래스를 선언하는 것을 뜻한다.

```java
class Circle {
  int x; // 원점의 x좌표
  int y; // 원점의 y좌표
  int r; // 반지름(radius)
}

// 포함관계 적용 시

class Point {
  int x;
  int y;
}

class Circle {
  Point p = new Point(); // 원점
  int r;
}
```

### 6.1.2. 클래스간의 관계 결정하기

> **상속관계** - '~은 ~이다(is-a)'
> **포함관계** - '~은 ~을 가지고 있다(has-a)'
>> 원(Circle)은 점(Point) 이다. - Circle is a Point.
>> 원(Circle)은 점(Point)을 가지고 있다. - Circle has a Point. ** 포함관계 사용**

### 6.1.3. 단일상속(Single Inheritance)

> 자바(Java)는 다중상속(Multiple Inheritance)를 허용하지 않는다.
>> 다중상속을 허용하면 여러 클래스로부터 상속받을 수 있기 때문에 복합적인 기능을 가진 클래스를 쉽게 작성할 수 있다는 장점이 있지만, 클래스간의 관계가 매우 복잡해진다는 것과 서로 다른 클래스로부터 상속받은 멤버간의 이름이 같은 경우 구별할 수 있는 방법이 없다는 단점을 가지고 있다.

- 포함관계와 상속관계를 활용하여, 다중상속과 같은 효과를 얻을 수 있다.

### 6.1.4. Object 클래스 - 모든 클래스의 조상

> 자바의 모든 클래스들은 Object클래스의 멤버들을 상속 받기 때문에 Object클래스에 정의된 멤버들을 사용할 수 있다.

## 6.2. 오버라이딩(Overriding)

> 조상 클래스로부터 상속받은 메서드의 내용을 변경하는 것을 오버라이딩이라 한다.

오버라이딩을 성립하기 위한 조건:
> 자손 클래스에서 오버라이딩하는 메서드는 조상 클레스의 메서드와
> - 이름이 같아야 한다.
> - 매개변수가 같아야 한다.
> - 리턴타입이 같아야 한다.
>> 선언부가 서로 일치해야 한다. 다만 접근 제어자(access modifier)와 예외(exception)는 제한된 조건 하에서만 다르게 변경할 수 있다.
>> 1. 접근 제어자는 조상 클래스의 메서드보다 좁은 범위로 변경할 수 없다.
>>> `public`, `protected`, `(default)`, `private`
>> 2. 조상 클래스의 메서드보다 많은 수의 예외를 선언할 수 없다.
>> 3. 인스턴스메서드를 static메서드로 또는 그 반대로 변경할 수 없다.

### 6.2.1. 오버로딩(Overloading) vs 오버라이딩(Overriding)

> **오버로딩(Overloading)** - 기존에 없는 새로운 메서드를 정의하는 것(now)
> **오버라이딩(Overriding)** - 상속받은 메서드의 내용을 변경하는 것(change, modify)

```java
class Parent {
  void parentMethod() {}
}

class Child extends Parent {
  void parentMethod() {} // 오버라이딩(Overriding)
  void parentMethod(int i) {} // 오버로딩(Overloading)
  
  void childMethod() {}
  void childMethod(int i) {} // 오버로딩(Overloading)
  void childMethod() {} // Error. Already defined in Child.
}
```

### 6.2.2. `super`

> `super`는 자손클래스에서 조상 클래스로부터 상속받은 멤버를 참조하는데 사용되는 참조변수이다.
> 멤버변수와 지역변수의 이름이 같을 때 `this`를 사용해서 구별했듯이 상속받은 멤버와 자신의 클레스에 정의된 멤버의 이름이 같을 때는 `super`를 사용해서 구별할 수 있다.

### 6.2.3. super() - 조상클래스의 생성자

> `this()`와 마찬가지로 `super()` 역시 생성자이다. `this()`는 같은 클래스의 다른 생성자를 호출하는 데 사용되지만, `super()`는 조상 클래스의 생성자를 호출하는데 사용한다.

> Object클래스를 제외한 모든 클래스의 생성자 첫 줄에는 생성자(같은 클래스의 다른 생성자 또는 조상의 생성자)를 호출해야 한다.
> 그렇지 않으면 컴파일러가 자동적으로 `super();`를 생성자의 첫 줄에 삽입한다.

```java
class Point {
  int x;
  int y;
  
  Point(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

class Point3D extends Point {
  int z;
  
  Point(int x, int y, int z) {
    // super(); // Error.
    
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
```

## 6.3. 패키지(package)와 import

### 6.3.1. 패키지(package)

> 패키지란, 클래스의 묶음이다. 패키지에는 클래스 또는 인터페이스를 포함 시킬 수 있으며, 서로 관련된 클래스들끼리 그룹 단위로 묶어 놓음으로써 클래스를 효율적으로 관리할 수 있다.

- 하나의 소스파일에는 첫 번째 문장으로 단 한 번의 패키지 선언만을 허용한다.
- 모든 클래스는 반드시 하나의 패키지에 속해야한다.
- 패키지는 점(`.`)을 구분자로 하여 계층구조를 구성할 수 있다.
- 패키지는 물리적으로 클래스 파일(.class)을 포함하는 하나의 디렉토리이다.

The syntax of `pakage`:
```java
pacakge 패키지명;
```

**패키지명**은 대소문자를 모두 허용하지만, 클래스명과 쉽게 구분하기 위해서 **소문자**로 하는 것을 원칙으로 한다.

#### 이름없는 패키지(unnamed package)
> 소스파일에 자신이 속할 패키지를 지정하지 않은 클래스는 자동적으로 '이름없는 패키지'에 속하게 된다.

### 6.3.2. `import`문

> 소스코드를 작성할 때 다른 패키지의 클래스를 사용하려면 패키지명이 포함된 클래스 이름을 사용해야 한다. 하지만, `import`문으로 사용하고자 하는 클래스의 패키지를 미리 명시해주면 소스코드에 사용되는 클래스이름에서 패키지명은 생략할 수 있다.

일반적인 소스파일(*.java)의 구성:
> 1. package문
> 2. import문
> 3. 클래스 선언

The syntax of `package`:
```java
import 패키지명.클래스명;
// 또는
import 패키지명.*; // 지정된 패키지에 속하는 모든 클래스를 패키지명 없이 사용할 수 있다.
```

- `import`문에서 클래스의 이름 대신 '*'을 사용하는 것이 하위 패키지의 클래스까지 포함하는 것은 이다.

```java
import java.util.*;
import java.text.*;

import java.*; // 위의 두 문장 대신에 다음과 같이 사용할 수 없다.
```

### 6.4. 제어자(Modifier)

> 제어자(Modifier)는 클래스, 변수 또는 메서드의 선언부와 함께 사용되어 부가적인 의미를 부여한다.
> 
> **접근 제어자** - `public`, `protected`, `default`, `private`
> ** 그 외** - `static`, `final`, `abstract`, `native`, `transient`, `syncronized`, `volatile`, `strictfp`

### 6.4.1. `static` - 클래스의, 공통적인

> `static`이 사용될 수 있는 곳 - 멤버변수, 메서드, 초기화블럭 등

| 대상 | 의미 |
| :--: | ---- |
| 멤버변수 | - 모든 인스턴스에 공통적으로 사용되는 클래스변수가 된다. <br> - 클래스변수는 인스턴스를 생성하지 않고도 사용 가능하다. <br> - 클래스가 메모리에 로드될 때 생성된다. |
|메서드 | - 인스턴스르 생성하지 않고도 호출이 h가능한 static 메서드가 된다. <br> - static메서드 내에서는 인스턴스멤버들을 직접 사용할 수 없다. |


### 6.4.2. `final` - 마지막의, 변경될 수 없는

> `final`이 사용될 수 있는 곳 - 클래스, 메서드, 멤버변수, 지역변수 등
> 인스턴스 변수의 경우 생성자에서 초기화를 할 수 있다.


| 대상 | 의미 |
| :--: | ---- |
| 클래스 | 변경될 수 없는 클래스, 확장될 수 없는 클래스가 된다.<br> 그래서 `final`로 지정된 클래스는 다른 클래스의 조상이 될 수 없다. |
| 메서드 | 변경될 수 없는 메서드, `final`로 지정된 메서드는 오버라이딩을 통해 재정의 될 수 없다.
| 멤버변수<br> 지역변수 | 변수 앞에 `final`이 붙으면, 값을 변경할 수 없는 상수가 된다. |

### 6.4.3. `abstract` - 추상의, 미완성의

> `abstract`가 사용될 수 있는 곳 - 클래스, 메서드 등

| 대상 | 의미 |
| :--: | ---- |
| 클래스 | 클래스 내에 추상메서드가 선언되어 있음을 의미한다.
| 메서드 | 선언부만 작성하고 구현부는 작성하지 않은 추상메서드임을 알린다.

The syntax of `abstract`:
```java
abstract class AbstractTest { // 추상클래스 (추상메서드를 포함하는 클래스)
  abstract void move(); // 추상메서드 (구현부가 없는 메서드)
}
```

### 6.4.4. 접근 제어자(Access Modifier)

> 접근 제어가자 가용될 수 있는 곳 - 클래스, 멤버변수, 메서드, 생성자 등
>
>  `private` - **같은 클래스** 내에서만 접근이 가능하다.
>  `protected` - 같은 패키지 내에서, 그리고 다른 패키지의 자손클레스에서 접근이 가능하다.
>  `default` - **같은 패키지** 내에서만 접근이 가능하다.
>  `public` - 접근 제한이 전혀 없다.

| 제어자 | 같은 클래스 | 같은 패키지 | 자손클래스 | 전체 |
| :--: | :--: | :--: | :--: | :--: |
| `public` | O | O | O | O |
| `protected` | O | O | O | |
| `default` | O | O | | |
| `private` | O | | | ||

접근 범위:
> `public` > `protected` > `default` > `private`

| 대상 | 사용가능한 접근 제어자 |
| :--: | ---- |
| 클래스 | `public`, `(defalut)` |
| 메서드<br>멤버변수 | `public`, `protected`, `(default)`, `private` |
| 지역번수 | 없음 |

#### 접근 제어자(Access Modifier)를 사용하는 이유
- 외부로부터 데이터를 보호하기 위해서
- 외부에는 불필요한, 내부적으로만 사용되는, 부분을 감추기 위해서

### 6.4.5. 생성자의 접근 제어자

> 생성자에 접근 제어자를 사용함으로써 인스턴스의 생성을 제한할 수 있다.
> 생성자의 접근제어자를 `private`으로 지정하면, 외부에서 생성자에 접근할 수 없으므로 인스턴스를 생성할 수 없게 된다. 그래도 클래스 내부에서는 인스턴스의 생성이 가능하다.
> 대신 인스턴스를 생성해서 반환해주는 `public`메서드를 제공함으로써 외부에서 이 클래스의 인스턴스를 사용하도록 할 수 있다. 이 메서드는 `public`인 동시에 `static`이어야 한다.

```java
class Singleton {
  // ...
  
  /* getInstance()에서 사용될 수 있도록 인스턴스가 미리 생성되어야 하므로
     `static`이 되어야 한다. */
  private static Singleton s = new Singleton();
  
  // 인스턴스를 생성하지 않고도 호출할 수 있어야 하므로 `static`이어야 한다.
  private Singleton() {
    // ...
  }
  
  public static Singleton getInstance() {
    return s;
  }
  
  // ...
}
```

- 이처럼 생성자를 통해 직접 인스턴스를 생성하지 못하게 하고 `public`메서드를 통해 인스턴스에 접근하게 함으로써 사용할 수 있는 인스턴스의 개수를 제한할 수 있다.
- 생성자가 `private`인 클래스는 다른 클래스의 조상이 될 수 없기 때문에 클래스 앞에 `final`을 추가하여 상속할 수 없는 클래스라는 것을 알리는 것이 좋다.

### 6.4.6. 제어자(modifier)의 조합

| 대상 | 사용가능한 제어자 |
| :--: | ---- |
| 클래스 | `public`, `(default)`, `final`, `abstract` |
| 메서드 | 모든 접근제어자, `final`, `abstract`, `static` |
| 멤버변수 | 모든 접근제어자, `final`, `static` |
| 지역변수 | `final` |

## 6.5. 다형성(Polymorphism)

> 객체지향개념에서의 다형성이란 '여러 가지 형태를 가질 수 있는 능력'을 의미하며, 자바에서는 한 타입의 참조변수로 여러 타입의 객체를 참조할 수 있도록 함으로써 다형성을 프로그램적으로 구현하였음.
>
> 조상클래스 타입의 참조변수로 자손클래스의 인스턴스를 참조할 수 있도록 함.

```java
class Tv {
  boolean power;
  int channel;
  
  void power() { ... }
  void channelUp() { ... }
  void channelDown() { ... }
}

class CaptionTv extends Tv {
  String text;
  
  void caption() { ... }
}

Tv t = new CaptionTv();
CaptionTv c = new CaptionTv();

CaptionTv ct = new Tv(); // 컴파일 에러 발생
/* 실제 인스턴스인 Tv의 멤버 개수보다 참조변수 c가 사용할 수 있는 멤버 개수가 더 많기 때문 */
```

> 조상타입의 참조변수로 자손타입의 인스턴스를 참조할 수 있다.
> 반대로 자손타입의 참조변수로 조상타입의 인스턴스를 참조할 수는 없다.

### 6.5.1. 참조변수의 형변환

> 자손타입 → 조상타입 (Up-casting) : 형변환 생략가능
> 자손타입 ← 조상타입 (Down-casting) : 형변환 생략불가

> 캐스트연산자를 사용하면 서로 상속관계에 있는 클래스 타입의 참조변수간의 형변환은 양방향으로 자유롭게 수행될 수 있다.
> 그러나 참조변수가 참조하고 있는 인스턴스의 자손타입으로 형변환을 하는 것은 허용되지 않는다.

### 6.5.2. `instanceof` 연산자

> `instanceof` 연산자는 인스턴스의 실제 타입을 확인할 때 사용한다.

The syntax of `instanceof`:
` 참조변수 instanceof 타입(클래스명) `

> 어떤 타입에 대한 `instanceof`연산의 결과가 `true`라는 것은 검사한 타입으로 형변환이 가능하다는 것을 뜻한다.

### 6.5.3. 참조변수와 인스턴스의 연결

> - 멤버변수가 조상 클래스와 자손 클래스에 중복으로 정의된 경우, 조상타입의 참조변수를 사용했을 때는 조상 클래스에 선언된 멤버변수가 사용되고, 자손타입의 참조변수를 사용했을 때는 자손 클래스에 선언된 멤버변수가 사용된다.
> - 메스드의 경우 참조변수의 타입에 관계없이 항상 실제 인스턴스의 타입인 클래스에 정의된 메서드를 호출한다.

### 6.5.4. 매개변수의 다형성

> 메서드의 메개변수에 다형성을 적용하면 하나의 메서드로 간단히 처리가 가능하다.

```java
class Product {
  int money;
  int bonusPoint;
}

class Tv extends Product {}
class Radio extends Product {}

void buy(Product p) {
  money = money - p.price;
  bonusPoint = bonusPoint + p.bonusPoint;
}
```

### 6.5.5. 여러 종류의 객체를 하나의 배열로 다루기

```java
Product p1 = new Tv();
Product p2 = new Radio();

Product p[] = new Product[2];
p[1] = new Tv();
p[2] = new Radio();
```

#### 배열의 크기를 지정할 수 없는 경우 - `Vector`클래스

```java
public class Vector extends AbstractList implements List, Clonnable, java.io.Serializable {
  protected Object elementData[];
  // ...
}
```

| 메서드/생성자 | 설명 |
| ---- | ---- |
| `Vector()` | 10개의 객체를 저장할 수 있는 Vector인스턴스를 생성한다.<br>10개 이상의 인스턴스가 저장되면, 자동적으로 크기가 증가된다.|
| `boolean add(Object o)` | `Vector`에 객체를 추가한다. |
| `boolean remove(Object o)` | `Vector`에 저장되어 있는 객체를 제거한다. |
| `boolean isEmpty()` | `Vector`가 비어있는지 검사한다. |
| `Object get(int index)` | 지정된 위치(`index`)의 객체를 반환한다. (형변환 필요) |
| `int size()` | `Vector`에 저장된 객체의 개수를 반환한다. |


## 6.6. 추상클래스(abstract class)
> 추상클래스는 미완성 설계도에 비유할 수 있으며, 상속을 통해서 자손클래스에 의해서만 완성될 수 있다. 
> 추상클래스 내의 메서드는 선언부만 작성하고 구현부는 작성하지 않은 채로 남겨 두는데 이를 **추상메서드**라 한다.

The syntax of `abstract class`:
```java
abstract class 클래스이름 {
  // ...
  
  abstract 리턴아입 메서드이름(); // 선언부만 존재(구현부 없음)
}
```

> **추상화** - 클래스간의 공통점을 찾아내서 공통의 조상을 만드는 작업
> **구체화** - 상속을 통해 클래스를 구현, 확장하는 작업

## 6.7. 인터페이스(interface)

> 인터페이스는 일종의 추상클래스이다. 인터페이스는 추상클래스처럼 추상메서드를 갖지만 추상클래스보다 추상화 정도가 높아서 추상클래스와 달리 몸통을 갖춘 일반 메서드 또는 멤버변수를 구성원으로 가질 수 없다.
>> 오직 추상메서드와 상수만을 멤버로 가질 수 있으며, 그 외의 어떠허한 요소도 허용하지 않는다.

The syntax of `interface`:
```java
interface 인터페이스명 {
  public static final 타입 상수이름 = 값;
  public abstract 리턴타입 메서드명(매개변수목록);
}
```

> 모든 멤버변수는 `public static final`이어야 하며, 이를 생략할 수 있다.
> 모든 메서드는 `public abstract`이어야 하며, 이를 생략할 수 있다.
>> 생략된 제어자는 컴파일 시에 컴파일러가 자동적으로 추가해준다.

### 6.7.1. 인터페이스의 상속

> 인터페이스는 인터페이스로부터만 상속받을 수 있으며, 클래스와는 달리 다중상속,
> 즉 여러 개의 인터페이스로부터 상속을 받는 것이 가능하다.

```java
interface Movable {
  public static void move(int x, int y);
}

interface Attackable {
  public static void attack(Unit u);
}

interface Fightable extends Moveable, Attackable { }
```

### 6.7.2. 인터페이스의 구현

> 인터페이스도 추상클래스처럼 그 자체로는 인스턴스를 생성할 수 없으며, 추사을래스가 상속을 통해 추상메서드를 완성하는 것처럼, 인터페이스도 자신에 정의된 추상메서드의 몸통(구현부)을 만들어주는 클래스를 작성해야한다.
> 인터페이스를 구현하기 위해서는 `extends`가 아닌 `implements` 키워드를 사용한다.

The syntax:
```java
class 클래스명 implements 인터페이스명 {
  // 인터페이스에 정의된 모든 추상메서드를 구현해야한다.
}

class Fighter extends Unit implements Fightable {
  public void move(int x, int y) { ... }
  public void attack(Unit u) { ... }
}
```

### 6.7.3. 인터페이스를 이용한 다중상속

> '자바도 인터페이스를 이용하면 다중상소이 가능하다.'라고 하는 것일 뿐 자바에서 인터페이스로 다중상속을 구현하는 경우는 거의 없다.

> 만일 두 개의 클래스로부터 상속을 받아야 할 상황이라면, 두 조상클래스 중에서 비중이 높은 쪽을 선택하고, 다른 한쪽은 클래스 내부에 멤버로 포함시키는 방식으로 처리하거나, 어느 한쪽의 필요한 부분을 뽑아서 인터페이스로 만든 다음에 구현하도록 한다.

```java
public class Tv { }
public class VCR {
  protected int counter;
  
  public void play() { /* 내용 생략 */ }
  public int getCounter() { return counter; }
  public void setCounter(int c) { counter = c;}
  // ...
}

public interface IVCR {
  public void play();
  public int getCounter();
  public void setCounter(int c);
}

public class TVCR extends Tv implements IVCR {
  VCR vcr = new VCR();
  
  public void play() {
    vcr.play(); // 코드를 작성하는 대신 VCR인스턴스의 메서드를 호출한다.
  }
  
  public int getCounter() {
    return vcr.getCounter();
  }
  
  public void setCounter(int c) {
    vcr.setCounter(c);
  }
}
```

### 6.7.4. 인터페이스를 이용한 다형성

> 인터페이스 또한 이를 구현한 클래스의 조상이라 할 수 있으므로 해당 인터페이스 타입의 참조변수로 이를 구현한 클래스의 인스턴스를 참조할 수 있으며, 인터ㅔ이스 타입으로의 형변환도 가능하다.

```java
Fightable f = (Fightable)new Fighter();

Fightable f2 = new Fighter(); // 생략 가능
```

### 6.7.5. 인터페이스의 장점

- 개발시간을 단축시킬 수 있다.
- 표준화가 가능하다. (정형화된 프로그램의 개발 가능)
- 서로 관계없는 클래스들에게 관계를 맺어줄 수 있다.
- 독립적인 프로그래밍이 가능하다.
> 인터페이스를 이용하면 클래스의 선언과 구현을 분리시킬 수 있기 때문에 실제구현에 독립적인 프로그램을 작성하는 것이 가능하다. 클래스와 클래스간의 직접적인 관계를 인터페이스를 이용해서 간적적인 관계로 변경하면, 한 클래스의 변경이 관련된 다른 클래스에 영향을 미치지 않는 독립적인 프로그래밍이 가능하다.

### 6.7.6. 인터페이스의 이해

> - 클래스를 사용하는 쪽(User)과 클래스를 제공하는 쪽(Provider)이 있다.
> - 메서드를 사용(호출)하는 쪽(User)에서는 사용하려는 메서드(Provider)의 선언부만 알면 된다.(내용은 몰라도 된다.)


## 7. 예외처리
## 7.1. 예외처리(Exception handling)
> 정의 - 프로그램 실행 시 발생할 수 있는 예외의 발생에 대비한 코드를 작성하는 것
> 목적 - 프로그램의 비정상 종료를 막고, 정상적인 실행상태를 유지하는 것

에러의 종류 - 발생시점에 따라 구분된다.
> **컴파일 에러(Compile-time error)** - 컴파일시 발생하는 에러
> **런타임 에러(Runtime error)** - 프로그램 실행도중 발생하는 에러(`error`, `exception`)
>> **에러(error)** - 프로그램 코드에 의해서 수습될 수 없는 심각한 오류
>> **예외(exception)** - 프로그램 코드에 의해서 수습될 수 있는 다소 미약한 오류

The syntax of `exception handling`:
```java
try {
  // 예외가 발생할 가능성이 있는 문장들을 넣는다.
} catch (Exception1 e1) {
  // Exception1이 발생했을 경우, 이를 처리하기 위한 문장을 적는다.
} catch (Exception2 e2) {
  // Exception2이 발생했을 경우, 이를 처리하기 위한 문장을 적는다.
...
} catch (ExceptionN eN) {
  // ExceptionN이 발생했을 경우, 이를 처리하기 위한 문장을 적는다.
} finally {
  // 예외의 발생여부에 관계없이 항상 수행되어야하는 문장들을 넣는다.
  // finally블록은 try-catch문의 맨 마지막에 위치해야한다.
}
```

### 7.1.1. 예외 발생시키기

> 1. 먼저, 연산자 new를 이용해서 발생시키려는 예외 클래스의 객체를 만든 다음
>> `Exception e = new Exception("예외 발생");`
> 2. 키워드 `throw`를 이용해서 예외를 발생시킨다.
>> `throw e;`

### 7.1.2. 메서드에 예외 선언하기 - `throws`

The syntax:
```java
void method() throws Exception1, Exception2, ...ExceptionN {
  // ...
}
```

> 자바에서는 메서드를 작성할 때 메서드 내에서 발생할 가능성이 있는 예외를 메서드의 선언부에 명시하여 이 메스드를 사용하는 쪽에서는 이에 대한 처리를 하도록 강요하기 때문에, 프로그래머들의 짐을 덜어 주는 것은 물론이고 보다 견고한 프로그램 코드를 작성할 수 있도록 도와준다.

> 예외가 발생한 메서드에서 예외를 처리하지 않고 호출한 메서드로 넘겨주면, 호출한 메서드에서는 호출한 라인에서 예외가 발생한 것으로 건주되어 이에 대한 처리를 하게 된다.

### 7.1.3. 예외 되던지기(Exception re-throwing)

> 한 메서드에서 발생할 수 있는 예외가 여럿인 경우, 몇 개는 `try-catch`문을 통해서 메서드 내에서 자체적으로 처리하고, 그 나머지는 선언부에 지정하여 호출한 메서드에서 처리하도록 함으로써, 양쪽에서 나누어서 처리할 수 있다.
> 그리고 심지어는 단 하나의 예외에 대해서도 예외가 발생한 메서드와 호출한 메서드, 양쪽에서 처리하도록 할 수 있다.
> 
> 예외를 처리한 후에 인위적으로 다시 발생시키는 방법을 통해서 가능한데, 이것을 '예외 되던지기(exception re-throwing)'이라고 한다.

```java
class ExceptionExample {
  public static void main(String args[]) {
    try {
      method1();
    }  catch (Exception e) {
      // method1()에서 발생한 예외 처리
    }
  }
  
  static void method1() throws Exception {
    try {
      throw new Exception();
    } catch (Exception e) {
      // 메소드 내에서 자체 처리 후 예외를 호출한 메서드로 되던진다.
      
      throw e;
    }
  }
}
```

### 7.1.4. 사용자정의 예외 (User-defined Exception)

> 기존에 정의된 예외 클래스 외에 필요에 따라 프로그래머가 새로운 예외 클래스를 정의하여 사용할 수 있다.

```java
class MyException extends Exception {
  private final int ERR_CODE;
  
  MyException(String message, int errCode) {
    super(message); // 조상인 Exception클래스의 생성자를 호출한다.
    ERR_CODE = errCode
  }
  
  MyException(String message) {
    this(message, 100);
  }
  
  public int getErrCode() {
    return ERR_CODE;
  }
}
```

## 8. `java.lang` 패키지

## 8.1. `Object` class

> `Object`클래스는 모든 클래스의 최고 조상이기 때문에 `Object`클래스의 멤버들은 모든 클래스에서 바로 사용 가능하다.

| 메서드 | 설명 |
| -------- | ---- |
| `protected Object clone()` | 객체 자신의 복사본을 반환한다. |
| `public boolean equals(Object obj)` | 객체 자신과 객체 obj가 같은 객체인지 알려준다. |
| `protected void finalize()` | 객체가 소멸될 때 가비지 컬렉터에 의해 자동적으로 호출된다. 이 때 수행되어야하는 코드가 있는 경우에만 오버라이딩한다. |
| `public Class getClass()` | 객체 자신의 클래스 정보를 담고 있는 Class인스턴스를 반환한다. |
| `public int hashCode()` | 객체 자신의 해시코드를 반환한다. |
| `public String toString()` | 객체 자신의 정보를 문자열로 반환한다. |
| `public void notify()` | 객체 자신을 사용하려고 기다리는 쓰레드를 하나만 깨운다. |
| `public void notifyAll()` | 객체 자신을 사용하려고 기다리는 모든 쓰레드를 깨운다. |
| `public void wait()`<br>`public void wait(long timeout)`<br>`public void wait(long timeout, int nanos)` | 다른 쓰레드가 `notify()`나 `notifyAll()`을 호출할 때까지 현재 쓰레드를 무한히 또는 지정된 시간(timeout, nanos)둥안 기다리게 한다.

## 8.2. `String` class

> 한번 생성된 String 인스턴스가 갖고 있는 문자열은 읽어 올 수만 있고, 변경할 수 는 없다.
> 예를들어 `+`연산자를 이용해서 문자열을 결합하는 경우 인스턴스내의 문자열이 바뀌는 것이 아니라 새로운 문자열이 담긴 String인스턴스가 생성된다.

> 따라서 문자열간의 결합이나 추출 등 문자열을 다루는 작업이 많이 필요한 경우에는 String클래스 대신 StringBuffer클래스를 사용하는 것이 좋다.
> String인스턴스와는 달리 StringBuffer인스턴스에 저장된 문자열은 변경이 가능하므로 StringBuffer인스턴스만으로도 문자열을 다루는 것이 가능하다.

### 8.2.1. 빈 문자열(empty string)

```java
String s = null;
char c = '\u0000';

String s - ""; // 빈 문자열로 초기화
char c = ' '; // 공백으로 초기화
```

상세 메서드에 대한 사항은 아래 링크를 확인 바랍니다.
> [java.lang.String](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html)

문자열의 형변환: 

| 기본형 > 문자열 | 문자열 > 기본형 |
| -------- | -------- |
| `String valueOf(boolean b)`<br>`String valueOf(char c)`<br>`String valueOf(int i)`<br>`String valueOf(long l)`<br>`String valueOf(float f)`<br>`String valueOf(double d)` | `boolean` - `Boolean.getBoolean(String s)`<br>`byte` - `Byte.parseByte(String s)`<br>`short` - `Short.parseShort(String s)`<br>`int` - `Integer.parseInt(String s)`<br>`long` - `Long.parseLong(String s)`<br>`float` - `Float.parseFloat(String s)`<br>`double` - `Double.parseDouble(String s)`

## 8.3. `StringBuffer` class

> 내부적으로 문자열 편직을 위한 버퍼(buffer)를 가지고 있으며, `StringBuffer`인스턴스를 생성할 때 그 크기를 생성할 수 있다.
> 편집할 문자열의 크기를 고려하여 버퍼의 크기를 충분히 잡아주는 것이 좋다. (작업효율로 인함)

### 8.3.1. `StringBuffer`클래스의 생성자

```java
public StringBuffer(int length) {
  value = new char[length];
  shared = false;
}

public StringBuffer() {
  this(16); // 버퍼의 크기를 지정하지 않으면 버퍼의 크기는 16이 된다.
}

public StringBuffer(String str) {
  this(str.length() + 16); // 지정한 문자열의 길이보다 16이 더 크게 버퍼를 생성한다.
  append(str);
}
```

### 8.3.2. `StringBuffer`인스턴스의 비교

> StringBuffer인스턴스에 담긴 문자열을 비교하기 위해서는 StringBuffer인스턴스에 `toString()`을 호출해서 String인스턴스를 얻은 다음, 여기에 `equals`메서드를 사용해서 비교해야한다.
>> StringBuffer클래스는 `equals`메서드를 오버라이딩 하지 않는다.

상세 메서드에 대한 사항은 아래 링크를 확인 바랍니다.
> [java.lang.StringBuffer](https://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html)

## 8.4. `Math` & `Wrapper` class

### 8.4.1. `Math`클래스

상세 메서드에 대한 사항은 아래 링크를 확인 바랍니다.
> [java.lang.Math](https://docs.oracle.com/javase/7/docs/api/java/lang/Math.html)

### 8.4.2. `wapper`클래스

> 기본형(primitive type) 변수도 때로는 객체로 다루어져야하는 경우가 있다. 예를 들면, 매개변수로 객체를 요구할 때, 기본형 값이 아닌 객체로 저장해야할 때, 객체간의 비교가 필요할 때 등등의 경우에는 기본형 값들을 객체로 변환하여 작업을 수행해야한다.
> 8개의 기본형을 대표하는 8개의 wapper클래스가 있는데, 이 클래스들을 이용하면 기본형 값을 객체로 다룰 수 있다.

wrapper클래스의 생성자:

| 기본형 | 래퍼클래스 | 생성자 |
| :--: | :--: | ---- |
| `boolean` | `Boolean` | `Boolean(boolean value)`<br>`Boolean(String s)` |
| `char` | `Character` | `Character(char value)` |
| `byte` | `Byte` | `Byte(byte value)`<br>`Byte(String s)` |
| `short` | `Short` | `Short(short value)`<br>`Short(String s)` |
| `int` | `Integer` | `Integer(int value)`<br>`Integer(String s)` |
| `long` | `Long` | `Long(long value)`<br>`Long(String s)` |
| `float` | `Floot` | `Floot(double value)`<br>`Floot(float value)`<br>`Floot(String s)` |
| `double` | `Double` | `Double(double value)`<br>`Double(String s)`|


문자열을 기본형 또는 wrapper클래스로 변환하는 방법:

| 문자열 > 기본형 | 문자열 > wrapper클래스 |
| ---- | ---- |
| `byte b = Byte.parseByte("100");` | `Byte b = Byte.valueOf("100");` |
| `short s = Short.parseShort("100");` | `Short s = Short.valueOf("100");` |
| `int i = Integer.parseInt("100");` | `Integer i = Integer.valueOf("100");` |
| `long l = Long.parseLong("100");` | `Long l = Long.valueOf("100");` |
| `float f = Float.parseFloat("3.14");` | `Float f = Float.valueOf("3.14");` |
| `double d = Double.parseDouble("3.14");` | `Double d = Double.valueOf("3.14");` |

> JDK1.5부터 도입된 오토박싱(autoboxing) 기능 때문에 반환값이 기본형일 때와 wrapper클래스일 대의 차이가 없어졌다. 그래서 그냥 구별없이 `valueOf()`를 쓰는 것도 괜찮은 방법이다. 단, 성능을 비교하자면 `valueOf()`가 조금 더 느리다.

```java
int i = Integer.parseInt("100");
int i = Integer.valueOf("100");

long l = Long.parseLong("100");
long l = Long.valueOf("100");
```

### 8.4.3. Number클래스

> Number클래스 자손으로 `BigInteger`와 `BigDecimal` 등이 있는데, `BigInteger`는 `long`으로도 다룰 수 없는 큰 범위의 정수를, `BigDecimal`은 `double`로도 다룰 수 없는 큰 범위의 부동 소수점수를 처리하기 위한 것으로 연산자의 역할을 대신하는 다양한 메서드를 제공한다.


## 9. 내부 클래스

## 9.1. 내부 클래스(inner class)

> 내부 클래스는 클래스 내에 선언된 클래스로, 두 클래스 간 긴밀한 관계에 있다.

> ▶ 내부 클래스의 장점
> - 내부 클래스에서 외부 클래스의 멤버들을 쉽게 접근할 수 있다.
> - 코드의 복잡성을 줄일 수 있다.(캡슐화)

> 내부 클래스는 주로 AWT나 Swing과 같은 GUI어플리케이션의 이벤트처리 이외는 잘 사용하지 않을 정도로 사용빈도가 높지 않다.

```java
class A { // 외부 클래스
  // ...
  
  class B { // 내부 클래스
    // ...
  }
  
  // ...
}
```

## 9.2. 내부 클래스의 종류와 특징

내부 클래스의 종류와 특징:

| 내부 클래스 | 특징 |
| ---- | ---- |
| 인스턴스 클래스<br>(instance class) | 외부 클래스의 멤버변수 선언위치에 선언하며, 외부 클래스의 인스턴스멤버처럼 다루어진다. 주로 외부 클래스의 인스턴스멤버들과 관련된 작업에 사용될 목적으로 선언된다. |
| 스태틱 클래스<br>(static class) | 외부 클래스의 멤버변수 선언위치에 선언하며, 외부 클래스의 static멤버처럼 다루어진다. 주로 외부 클래스의 static멤버, 특히 static메서드에서 사용될 목적으로 선언된다. |
| 지역 클래스<br>(local class) | 외부 클래스의 메서드나 초기화블럭 안에 선언하며, 선언된 영역 내부에서만 사용될 수 있다. |
| 익명 클래스<br>(anonymous class) | 클래스의 선언과 객체의 생성을 동시에 하는 이름없는 클래스(일회용) |


## 9.3. 내부 클래스의 제어자와 접근성

> 내부 클래스도 클래스이기 때문에 `abstract`나 `final`과 같은 제어자를 사용할 수 있을 뿐만 아니라, 멤버변수들처럼 `private`, `protected`과 접근제어자도 사용이 가능하다.

> 내부 클래스 중에서 스태틱 클래스(StaticInner)만 static멤버를 가질 수 있다. 드문 경우지만 내부 클래스에 static변수를 선언해야한다면 스태틱 클래스로 선언해야한다.

>> 컴파일 했을 때 생성되는 파일명은 '**외부클래스명$내부클래스명.class**'형식으로 되어있다.

## 9.4. 익명 클래스(anonymous class)

> 익명클래스는 특이하게도 다른 내부 클래스들과는 달리 이름이 없다. 클래스 선언과 객체의 생성을 동시에 하기 때문에 단 한번만 사용될 수 있고 오직 하나의 객체만을 생성할 수 있는 일회용 클래스이다.

>> 컴파일 했을 때 익명클래스는 이름이 없기 때문에 '**외부클래스명$숫자.class**'의 형식으로 클래스파일명이 결정된다.

## 10. 컬랙션 프레임웍과 유용한 클래스

> 자바에서는 많은 수의 다양한 패키지(Java API)를 제공하여 개발자들이 자바 어플리케이션을 쉽게 개발할 수 있도록 도와준다. 그래서 자바에서 제공하는 패키지는 어떤 것들이 있는지, 이들 패ㅣ지에서는 어떤 클래스들이 있는지 아는 것이 중요하다.

**자주 사용되는 클래스**

> 1. 컬랙션 프레임웍(Collection Framework)
>> 다수의 데이터를 쉽게 처리할 수 있는 표준화된 방법을 제공하는 클래스들
> 2. 유용한 클래스 - 알아두면 좋은 자주 쓰이는 클래스들
> 3. 형식화 클래스 - 데이터를 표준화된 형식으로 출력하는데 도움을 주는 클래스들

## 10.1. 컬렉션 프레임웍(Collection Framework)

### 10.1.1 컬랙션 프레임웍의 핵심 인터페이스 - `List`, `Set`, `Map`

** 컬렉션 프레임웍의 핵심 인터페이스 간의 상속계층도**

![Collection Framework Hierarchy](https://t1.daumcdn.net/cfile/tistory/175466144CC11C2755)

**컬랙션 프레임웍의 핵심 인터페이스와 특징**

| 인터페이스 | 특징 |
| :--: | ---- |
| `List` | 순서가 있는 데이터의 집합. 데이터의 중복을 허용한다.<br>`ArrayList`, `LinkedList`, `Stack`, `Vector` |
| `Set` | 순서를 유지하지 않는 데이터의 집합. 데이터의 중복을 허용하지 않는다.<br>`HashSet`, `TreeSet` |
| `Map` | 키(key)와 값(value)의 쌍(pair)으로 이루어진 데이터의 집합으로,<br>순서는 유지되지 않으며, 키는 중복을 허용하지 않고, 값은 중복을 허용한다.<br>`HashMap`, `TreeMap`, `HashTable`, `Properties`|


1. Collection interface
	상세 메서드에 대한 사항은 아래 링크를 확인 바랍니다.
	> [java.util.Collection](https://docs.oracle.com/javase/7/docs/api/java/util/Collection.html)

2. List interface
  > [java.util.List](https://docs.oracle.com/javase/7/docs/api/java/util/List.html)

3. Set interface
  > [java.util.Set](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html)
4. Map interface
  > [java.util.Map](https://docs.oracle.com/javase/7/docs/api/java/util/Map.html)
5. Map.Entry interface
  > Map.Entry intercace는 Map interface의 내부 인터페이스이다.
  > Map에 저장되는 key-value쌍을 다루기 위해 내부적으로 Entry interface를 정의해 놓았다.
  > 
  > [java.util.Map.Entry](https://docs.oracle.com/javase/7/docs/api/java/util/Map.Entry.html)
```java
public interface Map {
  ...
  interface Entry {
    Object getKey();
    Object getValue();
    Object setValue(Object value);
    boolean equals(Object o );
    int hashCode();
  }
}
```

### 10.1.2. 동기화(Synchronization)

> 멀티쓰레드(multi-thread) 프로그래밍에서는 하나의 객체를 여러 쓰레드가 동시에 접근할 수 있기 때문에 데이터의 일관성(consistency)을 유지하기 위해서는 동기화(synchronization)가 필요하다.
>
> 필요한 경우에만 `java.util.Collections`클래스의 동기화 메서드를 이용해서 동기화 한다.

### 10.1.3. `Vector`와 `ArrayList`

> - `Vector`와 `ArrayList` 둘 다 모두 List interface를 구현한 클래스이다.
> - (`List`의 특징) 저장순서가 유지되고 중복을 허용한다.
> - 데이터의 저장공간으로 배열을 사용한다.
> - `Vector`의 경우 멀티쓰레드에 대한 동기화가 되어 있으나, `ArrayList`의 경우는 `java.util.Collections` 클래스를 이용하여 동기화 처리를 해야한다.

>> [java.util.Vector](https://docs.oracle.com/javase/7/docs/api/java/util/Vector.html)
>> [java.util.ArrayLisy](https://docs.oracle.com/javase/7/docs/api/java/util/ArrayList.html)

#### Deep Copy vs Shallow Copy

> **Shallow Copy** - 배열이나 객체를 복사할 때, 단순히 참조만 복사하는 것
> **Deep Copy** - 원본과 같은 데이터를 저장하고 있는 새로운 객체나 배열을 생성하는 것

### 10.1.4. `LinkedList`

> `LindedList`의 경우 불연속적으로 존재하는 데이터를 서로 연결(link)한 형태로 구성되며, 아래와 같은 배열의 단점으 보완하기 위하여 만들어졌다.
>> 1. 크기를 변경할 수 없다.
>> 2. 비순차적인 데이터의 추가 또는 삭제에 시간이 많이 걸린다.

> Linked list, Doubly linded list, Doubly circular linked list

>> [java.util.LinkedList](https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html)

##### ArrayList vs LinkedList

| 컬렉션 | 읽기(접근시간) | 추가/삭제 | 비고 |
| ---- | :--: | :--: | ---- |
| `ArrayList` | 빠르다 | 느리다 | 순차적인 추가삭제는 빠르나<br>비효율적인 메모리를 사용한다.|
| `LinkedList` | 느리다 | 빠르다 | 데이터가 많을수록 접근성이 떨어진다. |

> 데이터의 개수의 변경이 잦다면 `LinkedList`를 사용하는 것이 더 나은 선택이 될 수 있다.

### 10.1.5. `Stack`과 `Queue`

> `Stack` - 마지막에 저장한 데이터를 가장 먼저 꺼내는 **LIFO(Last In First Out)** 구조
>> [java.util.Stack](https://docs.oracle.com/javase/7/docs/api/java/util/Stack.html)

> `Queue` - 처음에 저장한 데이터를 가장 먼저 꺼내는 **FIFO(First In First Out)** 구조
>> [java.util.Queue](https://docs.oracle.com/javase/7/docs/api/java/util/Queue.html)

#### `Stack`과 `Queue`의 활용 범위

> - `Stack` - 수식계산, 수식괄호검사, Undo/Redo, 뒤로가기/앞으로가기
> - `Queue` - 최근사용문서, 인쇄작업 대기목록, 버퍼(buffer)

### 10.1.6. `Enumeration`, `Iterator`, `ListIterator`

> 컬랙션에 저장된 요소를 접근하는데 사용되는 인터페이스이다.

#### `Iterator`

```java
public interface Iterator {
  boolean hasNext();
  Object next();
  void remove();
}

public interface Collection {
   // ...
   public Iterator iterator();
   // ...
}
```

> `iterator()`는 Collection interface에 정의된 메서드이므로 Collection interface의 자손인 `List`와 `Set`에도 포함되어 있다.
> 따라서, 컬랙션 클레스에 대해 `iterator()`를 호출하여 `Iterator`을 얻은 다음 반복문을 사용해서 컬랙션클래스의 요소들을 읽어올 수 있다.

```java
List list = new ArrayList();

Iterator it = list.iterator();

while(it.hasNext()) {
  Object o = it.next();
  // ...
}
```

#### `Enumeration`과 `ListIterator`

> - `Enumeration`은 `Iterator`의 구버전으로 가능하면 `Iterator`을 사용하는것이 좋다.
> - `ListIterator`는 `Iterator`를 상속받아서 기능을 추가한 것으로, 컬렉션의 요소에 접근할 때 `Iterator`는 단방향으로만 이동할 수 있는 데 반해 `ListIterator`는 양방향으로의 이동이 가능하다. 다만, `ArrayList`나 `LinkedList`와 같이 `List` interface를 구현한 컬렉션에서만 사용할 수 있다.

### 10.1.7. `HashSet`

> `HashSet`은 `Set` interface를 구현한 가장 대표적인 컬렉션이며, `Set` interface의 특징으로 `HashSet`은 중복된 요소를 저장하지 않는다.
> - `LinkedHashSet`의 경우 중복을 허용하지 않는 동시에 순서를 유지한다.
>> [java.util.HashSet](https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html)

> `HashSet`의 `add`method는 새로운 요소를 추가하기 전에 기존에 저장된 요소와 같은 것인지 판별하기 위해 추가하려는 요소의 `equals()`와 `hashCode()`를 호출하기 때문에 이 두 메소드를 목적에 맞게 오버라이딩해야 한다.

### 10.1.8. `TreeSet`

> 이진검색트리(Binary search tree)라는 자료구조의 형태로 데이터를 저장하는 클래스이다.
> 이진검색트리는 정렬, 검색, 범위탐색(range search)에 뛰어난 성능을 보이는 자료구조이며,
> `TreeSet`은 이진검색트리의 성능을 향상시킨 '레드-블랙 트리(Red-Black Tree)'로 구현되어 있다.

> 중복된 데이터의 저장을 허용하지 않으며, 정렬된 위치에 저장하므로 저장순서를 유지하지도 않는다.

#### 이진검색트리(Binary search tree)
> - 모든 노드는 최대 두 개의 자식노드를 가질 수 있다.
> - 왼쪽 자식노드의 값은 부모노드의 값보다 작고, 오른쪽자식노드의 값은 부모노드의 값보다 커야한다.
> - 노드의 추가 삭제에 시간이 걸린다. (순차저장이 아닌 방식이기 때문)
> - 검색과 정렬에 유리하다. (저장시 정렬된 위치에 저장하기 때문)

### 10.1.9. `Comparator`와 `Comparable`

> `Comparable`와 `Comparable`은 모두 인터페이스로 객체들을 정렬 또는 이진검색트리를 구성하는데 필요한 메서드를 정의하고 있다.

> - `Comparable` - 기본 정렬기준을 구현하는데 사용. (`java.lang`)
> - `Comparator` - 기본 정렬기준 외에 다른 기준으로 정렬하고자 할 때 사용 (`java.util`)

```java
public interface Comparable {
  public int compareTo(Object o);
}

public interface Comparator {
  int compare(Object o1, Object o2); // (*)
  boolean equals(Object obj);
}
```

The example of usage:
```java
import java.util.*

class ComparatorExample {
  public staic void main(String args) {
    TreeSet set1 = new TreeSet();
    TreeSet set2 = new TreeSet(new Decending());
    
    int[] score = {30, 50, 10, 20, 40};
    
    for (int i = 0; i < score.length; i++) {
      set1.add(new Integer(score[i]));
      set2.add(new Integer(score[i]));
    }
    
    System.out.println("set1 : " + set1);
    System.out.println("set2 : " + set2);
  }
}

class Decending implements Comparator {
  public int compare(Object o1, Object o2) {
    if ( o1 instanceof Comparable && o2 instanceof Comparable ) {
      Comparable c1 = (Comparable)o1;
      Comparable c2 = (Comparable)o2;
      
      return c1.compareTo(c2) * -1;
    }
  }
}
```


### 10.1.10. `Hashtable`과 `HashMap`

> `HashMap`은 `Map`을 구현했으므로 앞에서 살펴본 `Map`의 특징, 키(key)와 값(value)를 묶어서 하나의 데이터(entry)로 저장한다는 특징을 갖는다. 또한, 해싱(hashing)을 사용하기 때문에 많은 양의 데이터를 검색하는데 있어서 뛰어난 성능을 보인다.
>> [java.util.HashMap](https://docs.oracle.com/javase/7/docs/api/java/util/HashMap.html)

> - 키(key) - 컬렉션 내의 키(key) 중에서 유일해야 한다.
> - 값(value) - 키(key)와 달리 데이터의 중복을 허용한다.

> `HashMap`은 데이터의 키와 값을 모두 `Object`타입으로 저장하기 때문에 `HashMap`의 값(value)으로 `HashMap`을 다시 저장할 수 있다. 이렇게 함으로써 하나의 키에 다시 복수의 데이터를 저장할 수 있다.

#### 해싱(Hashing)
> 해싱이란 해시함수(hash function)를 이용해서 데이터를 해시테이블(hash table)에 저장하고 검색하는 기법을 말한다. 해시한수는 데이터가 저장되어 있는 곳을 알려주기 때문에 다량의 데이터 중에서도 원하는 데이터를 빠르게 찾을 수 있다.
>> `HashMap`에 저장된 데이터를 찾는 과정:
>> 1. 검색하고자 하는 값의 키로 해시함수를 호출한다.
>> 2. 해시함수의 계산결과인 해시코드를 이용해서 해당 값이 저장되어 있는 링크드리스트를 찾는다.
>> 3. 링크드리스트에서 검색한 키와 일치하는 데이터를 찾는다.
>>> 하나의 링크드리스트에 최소한의 데이터만 저장되려면, 저장될 데이터의 크기를 고려해서 `HashMap`의 크기를 적절하게 지정해주어야 하고, 해시함수가 서로 다른 키에 대해서 중복된 해시코드의 반환을 최소화해야 한다.

### 10.1.11. `TreeMap`

> 이름에서 알 수 있듯이 이진검색트리의 형태로 키와 값의 쌍으로 이루어진 데이터를 저장한다. 그래서 검색과 정렬에 적합한 컬렉션 클래스이다.
> 검색에 관한한 대부분의 경우에서 `HashMap`이 `TreeMap`보다 더 뛰어나므로 `HashMap`을 사용하는 것이 좋다. 다만 범위검색이나 정렬이 필요한 경우에는 `TreeMap`을 사용하자.

>> [java.util.TreeMap](https://docs.oracle.com/javase/7/docs/api/java/util/TreeMap.html)

### 10.1.12. `Properties`

> `Properties`의 경우 키와 값을 `(Object, Object)`의 형태로 저장하는 `HashMap`와는 다르게 `(String, String)`의 형태로 저장하는 보다 단순화된 컬렉션 클래스이다.
> 주로 어플리케이션의 환경설정과 관련된 속성(property)를 저장하는데 사용하며, 데이터를 파일로부터 읽고 쓰는 편리한 기능을 제공한다.

### 10.1.13. 컬렉션 클래스 정리 & 요약

![java의정석 2nd edition](https://t1.daumcdn.net/cfile/tistory/1546C7404F0291EB2A)

| 컬렉션 | 특징 |
| ---- | ---- |
| `ArrayList` | 배열기반, 데이터의 추가와 삭제에 불리, 순차적인 추가삭제는 제일 빠름.<br>임의의 요소에 대해 접근성(accessibility)이 뛰어남. |
| `LinkedList` | 연결기반, 데이터의 추가와 삭제에 유리, 임의의 요소에 대한 접근성이 좋지 않다. |
| `HashMap` | 배열과 연결이 결합된 형태, 추가, 삭제, 검색, 접근성이 모두 뛰어남, 검색에는 최고성능을 보인다. |
| `TreeMap` | 연결기반, 정렬과 검색(특히 범위검색)에 적합. 검색성능은 `HashMap`보다 떨어진다. |
| `Stack` | `Vector`을 상속받아 구현 |
| `Queue` | `LinkedList`가 `Queue`인터페이스를 구현 |
| `Properties` | `Hashtable`을 상속받아 구현 |
| `HashSet` | `HashMap`을 이용해서 구현 |
| `TreeSet` | `TreeMap`을 이용해서 구현 |
| `LinkedHashMap`<br>`LinkedHashSet` | `HashMap`과 `HashSet`에 저장순서유지기능을 추가하였음. |


## 10.2. 유용한 클래스들 (Skiped)

## 10.3. 형식화 클래스

> 형식화 클래스는 `java.text`패키지에 포함되어 있으며, 숫자, 날짜 ,텍스트 데이터를 일정한 형식에 맞게 표현할 수 있는 방법을 객체지향적으로 설계하여 표준화한 클레스이다.


| 클래스 | 특징 |
| :--: | ---- |
| `DecimalFormat` | 숫자 데이터를 정수, 부동소수점, 금액 등의 다양한 형식으로 표현할 수 있도록 지원 |
| `SimpleDateFormat` | `Date`와 `Calendar`의 날짜 데이터를 원하는 표현할 수 있도록 지원 |
| `ChoiceFormat` | 특정 범위에 속하는 값을 문자열로 변환하고자 할 때 사용 |
| `MessageFormat` | 데이터를 정해진 양식에 맞게 출력할 수 있도록 지원 |


## 10.4. 제네릭스(Generics)

> **제네릭스(Generics)**란 다양한 타입의 객체들을 다루는 메서드나 컬렉션의 클래스에 컴파일 시의 타입 체크(compile-time type check)를 해주는 기능이다. 객체의 타입을 컴파일 시에 체크하기 대문에 객체의 타입 안정성을 높이고 형변환의 번거로움이 줄어든다.

> ▶ 제네릭스의 장점
> 1. 타입 안정성을 제공한다.
> 2. 타입체크와 형변환을 생략할 수 있으므로 코드가 간결해진다.

> - `T` - 타입(type), `T`는 어떠한 참조형 타입도 가능하다는 것을 의미한다.
> - `E` - 요소(element)
> - `K` - 키(key)
> - `V` - 값(value)
>> 이들은 기호의 종류만 다를 뿐 **'임의의 참조형 타입'**을 의미한다는 것은 모두 같다.

### 10.4.1. `ArrayList<E>`

The Syntax of `ArrayList<E>`:
```java
// 컬렉션클래스<저장할 객체의 타입> 변수명 = new 컬렉션클래스<저장할 객체의 타입>();

ArrayList<Tv> = new ArrayList<Tv>();
```

The usage of `?`:
```java
public static printAll(ArrayList<? extends Product> list1, ArrayList<? extends Product> list2) {
  // ...
}

// 'T'라는 타입이 Product의 자손타입이라는 것을 미리 정의해놓고 사용
public static <T extends Product> printall(ArrayList<T> list1, ArrayList<T> list2) {
  // ...
}
```

### 10.4.2. `Iterator<E>`

```java
public interface Iterator<E> {
  boolean hasNext();
  E next();
  void remove();
}
```

### 10.4.3. `Comparable<T>`과 `Collections.sort()`

```java
public interface Comparable<T> {
  public int compareTo(T o);
}
```

The syntax of `Collections.sort()`:
```java
public static <T extends Comparable<? super T>> void sort(List<T> list)
```

> `<? extends T>` - T 또는 T의 자손 타입을 의미한다.
> `<? super T>` - T 또는 T의 조상 타입을 의미한다.

### 10.4.4. `HashMap<K, V>`

## 11. 쓰레드

## 11.1. 프로세스와 쓰레드

> - **프로세스(Process)** - 실행중인 프로그램. 운영체제로부터 자원을 할당받는 작업의 단위
> - **쓰레드(Thread)** - 프로세스가 할당받은 자원을 이용해서 실제로 작업을 수행하는 실행의 단위
>> 멀티쓰레드 프로세스(Multi-threaded process) - 둘 이상의 쓰레드를 가진 프로세스

### 11.1.1. 메모리 영역(Code, Data, Heap, Stack)

| 영역 | 설명 |
| :--: | ---- |
| 코드(Code) 영역 | 프로그램의 코드 자체가 적재되는 영역(프로그램 자체 영역) |
| 데이터(Data) 영역 | 프로그램이 실행되면서 필요한 변수(global var, static var)가 저장되는 영역<br>종료시까지 유지되는 변수를 위한 영역 |
| 힙(Heap) 영역 | Reference type(참조 타입)을 위한 영역<br>가비지 컬렉터에 의해 소멸됨 |
| 스택(Stack) 영역 | Primitive type(기본 타입)을 위한 영역<br>함수 내에 정의된 변수(Local var)를 위한 영역 |

### 11.1.2. Multi Process vs Multi Thread

> 멀티 프로세스와 멀티 쓰레드는 모두 '동시에 두 가지 이상의 루틴을 실행할 수 있는 역할'을 한다.

> 멀티 스레드가 멀티 프로세스에 비해 가지는 이점
> 1. 컨텍스트 스위칭(Context switching)시에 공유 메모리 만큼의 시간(자원)의 손실이 줄어든다.
> 2. 스택(Stack) 영역을 제외한 나머지 영역을 공유하여 효율적인 일처리가 가능하다.

> 하지만, 공유 자원 사용에 따른 발생할 수 있는 동기화에 주의해야 하며, 교착상태와 같은 문제가 발생하지 않도록 주의해야 한다.
>> 교착상태 - 두 쓰레드가 자원을 점유한 상태에서 서로 상대편이 점유한 자원을 사용하려고 기다리느라 진행이 멈춰있는 상태

## 11.2. 쓰레드의 구현과 실행

#### `Thread` 클래스 상속
```java
class MyThread extends Thread {
  public void run() { /* 작업내용 */ }
}

class MyThreadEx {
  public static void main(String args[]) {
    MyThread t = MyThread();
    t.start();
  }
}
```

#### `Runnable` 인터페이스 구현
```java
class MyThread implements Runnable {
  public void run() { /* 작업내용 */ }
}

class MyThreadEx {
  public static void main(String args[]) {
    Runnable r = new MyThread();
    Thread t = new Thread(r);

    t.start();
  }
}
```

> 한 번 사용한 쓰레드는 다시 재사용이 불가능하다. 즉, 하나의 쓰레드에 대해 `start()`가 한 번만 호출될 수 있다.
> 한 번 더 작업이 수행되어야 한다면 새로운 쓰레드를 생성 한 다음에 `start()`를 호출해야 한다.

## 11.3. `start()`와 `run()`

> `start()`는 새로운 쓰레드가 작업을 실행하는데 필요한 호출스택(call stack)을 생성한 다음에 `run()`을 호출해서, 생성된 호출스택에 `run()`이 첫 번째로 저장되게 한다.
> 모든 쓰레드는 독립적인 작업을 수행하기 위해 자신만의 호출스택을 필요로 하기 때문에, 새로운 쓰레드를 생성하고 실행시킬 때마다 새로운 호출스택이 생성되고 쓰레드가 종료되면 작업에 사용된 호출스택은 소멸된다.
>> 쓰레드 간에는 스택(Stack) 영역을 제외한 나머지 메모리 영역은 공유 됨

## 11.4. 싱글쓰레드와 멀티쓰레드

![Single-Multi-Thread](https://t1.daumcdn.net/cfile/tistory/233F943B5819887D0C)

> 두 개의 작업을 처리할 때 **싱글 쓰레드**의 경우 하나의 작업을 마친 후 다른 작업을 시작하지만,
> **멀티 쓰레드**의 경우 짧은 시간동안 2개의 쓰레드가 번갈아 가면서 동시에 두 작업을 처리한다.
>> 컨텍스트 스위칭(Context switching) - 쓰레드간의 작업전환시 현재 진행중인 작업의 상태,
>> 예를 들면 다음에 실행해야할 위치(PC, 프로그램 카운터) 등의 정보를 저장하고 읽어오는데 시간이 소요된다.
>> - 참고로 쓰레드의 스위칭에 비해 프로세스의 스위칭이 더 많은 정보를 저장해야하므로 더 많은 시간이 소요된다.(멀티쓰레드의 이점)

## 11.5. 쓰레드의 우선순위

> 쓰레드는 **우선순위(priority)**라는 속성(멤버변수)을 가지고 있는데, 이 우선순위의 값에 따라 쓰레드가 얻는 실행시간이 달라진다.

```java
void setPriority(int newPrioirty) { /* ... */ };
int getPriority() { /* ... */ };

public static final int MAX_PRIORITY = 10; // 최대 우선순위 (높을수록 우선순위가 높음)
public static final int MIN_PRIORITY = 1; // 최소 우선순위
public static final int NORM_PRIORITY = 5;
```

## 11.6. 쓰레드 그룹(thread group)

> 서로 관련된 쓰레드를 그룹으로 묶어서 관리할 수 있음
> 쓰레드 그룹은 보안상의 이유로 도입된 개념으로, 자신이 속한 쓰레드 그룹이나 하위 쓰레드 그룹은 변경할 수 있지만 다른 쓰레드 그룹의 쓰레드를 변경할 수 는 없다.
>> `ThreadGroup`

**쓰레드를 쓰레드 그룹에 포함하기** - `Thread`의 생성자 이용
```java
Thread(ThreadGroup group, String name)
Thread(ThreadGroup group, Runnable target)
Thread(ThreadGroup group, Runnable target, String name)
Thread(ThreadGroup group, Runnable target, String name, long stackSize)
```

## 11.7. 데몬 쓰레드(daemon thread)

> 데몬 쓰레드는 다른 일반 쓰레드의 작업을 돕는 보조적인 역할을 수행하는 쓰레드이다.
> 일반 쓰레드가 모두 종료되면 데몬 쓰레드는 강제적으로 자동 종료되는데, 그 이유는 데몬 쓰레드는 일반 쓰레드의 보조역할을 수행하므로 일반 쓰레드가 모두 종료되고 나면 데몬 쓰레드의 존재가 없의가 없어지기 때문이다.
>> [Examples] 가비지 컬렉터, 자동저장기능, 화면자동갱신 등

```java
boolean isDeamon() { /* ... */ } // 쓰레드가 데몬 쓰레이드인지 확인하는 메서드
void setDaemon(boolean on) { /* ... */ } // 쓰레드를 데몬 쓰레드로 또는 일반 쓰레드로 변경한다.
```

## 11.8. 쓰레드의 실행제어

> 효율적인 멀티쓰레드를 만들기 위해서는 보다 정교한 스케줄링을 통해 프로세스에게 주어진 자원과 시간을 여러 쓰레드가 낭비없이 잘 사용하도록 프로그래밍 해야한다.


#### 쓰레드의 상태

| 상태 | 설명 |
| ---- | ---- |
| NEW | 쓰레드가 생성되고 아직 `start()`가 호출되지 않은 상태 |
| RUNNABLE | 실행 중 또는 실행 가능한 상태 |
| BLOCKED | 동기화블럭에 의해서 일시정지된 상태(lock이 풀릴 때까지 기다리는 상태) |
| WAITING,<br>TIMED_WAITING | 쓰레드의 작업이 종료되지는 않았지만 실행가능하지 않은(unrunnable) 일시정지 상태. TIME_WAITING은 일시정지시간이 지정된 경우를 의미한다. |
| TERMINATED | 쓰레드의 작업이 종료된 상태 |

## 11.9. 쓰레드의 동기화

> 멀티쓰레드 프로세스의 경우 여러 쓰레드가 같은 프로세스 내 자원을 공유해서 작업하기 때문에 서로의 작업에 영향을 주지 않게하기 위해서 **동기화** 처리를 해야한다.

### 11.9.1. `syncronized`를 이용한 동기화

> 키워드 `synchronized`는 해당 작업과 관련된 공유데이터에 lock을 걸어서 먼저 작업중이던 쓰레드가 작업을 완전히 마칠 때까지 다른쓰레드에게 제어권이 넘어가더라도 데이터가 변경되지 않도록 보호함으로써 쓰레드의 동기화를 가능하게 한다.

1. 특정한 객체에 lock을 걸고자 할 때

```java
synchronized(객체의 참조변수) {
  // ...
}
```

2. 메서드에 lock을 걸고자 할 때

```java
public synchronized void calcSum() {
  // ...
}
```

### 11.9.2. `wait()`과 `notify()`

> ▶ `wait()`, `notify()`, `notifyAll()`
> - Object에 정의되어 있다.
> - 동기화 블록(synchronized block) 내에서만 사용 가능하다.
> - 보다 효율적인 동기화를 가능하게 한다.

> ▶ 실행 과정
> 1. 쓰레드가 `wait()`을 호출하면 그 때까지 자신이 객체에 걸어 놓았던 모든 lock을 풀고, `wait()`이 호출된 객체의 대기실(wating pool)에서 기다리게 된다.
> 2. 다른 쓰레드에 의해서 그 객체에 대해 `notify()` 또는 `notifyAll()`을 호출하면 객체의 대기실을 벗어나서 다시 실행대기상태, 즉 객체의 waiting pool을 벗어나 실행대기 열에서 자신이 실행될 차례를 기다리는 상태가 된다.


## 12. 입출력(I/O)

## 12.1. 자바에서의 입출력

### 12.1.1 스트림(stream)

> **스트림**이란? 데이터를 운반하는데 사용되는 연결통로를 말한다.

### 12.1.2. 바이트기반 스트림 - `InputStream`, `OutputStream`

####입출력 대상에 다른 입력/출력스트림의 종류

| 입력스트림 | 출력스트림 | 입출력 대상의 종류 |
| -------- | -------- | -------- |
| `FileInputStream` | `FileOutputStream` | 파일 |
| `ByteArrayInputStream` | `ByteArrayOutputStream` | 메모리(byte배열) |
| `PipedInputStream` | `PipedOutputStream` | 프로세스(프로세스간의 통신) |
| `AudioInputStream` | `AudioOutputStream` | 오디오장치 |

#### `InputStream`과 `OutputStream`에 정의된 읽기와 쓰기를 수행하는 메서드

| InputStream | OutputStream |
| ------------- | -------------- |
| `abstract int read()` | `abstract void write(int b)` |
| `int read(byte[] b)` | `void write(byte[] b)` |
| `int read(byte[] b, int off, int len)` | `void write(byte[] b, int off, int len)` |

### 12.1.3. 보조스트림

> 보조스트림은 실제 데이터를 주고받는 스트림이 아니기 때문에 데이터를 입출력할 수 있는 기능은 없지만, 스트림의 기능을 향상시키거나 새로운 기능을 추가할 수 있다.

#### 보조스트림의 종류
| 입력 | 출력 | 설명 |
| ---- | ---- | ---- |
| `FilterInputStream` | `FilterOutputStream` | 필터를 이용한 입출력 처리 |
| `BufferedInputStream` | `BufferedOutputStream` | 버퍼를 이용한 입출력 처리 |
| `DataInputStream` | `DataOutputStream` | `int`, `float`과 같은 기본형 단위로 데이터를 처리하는 기능 |
| `SequenceInputStream` | `SequenceOutputStream` | 두 개의 스트림을 하나로 연결 |
| `LineNumberInputStream` | 없음 | 읽어 온 데이터의 라인 번호를 카운트 |
| `ObjectInputStream` | `ObjectOutputStream` | 데이터를 객체단위로 읽고 쓰는데 사용.<br>주로 파일을 이용하며 객체 직렬화와 관련있음 |
| 없음 | `PrintStream` | 버퍼를 이용하며, 추가적인 print관련 기능<br>(print, printf, println메서드 제공) |
| `PushbackInputStream` | 없음 | 버퍼를 이용해서 읽어 온 데이터를 다시 되돌리는 기능<br>(unlead, push back to buffer) |

### 12.1.4. 문자기반 스트림 - `Reader`, `Writer`

> Java에서는 한 문자를 의미하는 char형이  1 byte가 아니라 2byte이기 때문에 바이트기반 스트림으로 2byte인 문자를 처리하는데 어려움이 따른다. 이 점을 보완하기 위해서 문자기반의 스트림이 제공된다.
>> 문자데이터를 입출력할 때는 바이트기반 스트림 대신 문자기반 스트림을 이용하자.
<table><tr><td>InputStream</td><td> → </td><td>Reader</td></tr><tr><td>OutputStream</td><td> → </td><td>Writer</td></tr></table>

#### 바이트기반 스트림과 문자기반 스트림의 비교

| 바이트기반 스트림 | 문자기반 스트림 |
| ---- | ---- |
| `FileInputStream`<br>`FileOutputStream` | `FileReader`<br>`FileOuter` |
| `ByteArrayInputStream`<br>`ByteArrayOutputStream` | `CharArrayReader`<br>`CharArrayWriter` |
| `PipedInputStream`<br>`PipedOutputStream` | `PipedReader`<br>`PipedWriter` |
| `StringBufferInputStream`<br>`StringBufferOutputStream`<br>**`(deprecated)`** | `StringReader`<br>`StringWriter` |

#### 문자기반 스트림에 정의된 읽기와 쓰기를 수행하는 메서드

| Reader | Writer |
| ------ | ------ |
| `int read()` | `void write(int c)` |
| `int read(char[] cbuf)` | `void write(char[] cbuf)` |
| `abstract int read(char[] cbuf, int off, int len)` | `abstract void write(char[] cbuf, int off, int len)` |
|  | `void write(String str)` |
|  | `void write(String, int off, int len)` |


#### 문자기반 보조스트림

| 입력 | 출력 |
| --- | --- |
| `BufferedReader` | `BufferedWriter` |
| `FilterReader` | `FilterWriter` |
| `LineNumberReader` |  |
|  | `PrintWriter` |
| `PushbackReader` | | |

## 12.2. 바이트기반 스트림

## 12.2.1. `InputStream`과 `OutputStream`
> - [java.io.InputStream](https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html)
> - [java.io.OutputStream](https://docs.oracle.com/javase/7/docs/api/java/io/OutputStream.html)

## 12.2.2. `ByteArrayInputStream`과 `ByteArrayOutputStream`

> 메모리, 즉 바이트배열에 데이터를  입출력 하는데 사용되는 스트림이다. 주로 다른 곳에 입출력하기 전에 데이터를 임시로 바이트배열에 담아서 변환 등의 작업으 하는데 사용된다.

> - [java.io.ByteArrayInputStream](https://docs.oracle.com/javase/7/docs/api/java/io/ByteArrayInputStream.html)
> - [java.io.ByteArrayOutputStream](https://docs.oracle.com/javase/7/docs/api/java/io/ByteArrayOutputStream.html)

## 12.2.3. `FileInputStream`과 `FileOutputStream`

> 파일의 입출력을 위한 스트림으로 실제로 많이 사용되는 스트림 중의 하나이다.

> - [java.io.FileInputStream](https://docs.oracle.com/javase/7/docs/api/java/io/FileInputStream.html)
> - [java.io.FileOutputStream](https://docs.oracle.com/javase/7/docs/api/java/io/FileOutputStream.html)

## 12.3. 바이트기반 보조스트림

### 12.3.1. `FilterInputStream`과 `FilterOutputStream`

> `InputStream`/`OutputStream`의 자손이면서 모든 보조스트림의 조상이다.

> `FilterdInputStream`의 자손 - `BufferdInputStream`, `DataInputStream`, `PushbackInputStream` 등
> `FilterdOutputStream`의 자손 - `BufferedOutputStream`, `DataOutputStream`, `PrintStream` 등

### 12.3.2. `BufferedInputStream`과 `BufferedOutputStream`

> 스트림의 입출력 효율을 높이기 위해 버퍼를 사용하는 보조스트림이다. 한 바이트씩 입력하는 것 보다는 버퍼(바이트배열)를 이용해서 한 번에 여러 바이트를 입출력하는 것이 빠르기 때문에 대부분의 입출력 작업에 사용된다.

> 생성자를 통한 인스턴스 생성 시 버퍼의 사이즈를 지정하지 않으면 기본적으로 8192 byte 크기의 버퍼를 갖게 된다.

> `BufferedOutputStream`의 경우 버퍼가 가득 찼을 때만 출력소스에 출력을 하기 때문에, 마지막 출력부분이 출력소스에 쓰여지도록 `close()`나 `flush()`를 호출해야한다.

### 12.3.3. `DataInputStream`과 `DataOutputStream`

> `DataInputStream`/`DataOutputStream`은 각각 `DataInput`/`DataOutput`인터페이스를 구현하였으며, 데이터를 읽고 쓰는데 있어서 byte단위가 아닌, 8가지 기본 자료형의 단위로 읽고 쓸 수 있다는 장점이 있다.

### 12.3.4. `SequenceInputStream`

> 여러 개의 입력스트림을 연속적으로 연결해서 하나의 스트림으로부터 데이터를 읽는 것과 같이 처리할 수 있도록 지원하는 스트림이다.

### 12.3.5. `PrintStream`

> 데이터를 기반스트림에 대양한 형태로 출력할 수 있는 `print`, `println`, `printf`와 같은 메서드를 오버로딩하여 제공한다.

> `PrintStream`과 `PrintWriter`는 거의 같은 기능을 가지고 있지만 `PrintWriter`가 `PrintStream`에 비해 다양한 언어의 문자를 처리하는데 적합하기 때문에 가능하면 `PrintWriter`를 사용하는 것이 좋다.

## 12.4. 문자기반 스트림

### 12.4.1. `Reader`과 `Writer`

> byte배열 대신 char배열을 사용한다는 것 외에는 `InputStream`/`OutputStream`의 메서드와는 다르지 않다.

> 문자기반 스트림이라는 것이 단순히 2 byte로 스트림을 처리하는 것만을 의미하지는 않는다. 문자 데이터를 다루는데 필요한 또 하나의 정보는 인코딩(encoding)이다.
> 문자기반 스트림, 즉 `Reader`/`Writer` 그리고 그 자손들은 여러 종류의 인코딩과 자바에서 사용하는 유니코드간의 변환을 자동적으로 처리해준다.

### 12.4.2. `FileReader`와 `FileWriter`

> 파일로부터 텍스트데이터를 읽고, 파일에 쓰는데 사용된다.

### 12.4.3. `PipedReader`와 `PipedWriter`

> 쓰레드 간에 데이터를 주고받을 때 사용한다. 다른 스트림과는 달리 입력과 출력스트림을 하나의 스트림으로 연결(connect)해서 데이터를 주고받는다는 특징이 있다.

### 12.4.4. `StringReader`와 `StringWriter`

> `CharArrayReader`/`CharArrayWriter`와 같이 입출력 대상이 메모리인 스트림이다.

## 12.5. 문자기반의 보조스트림

### 12.5.1. `BufferedReader`와 `BufferedWriter`

> 버퍼를 이용해서 입출력의 효율을 높일 수 있도록 해주는 역할을 한다. 버퍼를 이용하면 입출력의 효율이 비교할 수 없을 정도로 좋아지기 때문에 사용하는 것이 좋다.
> - `BufferedReader`의 `readLine()`을 사용하면 데이터를 라인단위로 읽어올 수 있다는 장점이 있다.

### 12.5.2. `InputStreamReader`와 `OutputStreamWriter`

> 바이트기반 스트림을 문자기반 스트림으로 연결시켜주는 역할을 한다.
> 그리고 바이트기반 스트림의 데이터를 지정된 인코딩의 문자데이터로 변환하는 작업을 수행한다.

## 12.6. 직렬화(Serialization)

> **직렬화(Serialization)** - 객체를 데이터 스트림으로 만드는 것을 뜻한다. 다시 얘기하면 객체에 저장된 데이터를 스트림에 쓰기(write)위해 연속적인(serial) 데이터로 변환하는 것을 말한다.
> 반대로 스트림으로부터 데이터를 읽어서 객체를 만드는 것을 역직렬화(deserialization)이라 한다.

####'객체를 저장한다'의 의미
객체를 저장한닫는 것은 객체의 모든 인스턴스변수의 값을 저장한다는 것과 같은 의미를 뜻한다.

####어떻게 직렬화를 해야할까?
객체를 직렬화/역직렬화 할 수 있는 `ObjectInputStream`과 `ObjectOutputStream`을 이용하면 된다.

### 12.6.1. `OutputInputStream`과 `ObjectOutputStream`

> - 직렬화(스트림에 객체를 출력) - `ObjectOutputStream` 사용
> - 역직렬화(스트림으로부터 객체를 입력) - `ObjectInputStream` 사용

```java
ObjectInputStream(InputStream in)
ObjectOutputStream(OutputStream out)
```

> - [ObjectInputStream](https://docs.oracle.com/javase/7/docs/api/java/io/ObjectInputStream.html)
> - [ObjectOutputStream](https://docs.oracle.com/javase/7/docs/api/java/io/ObjectOutputStream.html)

####직렬화 작업시간 단축
직렬화 작업시간을 단축시키려면 직렬화하고자 하는 객체의 클래스에 추가적으로 다음과 같은 2개의 메서드를 직접 구현해주어야 한다.

```java
private void writeObject(ObjectOutputStream out) throws IOException {
  // write메서드를 사용해서 직렬화를 수행한다.
}

private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
  // read메서드를 사용해서 역직렬화를 수행한다.
}
```

### 12.6.2. 직렬화가 가능한 클래스 만들기 - `Serializable`, `transient`

> 직렬화가 가능한 클래스가 만드는 방법은 간단하다. 직렬화하고자 하는 클래스가 `java.io.Serializable` 인터페이스를 구현하도록 하면 된다.
>> `Serializable` 인터페이스는 아무런 내용도 없는 빈 인터페이스지만, 직렬화를 고려하여 작성한 클래스인지를 판단하는 기준으로 사용한다.
>> 단, `Serializable`을 구현한 클래스를 상속받을 경우 별도의 구현이 필요하지 않다.
>> `public interface Serializable { }`

#### 직렬화 대상에서 재외하기
> 직렬화하면 안되는 값에 대하여 `transient`를 사용하면 된다.
> `transient`를 붙이면 인스턴스변수의 값은 그타입의 기본값으로 직렬화 된다.

#### 직렬화/역직렬화 시 고려사항
객체를 역직렬화 할 때는 직렬화할 때의 순서와 일치시켜야 한다. 예를들어 직렬화 할 때 `paramMap1`, `paramMap2`, `list`의 순서로 처리하였다면, 역직렬화 시에도 마찬가지로 `paramMap1`, `paramMap2`, `list`의 순서로처리해야 한다.
> 직렬화할 객체가 많을 때는 각 객체를 개별적으로 직렬화하는 것보다 `ArrayList`와 같은 컬렉션에 저장해서 직렬화하는 것이 좋다. (순서를 고려하지 않아도 되기 때문)

####직렬화되지 않은 조상으로부터 상속받은 인스턴스변수 직렬화

```java
private void writeObject(ObjectOutputStream out) throws IOException {
  // ...
  // out.writeUTF(name);
  // out.writeUTF(password);
  out.defaultWriteObject();
}

private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
  // ...
  // name = in.readUTF();
  // password = in.readUTF();
  in.defaultReadObject();
}
```

# 12.6.3. 직렬화가능한 클래스의 버전관리

> 직렬화된 객체를 역직렬화할 때는 직렬화 했을 때와 같은 클래스를 사용해야한다. 그러나 클래스의 이름이 같더라도 클래스의 내용이 변경된 경우 역질렬화는 실패하게 된다.
>> `serialVersionUID`

#### 수동으로 클래스의 버전을 관리하기

아래와같이 `serialVersionUID`를 정의해주면, 클래스의 내용이 바뀌어도 클래스의 버전이 자동생성된 값으로 변경되지 않는다.

```java
class MyData implements java.io.Serializable {
  static final long serialVersionUID = 192038109238910710L;
  int value1;
}
```

> `serialVersionUID`의 값은 정수값이면 어떠한 값으로도 지정할 수 있지만 서로 다른 클래스 간에 같은 값을 갖지 않도록 `serialver.exe`를 사용해서 생성된 값을 사용하는것이 보통이다.

## 13. 네트워킹(Networking)

## 13.1. 네트워킹(Networking)

### 13.1.1. 클라이언트/서버(client/server)

> 서버(server) - 서비스를 제공하는 컴퓨터(service provider)
> 클라이언트(client) - 서비스를 사용하는 컴퓨터(service user)

####서버기반 모델과 P2P모델간의 비교
| 서버기반 모델(server-based model) | P2P 모델(peer-to-peer model) |
| ---- | ---- |
| - 안정적인 서비스의 제공이 가능하다.<br>- 공유 데이터의 관리와 보안이 용이하다.<br>- 서버구축비용과 관리비용이 든다. | - 서버구축 및 운용비용을 절감할 수 있다.<br>- 자원의 활용을 극대화할 수 있다.<br>- 자원의 관리가 어렵다.<br>- 보안이 취약하다.

### 13.1.3. InetAddress
### 13.1.4. URL(Uniform Resource Location)

> http://www.devchun.com:80/study/java.html?user=csyu#index1
>> **프로토콜** - 자원에 접근하기 위해 서버와 통신하는데 사용되는 통신규약(http)
>> **호스트명** - 자원을 제공하는 서버의 이름(www.devchun.com)
>> **포트번호** - 통신에 사용되는 서버의 포트번호(80)
>> **경로명** - 접근하려는 자원이 저장된 서버상의 위치(/study/)
>> **파일명** - 접근하려는 자원의 이름(java.html)
>> **쿼리(query)** - URL에서 '?'이후의 부분(user=csyu)
>> **참조(anchor)** - URL에서 '#'이후의 부분(index1)

### 13.1.5. URLConnection

> 어플리케이션과 URL간의 통신연결을 나타내는 클래스의 최상위 클래스로 추상클래스이다.

####URL로부터 지정된 위치로 파일 다운로드 처리

```java
import java.net.*;
import java.io.*;

public class FileDownloadFromUrl {
  public static void main(String args[]) {
    URL url = null;
    InputStream in = null;
    FileOutputStream out = nuill;
    String address = "http://www.devchun.com/downloads/file1.zip";
    
    int ch = 0;
    
    try {
      url = new URL(address);
      in = url.openStream();
      out = new FileOutputStream("file1.zip"); // 경로를 지정해도 됨
      
      while((ch = in.read()) != -1) {
        out.write(ch);
      }
      in.close();
      out.close();
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
}
```

## 13.2. 소켓프로그래밍

> 소켓프로그래밍이란 소켓을 이용한 통신 프로그래밍을 뜻하는데, 소켓(socket)이란 프로세스간의 통신에 사용되는 양쪽 끝단(endpoint)을 의미한다.

### 13.2.1. TCP와 UDP

####TCP와 UDP의 비교
| 항목 | TCP | UDP |
| :--: | ---- | ---- |
| 연결방식 | 연결기반(connection-oriented)<br>- 연결 후 통신(전화기)<br>- 1:1 통신방식 | 비연결기반(connectionless-oriented)<br>- 연결 없이 통신(소포)<br>- 1:1, 1:n, n:n 통신방식 |
| 특징 | 데이터의 경계를 구분안함 (byte-stream)<br>신뢰성 있는 데이터 전송<br>- 데이터의 전송순서가 보장됨<br>- 데이터의 수신여부를 확인함<br>(손실 시 재전송)<br>- 패킷을 관리할 필요가 없음<br>UDP보다 전송속도가 느림 | 데이터의 경계를 구분함 (datagram)<br>신뢰성 없는 데이터 전송<br>- 데이터의 전송순서가 바뀔 수 있음<br>- 데이터의 수신여부를 확인안함<br>(손실여부 확인 불가)<br> - 패킷을 관리해주어야 함<br>TCP보다 전송속도가 빠름 |
| 관련 클래스 | `Socket`, `ServerSocket` | `DatagramSocket`, `DatagramPacket`,<br> `MulticastSocket` |

### 13.2.2. TCP소켓 프로그래밍

####서버-클라이언트 간 통신과정
> 1. 서버프로그램에서는 서버소켓을 사용하여 서버 컴퓨터의 특정 포트에서 클라이언트의 연결요청을 처리할 준비를 한다.
> 2. 클라이언트 프로그램은 접속할 서버의 IP주소와 포트 정보를 가지고 소켓을 생성해서 서버에 연결을 요청한다.
> 3. 서버소켓은 클라이언트의 연결요청을 받으면 서버에 새로운 소켓을 생성해서 클라이언트의 소켓과 연결되도록 한다.
> 4. 이제 클라이언트의 소켓과 새로 생성된 서버의 소켓은 서버소켓과 관계없이 일대일 통신을 한다.

**소켓**은 두 개의 스트림, 입력스트림과 출력스트림을 가지고 있으며, 이 스트림들은 연결된 상대편 소켓의 스트림들과 교차연결된다.

> `Socket` - 프로세스간의 통신을 담당하며, `InputStream`과 `OutputStream`을 가지고 있다. 이 두 스트림을 통해 프로세스간의 통신(입출력)이 이루어진다.
> `ServerSocket` - 포트와 연결(bind)되어 외부의 연결요청을 기다리다 연결요청이 들어오면, `Socket`을 생성해서 소켓과 소켓간의 통신이 이루어지도록 한다. 한 포트에 하나의 `ServerSocket`만 연결할 수 있다. (프로토콜이 다르면 같은 포트 공유 가능)

### 13.2.3. UDP소켓 프로그래밍

> UDP소켓 프로그래밍에서는 `DatagrmSocket`과 `DatagramPacket`을 사용한다.
> `DatagramPacket`은 헤더와 데이터로 구성되어 있으며, 헤더에는 `DatagramPacket`을 수신할 호스트의 정보(호스트의 주소와 포트)가 저장되어 있다.























































