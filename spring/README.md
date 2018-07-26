# 스프링 프레임워크

## 목차(Table of Contents)

1. 스프링(Spring)
2. 스프링 프로젝트(Spring project)
3. DI(Dependency Injection)
4. Spring JDBC
5. MyBatis
6. AOP(Aspect Oriented Programming)
7. Spring MVC

## 1. 스프링(Spring)

#### 스프링 프레임워크

스프링 프레임워크는 자바 애플리케이션 개발을 위한 포괄적인 인프라스트럭처를 제공하는 자바 플랫폼이다.

#### 특징

- 자바 객체 관리 경량급 컨테이너
- POJO방식의 프레임워크
- 제어역전(IoC, Inversion of control) 지원
- 의존성 주입(DI, Dependency injection) 지원
- 관점지향 프로그래밍(AOP, Aspect oriented programming) 지원
- 다양한 API 및 연동 지원

## 1.1. 자바 객체 관리 경량급 컨테이너

- 객체의 생성, 소멸과 같은 라이프사이클 관리
>	각각의 객체 생성과 소멸과 같은 라이프사이클을 관리하며, 스프링으로부터 필요한 객체를 직접 받아올 수 있다.

- 경량급 컨테이너
> EJB와 비교하여 비슷한 기술 수준을 제공하면서, 훨씬 빠르고 간편하게 작성할 수 있으므로 생산성과 품질 측면에서 유리하다.

## 1.2. POJO방식의 프레임워크

- POJO(Plain Old Java Object)
- 환경과 기술에 종속되지 않고 필요에 따라 재활용될 수 있는 방식으로 설계된 오브젝트
- 자바의 기본인 객체지향에 충실한 설계가 가능하도록 단순한 오브젝트로 개발

## 1.3. 제어역전(IoC)

- IoC(Inversion of Control)
- 개발자가 직접 객체를 생성하고 의존관계를 연결시키는 방식이 아닌, 스프링 컨테이너가 이에 대한 제어권을 가지고 라이프사이클을 전담
- IoC의 경우 EJB와 같이 이전에도 사용되던 개념으로, 스프링만의 특장점은 아님

## 1.4. 의존성 주입(DI)

- DI(Dependency Injectoin)
- 각 계층, 각 클래스 간 의존관계를 Bean 설정(Bean definition) 정보를 바탕으로 컨테이너가 자동적으로 연결
- 빈 설정파일(저장소 관리 파일)에서 의존 관계가 필요하다는 정보를 추가
- 설정자 주입(Setter Injection)과 생성자 주입(Constructor Injection)

## 1.5. 관점 지향 프로그래밍(AOP)

- AOP(Abstract oriented programming)
- 핵심관심사항(Core concerns)과 공통관심사항(Crosscutting concerns)을 분리함으로써 불필요한 중복을 줄이고 프로그래밍의 효율을 높임
- 공통관심사항(Crosscutting concerns) - 로깅, 보안, 트랜잭션

## 1.6. 다양한 API 및 연동 지원

- 스프링은 데이터베이스 처리를 위해 널리 사용되는 iBatis/MyBatis 와의 연동을 지원함

## 1.7. Spring Framework Architecture

