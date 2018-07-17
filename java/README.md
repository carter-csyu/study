# JAVA

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

### 7.7.7. 인터페이스의 장점

- 개발시간을 단축시킬 수 있다.
- 표준화가 가능하다. (정형화된 프로그램의 개발 가능)
- 서로 관계없는 클래스들에게 관계를 맺어줄 수 있다.
- 독립적인 프로그래밍이 가능하다.
> 인터페이스를 이용하면 클래스의 선언과 구현을 분리시킬 수 있기 때문에 실제구현에 독립적인 프로그램을 작성하는 것이 가능하다. 클래스와 클래스간의 직접적인 관계를 인터페이스를 이용해서 간적적인 관계로 변경하면, 한 클래스의 변경이 관련된 다른 클래스에 영향을 미치지 않는 독립적인 프로그래밍이 가능하다.

### 7.7.8. 인터페이스의 이해

> - 클래스를 사용하는 쪽(User)과 클래스를 제공하는 쪽(Provider)이 있다.
> - 메서드를 사용(호출)하는 쪽(User)에서는 사용하려는 메서드(Provider)의 선언부만 알면 된다.(내용은 몰라도 된다.)


## 8. 예외처리
## 8.1. 예외처리(Exception handling)
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

### 8.1.1. 예외 발생시키기

> 1. 먼저, 연산자 new를 이용해서 발생시키려는 예외 클래스의 객체를 만든 다음
>> `Exception e = new Exception("예외 발생");`
> 2. 키워드 `throw`를 이용해서 예외를 발생시킨다.
>> `throw e;`

### 8.1.2. 메서드에 예외 선언하기 - `throws`

The syntax:
```java
void method() throws Exception1, Exception2, ...ExceptionN {
  // ...
}
```

> 자바에서는 메서드를 작성할 때 메서드 내에서 발생할 가능성이 있는 예외를 메서드의 선언부에 명시하여 이 메스드를 사용하는 쪽에서는 이에 대한 처리를 하도록 강요하기 때문에, 프로그래머들의 짐을 덜어 주는 것은 물론이고 보다 견고한 프로그램 코드를 작성할 수 있도록 도와준다.

> 예외가 발생한 메서드에서 예외를 처리하지 않고 호출한 메서드로 넘겨주면, 호출한 메서드에서는 호출한 라인에서 예외가 발생한 것으로 건주되어 이에 대한 처리를 하게 된다.

### 8.1.3. 예외 되던지기(Exception re-throwing)

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

### 8.1.4. 사용자정의 예외 (User-defined Exception)

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