![Spring Framework Architecture](https://docs.spring.io/spring/docs/3.0.x/spring-framework-reference/html/images/spring-overview.png)


![Spring Framework Architecture](http://wiki.javajigi.net/download/attachments/3664/spring-overview.gif)

#### Spring Core

- 스프링의 근간이되는 IoC(or DI) 기능을 지원하는 영역 담당
- `BeanFactory`를 기반으로 Bean클래스들을 제어할 수 있는 기능을 제공

#### Spring Context

- Spring Core와 Beans모듈에서 제공하는 단단한 기반 위에 구성
- Spring Core에서 지원하는 기능 외에 좀 더 쉽게 개발할 수 있도록 지원하는 역할 수행
- JNDI, EJB등을 위한 Adaptor를 포함 함

#### Spring DAO

- JDBC 기반 하의 DAO 개발을 좀 더 쉽고, 일관된 방법으로 개발할 수 있도록 지원

#### Spring ORM

- ORM(Object relation mapping) 프레임워크인 Hibernate, MyBatis, JDO와의 결합을 지원하기 위한 기능을 제공

#### Spring AOP

- AOP(Aspect oriented programming)을 지원하는 기능 수행

#### Spring Web

- 웹 어플리케이션 개발에 필요한 Web Application Context와 Multipart request등의 기능 제공
- Struts, Webwork와 같은 프레임워크의 통합을 지원하는 부분을 담당

#### Spring Web MVC

- 스프링프레임워크에서 독립적으로 Web UI Layer에 MVC(Model-View-Controller)를 지원하기 위한 기능
- 지금까지 Struts, Webwork가 담당했던 기능들을 Spring Web MVC를 이용하여 대체 가능
- 또한, Velocity, Excel, PDF와 같은 다양한 UI 기술들을 사용하기 위한 API를 제공


## 2. Spring Project

## 2.1. Spring Container

- Bean의 생성과 소멸을 담당
- Bean 생성 시 필요한 속성을 설정
- Bean의 Life Cycle에 관련된 메소드를 호출
- BeanFactory
	- 가장 단순한 컨테이너, Bean 객체를 관리하고 Bean 객체 간 의존관계를 설정
	- 구현 클래스: `XmlBeanFactory`
- ApplicationContext
	- AOP, 메세지, 국제화 지원
	- 구현 클래스: `ClassPathXmlApplicationContext`
- WebApplicationContext
	- 웹 어플리케이션을 위한  ApplicationContext
	- 구현 클래스: `XmlWebApplicationContext`, `AnnotationConfigWebApplicationContext`

> << interface >>
> `BeanFactory` ← `ApplicationContext` ← `WebApplicationContext`

## 2.2. Bean

- Spring Container에 의해 관리되는 객체
- 컨테이너에 제공되는 설정 메타데이터 내 정의에 의해 생성

| 주요속성 | 설명 |
| ---- | ---- |
| id | Bean의 구분을 위한 정보로 Bean에 접근하기 위한 식별자로 사용 됨 |
| class | 정의된 Bean의 실제 구현클래스 |
| scope | 정의된 Bean의 인스턴스 생성 유형 정의<br>singleton, prototype, request, session, globalSession 중 선택<br>(default, singleton) |
| init-method | 해당 Bean이 초기화된 후 context에 저장되기 전 호출되는 초기화 메서드 정의 |
| destroy-method | 해당 Bean 제거시 호출되는 메서드 정의 |
| factory-method | 해당 Bean 생성 시 생성자를 사용하지 않고 특정 factory method를 호출하여 생성 시 정의 |
| lazy-init | true/false 값을 가지며 해당 Bean이 호출되기 전에 초기화 시킬지 여부 결정<br>(default, `false`), `true`인 경우 해당 Bean이 호출되는 시점에 초기화 됨 |

## 2.3. 설정 메타데이터(Configuration Metadata)

- 보통 직관적인 xml 형태로 제공됨

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
  <bean id="…" class="…">
    <!-- collaborators and configuration for this bean go here -->
  </bean>
  <!-- more bean definitions go here -->
</beans>
```

## 3. DI(Dependency Injection)

## 3.1. Dependency Injection (DI)

- 각 계층, 각 클래스 간 의존관계를 컨테이너가 자동으로 연결
- 느슨한 결합(Loose coupling)이 주요 강점
>	객체는 Interface에 의한 의존관계만을 알고 있으며, 이 의존관계는 구현 클래스에 대한 차이를 모르는 채, 서로 다른 구현으로 대체가 가능하다.

## 3.2. 설정자(Setter)를 이용한 DI

- 컨테이너 빌드 시, property 태그를 설정해 줌으로써, Setter를 통한 의존성 주입이 가능
- `<property>`: 속성, 하위 태그를 통해서 설정 가능

#### 속성

| 속성 | 설명 |
| ---- | ---- |
| name | 설정할 property의 이름(setter의 이름) |
| ref | 설정할 bean 객체를 선택 |
| value | 설정할 값 |

```xml
<bean id="musicPlayer" class="music.MusicPlayer">
	<property name="music" ref="danceMusic"></property>
</bean>
<bean id="danceMusic" class="music.DanceMusic"></bean>
```

```java
public class MusicPlayer {
  private Music music;
  
  /*
    'name`은 Setter메서드에서 set을 제외한 이름의 첫글자를 소문자로 바꾼 이름
  */
  public void setMusic(Music music) {
    this.music = music;
  }
}
```

#### 하위태그

- `<ref bean="" />`: bean 객체 주입시
- `<value>값</value>`: 특정 값 설정시
	- `type`속성: 값의 type를 명시해야 하는 경우 사용

## 3.3. 생성자(Constructor)를 이용한 DI

- 컨테이너 빌드 시, constructor-arg 태그를 설정해 줌으로써, constructor를 통한 의존성 주입이 가능
- `<constructor-arg>`: `<bean>`의 하위태그, 하나의 argument를 지정하여 값을설정, 속성과 하위 태그를 이용하여 설정 가능

#### 속성

| 속성 | 설명 |
| ---- | ---- |
| name | 설정할 property의 이름(setter의 이름) |
| ref | 설정할 bean 객체를 선택 |
| value | 설정할 값 |

```xml
<bean id="musicPlayer" class="music.MusicPlayer">
  <constructor-arg name="music" ref="hiphopMusic"></constructor-arg>
</bean>
<bean id="hiphopMusic" class="music.HiphopMusic"></bean>
```

```java
public class MusicPlayer {
  Music music;
  
  /*
    parameter가 여러 개일 경우 주입하고자 하는 parameter와 같은 이름으로 설정
  */
  public MusicPlayer(Music music) {
    this.music = music;
  }
}
```

#### 하위태그

- `<ref bean="" />`: bean 객체 주입시
- `<value>값</value>`: 특정 값 설정시
	- `type`속성: 값의 type를 명시해야 하는 경우 사용

## 3.4. Collection 객체 주입

- `<property>`와 `<constructor-arg>` 태그의 하위 태그를 이용하여 Collection 객체를 주입 가능

#### 하위 태그

- `<list>`: List
- `<map>`: Map (key-value)
- `<set>`: Set
- `<prop>`: Properties (ket(String)-value(String))

### 3.4.1. `<list>`

- 속성: `value type = ""`: 값의 type
- 하위태그: `<ref>`, `<value>`: 속성 type

```xml
<bean id="musicPlayer" class="music.MusicPlayer">
  <property name="musicList">
    <list>
      <ref bean="danceMusic" />
      <ref bean="hiphopMusic" />
    </list>
  </property>
</bean>
<bean id="danceMusic" class="music.DanceMusic"></bean>
<bean id="hiphopMusic" class="music.HiphopMusic"></bean>
```

### 3.4.2. `<map>`

- 속성: key-type, value-type 타입을 고정시킬 경우
- 하위태그: `<entry>`: 속성 key, value, value-ref

```xml
<bean id="musicPlayer" class="music.MusicPlayer">
  <property name="musicMap">
    <map>
      <entry key="myMusic" value="123" />
      <entry key="myMusic2" value-ref="hiphopMusic" />
    </map>
  </property>
</bean>
```

### 3.4.3. `<set>`

- 속성: value-type 값의 type
- 하위태그: `<ref bean>`, `<value>`

```xml
<bean id="musicPlayer" class="music.MusicPlayer">
  <property name="musicSet">
    <set>
      <value>10</value>
      <value>20</value>
      <ref bean="danceMusic" />
    </set>
  </property>
</bean>
```

### 3.4.4. `<props>`

- 하위태그 `<prop>` 속성: key -> key 값 설정

```xml
<bean id="myDao" class="db.DBConnection">
  <property name="jdbcProperty">
    <props>
      <prop key="driver">JDBC Driver</prop>
      <prop key="url">jdbc:url://127.0.0.1/mydb</prop>
      <prop key="user">admin</prop>
    </props>
  </property>
</bean>
```

## 4. Spring JDBC

- Spring JDBC - JDBC, ORM 프레임워크 등의 다양한 기술을 이용해 손쉽게 DAO클래스를 구현할 수 있도록 지원

| 행동 | Spring | 개발자 |
| --- | :---: | :---: |
| DB 연결에 필요한 parameter 정의 |  | O |
| DB 연결(Connection) | O |  |
| SQL 구문 상세 정의 |  | O |
| parameter의 선언 및 parameter 값 전달 |  | O |
| 실행 구문 준비 | O |  |
| 다수의 결과를 위한 결과를 반복하는 루프를 설정 | O |  |
| 각 결과에 대한 작업 |  | O |
| 예외 처리 | O |  |
| Transaction 관리 | O |  |
| DB 연결, Statement, ResultSet 닫기(Close) | O | 　 |

#### jdbcTemplate

- 구문 생성 및 실행
- 결과 추출 코드 제공
- DB Connection 등의 리소스 관리

#### DataSource

- DB 연결을 위한 정보집합

## 4.1. Spring JDBC example

#### DataSource

```xml
<bean id ="datasource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
  <property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
  <property name="url" value="jdbc:mysql://localhost:3306/test"></property>
  <property name="username" value="root"></property>
  <property name="password" value="password"></property>
</bean>
```

#### jdbcTemplate

```xml
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
  <property name="datasource" ref="datasource"></property>
</bean>
```

## 5. MyBatis

## 5.1. Mybatis

- XML과 annotation을 이용하여 SQL문과 프로시져 매핑을 지원하는 퍼시스턴스 프레임워크
- MyBatis는 JDBC로 처리하는 상당부분의 코드와 파라미터 설정 및 결과 매핑을 대신해줌

## 5.2. MyBatis 구성

#### 환경설정 파일

- MyBatis 전반에 걸친 셋팅 정보
- DB Connection 정보
- Model Class 정보
- 매핑정보

#### 매핑설정 파일

- 사용할 SQL문에 대한 정의

### 어플리케이션(DAO)

- Session 빌드 및 사용
- 실제 SQL문 실행

## 5.3. MyBatis 사용

- MyBatis 설정 파일 (사용할 모델 클래스에 대한 정보)

```xml
<typeAliases>
  <typeAlias type="model.Member" alias="member" />
</typeAliases>
```

> `type="model.Member"`: Model Class로 사용할 Class의 full path<br>
> `alias="member"`: Model Class를 사용하기 위한 alias 지정

```xml
<environments default="development">
  <environment id="development">
    <transactionManager type="MANAGED"></transactionManager>
    <dataSource type="UNPOOLED">
      <property name="driver" value="com.mysql.jdbc.Driver" />
      <property name="url" value="jdbc:mysql://localhost:3306/test" />
      <property name="username" value="root" />
      <property name="password" value="password" />
    </dataSource>
  </environment>
</environments>
```

> `<environments default="development">`: 사용할 DB접속 정보<br>
> `<transactionManager type="MANAGED">`: JDBC(수동), MANAGED(자동)<br>

```xml
<mappers>
  <mapper resource="dao/memberMapper.xml" />
</mappers>
```

> `<mapper resource="dao/memberMapper.xml" />`: 매핑정보 파일 위치

- Mapper file 구성

`memberMapper.xml`:

```xml
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="dao.memberMapper">
<!-- 여기에 사용할 sql을 등록해 두고 SqlSession을 통해서 호출 합니다. -->
  <select id="selectOne" parameterType="string" resultType="member">
    <!-- memberMapper.xml - selectOne -->
    select *
      from member
     where id = #{id}
  </select>
  
  <select id="selectAll" resultType="member">
    <!-- memberMapper.xml - selectAll -->
    select *
      from member
  </select>
  
  <insert id="insertMember" parameterType="member">
    <!-- memberMapper.xml - insertMember -->
    insert into member values(#{id}, #{email}, #{password})
  </insert>
  
  <update id="updateMemberEmail" parameterType="member">
    <!-- memberMapper.xml - updateMemberEmail -->
    update member
       set email = #{email}
     where id = #{id}
  </update>
</mapper>
```

> `namespace`: 포함하는 SQL 구문을 구분하기 위해 패키지 경로를 포함한 전체 이름을 사용해야 함

- SqlSession

#### SQlSession 역할

- SQL 구문 실행
- Transaction 관리
- Mapper 획득
- SqlSession 획득 순서
> SqlSessionFactoryBuilder 객체를 생성하고 이를 이용하여 설정파일의 설정을 통해 SqlSessionFactory 객체 획득(build)<br>
> SqlSessionFactory 객체를 이용하여 필요할 때 SqlSession 획득

** DAO 객체는 SqlSessionFactory를 멤버로 유지하면서 필요할때마다 SqlSession을 Open하여 사용하고, Close한다. **

```java
public class memberDao {
  private SqlSessionFactory sqlSessionFactory;
  
  public memberDao() {
    InputStream is = null;
    
    try {
      is = Resources.getResourceAsStream("configuration.xml");
      sqlSessionFactory = new SqlSessionFactoryBuilder().build(is);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
  
  // ...
}
```

SqlSession 획득 및 사용:
```java
public void updateMemberEmail(Member member) {
  SqlSession session = sqlSessionFactory.openSession();
  session.update("dao.memberMapper.updateMemberEmail", member);
}
```

## 5.4. Spring - MyBatis

- MyBatis에서 사용하는 SqlSessionFactory, SqlSession, 이를 위해 설정한 값들을 Spring 컨테이너에 등록하여 사용한다.

#### SqlSessionTemplate

- SQlSession Interface의 구현 클래스
- 기본적인 트랜잭션이나 쓰레드 처리의 안전성을 보장
- 데이터베이스의 연결과 종료를 책임

`SqlSessionFactoryBean`:
```xml
<bean id ="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
  <property name="dataSource" ref="dataSource"></property>
  <property name="typeAliasesPackage" value="model"></property>
  <property name="mapperLocations" value="classpath*:dao/mapper/**/*.xml"></property>
</bean>
```

> `typeAliasPackage`: typeAliasPackage 속성을 패키지 단위로 설정해 줌으로써, 해당 패키지 안의 모든 model 클래스를 alias로 사용 가능<br>
> `mapperLocation`: 명시한 조건의 파일을 매퍼로 인식하게 해줌.

```xml
<bean id="sqlSession" class="org.mybatis.spring.SqlSessionTemplate">
  <constructor-arg name="sqlSessionFactory" ref="seqlSessionFactory" />
</bean>
```

```xml
<bean id="memberDao" class="org.mybatis.spring.mapper.MapperFactoryBean">
  <property name="mapperInterface" value="dao.IMemberDao"></property>
  <property name="sqlSessionTemplate" ref="sqlSession"></property>
</bean>
```

## 6. AOP

## 6.1. AOP(Aspect Oriented Programming)

#### Application의 두 가지 관점

- 핵심 관심 사항(core concern)
> 시스템의 핵심가치와 목적이 드러난 영역

- 공통 관심 사항(cross-cutting concern)
> 부가적이지만 시스템의 완성도를 높여주는 기능 제공(ex. 로깅, 보안검사, 트랜잭션 처리 등)

#### AOP가 적용되지 않은 프로그램의 문제점

- 코드중복
> 중복되는 공통관심사항(Cross-cutting concern) 코드
- 지저분한 코드
> 핵심관심사항(Core concern)코드 사이에 들어가는 공통관심사항 코드
- 재활용성 저하
- 생산성 저하
> 각 모듈에서 공통으로 등장하는 공통관심사항에 대하여 같이 작업을 해야 하기 때문에 모듈별 작업에 한계가 존재

## 6.2. AOP 구성요소

- target
> 핵심관심사항이 구현된 객체
- JoinPoint
> 공통관심사항 모듈이 삽입되어 동작할 수 있는 특정 위치
- Pointcut
> 공통관심사항의 모듈이 어느 JoinPoint 사용할 지 결정하는 선택 기능
- Advice
> 각 JoinPoint 삽입되어 동작할 수 있는 실제 구현 코드
- CrossCutting (Weaving)
> 핵심관심사항 모듈 사이 사이에 공통관심사항 코드가 엮어지게 만드는 기능<br>
> 세 가지 시점(컴파일 시점, 로딩 시점, 런타임 시점) 방식이 존재
- Aspect
> 어디(Pointcut)에서 무엇(Advice)을 할 것인지 합쳐 놓은 것


#### Advice 종류

- before
> target 메서드 호출 이전
- after
> target 메서드 호출 이후 무조건 실행
- after returning
> target 메서드 정상동작 후 실행
- after throwing
> target 메서드 에러 발생 후 실행
- around
> target 메서드 호출 이전, 이후 모두


## 6.3. AOP 관련용어

#### Proxy Pattern

- 실제 기능이 구현된 target 객체를 호출하면 target이 직접호출 되지 않고 target을 감싸고 있는 proxy에 의해 target이 호출 됨
- 이러한 구조로 advice가 적용되어 만들어진 객체를 ** proxy 객체 **라 한다.

## 6.4. Spring AOP

- AOP 처리를 위해 Proxy 기법을 사용
- 스프링에서는 자체적으로 런타임시 위빙하는 ** "프록시 기반의 AOP" **를 지원

> - XML 스키마 기반의 POJO 클래스를 이용한 AOP 구현<br>
> - Annotation 기반 AOP 구현

#### Advice에 따른 표현식

| Advice 종류 | XML | Annotation |
| :----: | :----: | :----: |
| Before | `<aop:before>` | `@Before` |
| After | `<aop:after>` | `@After` |
| After Returning | `<aop:after-returing>` | `@AfterReturning` |
| After Throwing | `<aop:after-throwing>` | `@AfterThrowing` |
| Around | `<aop:around>` | `@Around` |

## 6.5. Spring AOP 시작하기

#### 필요 Library

- aspectj rt
- aspectj weaver
- spring-aop
- spring-core
- spring-context

#### XML 기반의 Aspect 정의

- Advice를 정의한 클래스를 bean으로 정의해두고, 해당 bean을 `<aop:config>`내의 `<aop:aspect>`에서 참조하는 형태로 Aspect를 정의

```java
public class MyAspect {
  // ...
  public void before(JoinPoint jp) [
    System.out.println(jp.getSignature() + "시작");
    System.out.println(jsp.getTarget());
  ]
  // ...
}
```

`applicationContext.xml`:
```xml
<bean id="myAspect" class="MyAspect"></bean>

<aop:config>
  <aop:aspect ref="myAspect">
    <aop:pointcut expression="execution(public String *.doSomething())" id="mypt" />
    <aop:before method="before" pointcut-ref="mypt" />
    
    <aop:after-returning method="after_returning" pointcut-ref="mypt" returning="msg" />
    <aop:after-throwing method="after_throwing" pointcut-ref="mypt" throwing="th" />
    <!-- ... -->
  </aop:aspect>
</aop:config>
```

#### Annotation 기반 Aspect 정의

- `@Aspect` Annotation으로 해당 클래스가 Aspect임을 정의

`MyAspect.java`:
```java
@Component
@Aspect
public class MyAspect {
  // ...
  
  @Pointcut("execution(public * *.doSomething())")
  public void mypt() {}
  
  @Before("mypt()")
  public void before(JoinPoint jp) {
    // ...
  }
  
  @AfterReturing(pointcut="mypt()", returning="msg")
  public void after_returning(JoinPoint jp, String msg) {
    // ...
  }
  
  @AfterThrowing(pointcut="mypt()", throwing="th")
  public void after_throwing(JoinPoint jp, Throwable th) {
    // ...
  }
  
  // ...
}
```

`applicationContext.xml`:
```xml
<aop:aspectj-autoproxy proxy-target-class="true">
</aop:aspectj-autoproxy>
```

> `@AspectJ(Annotaion)이 적용된 클래스들을 로딩하여 해당 클래스에 정의된 Pointcut, Advice를 실행

#### `<aop:advisor> `사용

- `<aop:aspect>`와는 달리 외부에서 정의한 advice를 pointcut에 연결할 목적으로 사용
- `<tx:advice>`: 트랜잭션 advice를 생성하여 주는 태그

```xml
<tx:advice transaction-manager="txManager" id="mytx">
  <tx:attributes>
    <tx:method name="*" />
  </tx:attributes>
</tx:advice>
```

> `<tx:method>`: 트랜잭션이 적용될 메서드 선언

```xml
<aop:config>
  <aop:advisor advice-ref="mytx" pointcut="execution( public * service.*Service.*(..))" />
</aop:config>
```

## 7. Spring MVC

## 7.1. Web Application 구조

- Presentation Layer
- Business Layer: `Controller` / `Service`를 이용하여 요청에 대한 처리를 진행
- Data Access Layer


- Database

## 7.2. Spring MVC

#### MVC Model 1

![mvc model 1](https://www.javatpoint.com/images/st/model1.jpg)

| 장점 | 단점 |
| ---- | ---- |
| - 간편한 개발방식<br>- 빠른 개발 가능 | - 유지보수가 어려움 |

#### MVC Model 2 - Spring MVC

![mvc model 2](https://www.javatpoint.com/images/sp/mvc.jpg)

| 장점 | 단점 |
| ---- | ---- |
| - 유지보수가 용이 | - 개발 시간이 오래 걸림<br>- MVC 패턴에 대한 이해가 필요 |

## 7.2. Spring MVC 구성 컴포넌트

- Dispatcher-servlet
> Front Controller. 클라이언트의 모든 요청을 최초로 전달받음
- Controller
> 클라이언트의 요청을 처리
- HandlerMapping
> URL 정보를 기준으로 어떤 Controller가 요청을 처리할 지 결정
- View
> Controller의 처리 결과를 화면에 출력하는 로직
- ViewResolver
> 응답할 View를 찾는 작업을 처리
- ModelAndView
> Controller가 처리한 결과정보 및 view 선택에 필요한 정보를 포함하는 객체

#### 요청 처리 순서

1. `Dispatcher-Servlet`이 클라이언트로 요청을 받음
2. `HandlerMapping`이 어떤 Controller가 요청을 처리할지 결정
3. `Dispatcher-Servlet`은 해당 요청을 결정 된 `Controller`에 위임
4. `Controller`는 요청을 처리하고 결과를 담은 `ModelAndView`를 반환
5. `Dispatcher-Servlet`은 `ViewResolver`에 의해 응답을 처리할 View 객체를 선택
6. `View`는 클라이언트에 응답할 결과를 작성












