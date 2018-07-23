# React.js

## 참고(Reference)

- [VELOPERT.LOG - LifeCycle API](https://velopert.com/3631)

## 1. LifeCycle API

### 1.1. 컴포넌트 초기 생성

컴포넌트가 브라우저에 나타나기 전, 후에 호출되는 API

#### constructor

컴포넌트 생성자 함수로, 컴포넌트가 새로 만들어질 때마다 이 함수가 호출된다.

```js
constructor(props) {
  super(props);
}
```

### componentWillMount, `deprecated`

v16.3 이후부터는 `UNSAFE_componentWillMount()`로 사용 가능하나 잘 사용되지 않는다.

```js
componentWillMount() {

}
```

### componentDidMount

컴포넌트가 화면에 나타났을 때 호출되는 API. 주로 외부 라이브러리를 연동하거나,
해당 컴포넌트에서 필요로 하는 데이터 요청 또는 DOM 관련된 작업을 수행 할 때 사용한다.

```js
componentDidMount() {
  /*
    사용 예:
  	외부 라이브러리 연동, 컴포넌트에 필요한 데이터 요청, DOM에 관련된 작업
  */
}
```

### 1.2. 컴포넌트 업데이트

컴포는트의 업데이트는 `props`, `state`의 변화에 의해 발생한다.

#### componentWillReceiveProps - `deprecated`

컴포넌트가 새로운 `props`를 받게 됬을 때 호출되는 API.
이 안에서는 주로 `state`가 `props`에 의해 변해야 하는 로직을 작성할 때 사용한다.

v16.3 이후부터는 `UNSAFE_componentWillReceiveProps()`로 사용이 가능하나,
새로운 API인 `getDerivedStateFromProps`로 대체 가능하다.

```js
componentWillReceiveProps(nextProps) {
  /*
  	이전상태는 'this.props'를 통해 접근 가능하다.
  */
}
```

#### static getDerivedStateFromProps

`props`로 받아온 값을 `state`로 동기화 하는 작업에 사용하는 API.

```js
static getDerievedStateFromProps(nextProps, prevProps) {
  /*
    주의:
    설정하고자 하는 state 값을 리턴한다. (setState 사용 시 에러 발생)
  */
  
  if (nextProps.value !== prevProps.value) {
    return {
      value: nextProps.value
    }
  }
  
  return null; // 없데이트 할 것이 없을 경우 'null' 리턴
}
```

#### shouldComponentUpdate

최적화 작업에 유용하게 사용되는 API. 불필요한 랜더링 방지 처리를 통한 최적화.

```js
shouldComponentUpdate(nextProps, nextState) {
  /*
  	리턴 값에 따른 화면 업데이트 수행:
    	true 업데이트, false 업데이트 안함
  */
  return this.props.status !== next.props.status
  
  return true;
}
```

#### componentWillUpdate - `deprecated`

`shouldComponentUpdate` 에서 `true`가 반환되었을 때 호출되는 API.
주로 에니메이션 효과를 초기화 하거나, 이벤트 리스너를 없애는 작업을 수행.

v16.3 이후부터는 기존의 기능을 대체하는 `getSnapshotBeforeUpdate`를 사용하면 된다.

```js
componentWillUpdate(nextProps, nextState) {

}
```

#### getSnapshotBeforeUpdate

`componentWillUpdate`와는 다르게 `render()`이후에 API가 발생한다.
이 API를 통해서, DOM 변화가 일어나기 직전의 DOM 상태를 가져오고,
여기서 리턴하는 값은 `componentDidUpdate`의 3번째 파라미터로 사용한다.

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  /*
    예제:
      새 데이터가 상단에 추가되어도 스크롤바가 유지되도록 처리
      scrollHeight는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
      scrollTop은, 이 기능이 크롬에 이미 구현이 되어있는데,
      이미 구현이 되어 있다면 처리하지 않도록 하기 위함이다.
  */
  
  if (prevState.array !== this.state.array) {
    const {
      scrollTop, scrollHeight
    } = this.list;
    
    // 리턴 값은 componentDidUpdated의 3번재 파라미터에서 받아올 수 있다.
    return {
      scrollTop, scrollHeight
    };
  }
}

componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot) {
    const { scrollTop } = this.list;
    if (scrollTop !== snapshot.scrollTop) return; // 기능이 구현되어 있다면 처리하지 않음
    const diff = this.list.scrollHeight - snapshot.scrollHeight;
    this.list.scrollTop += diff;
  }
}
```

#### componentDidUpdate

render() 호출 후 발생하는 API.
`prevProps`, `prevState`를 통해 변화되기 이전의 값을 조회할 수 있다.

또한, 앞에서 설명한 바와 같이 실제 DOM 변화가 일어나기 직전의 DOM 상태를
`getSnapshotBeforeUpdate`으로 부터 리턴받아와 사용 가능하다.

```js
componentDidUpdate(prevProps, prevState, snapshot) {

}
```

### 1.3. 컴포넌트 제거

컴포넌트가 더 이상 필요하지 않에 되면 컴포넌트를 제거할 수 있는 API를 호출한다.

#### ComponentWillUnmount

```js
componentWillUnmount() {
  /*
    이벤트, 타이머, 외부라이브러리 인스턴스 등을 제거한다.
  */
}
```
### 1.4 예제

```js
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }
  
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componenetWillMount() {
    console.log('componentWillMount');
  }
  
  componentDidMount() {
   console.log('componentDidMount');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if (nextState.number & 5 === 0) return false;
    return true;
  }
  
  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('getSnapshotBeforeUpdate');
    
    return {
      temp: 'snapshot'
    };
  }
  
  componentDidMount(prevProps, prevState, snapshot) {
    console.log('componentDidMount');
    
    console.log(snapshot);
  }
  
  handleIncrement = () => {
    const { number } = this.state;
    
    this.setState({
      number: number + 1
    });
  }
  
  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```


### 1.5. 컴포넌트 에러 발생

`render` 함수에서 에러가 발생한다면, 앱이 크래쉬 되어 버린다.
그러한 상황에 유용하게 사용 가능한 API가 존재한다.

#### componentDidCatch

에러가 발생하면 `render` 함수쪽에서 에러를 띄워주면 된다.

컴포넌트 자신의 `render` 함수에서 에러가 발생하는 것은 잡아낼 수 없지만,
자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있다.

```js
componentDidCatch(error, info) {
  this.setState({
    error: true
  });
}
```

##### 에러발생 예제

```js
import React, { Component } from 'react';

const ProblemComponent = () => {
  throw (new Error('에러 발생'));
  return (
    <div>
    
    </div>
  );
};

class Counter extends Component {
  // ...
  state = {
    number: 0,
    error: false
  }
  
  componentDidCatch(error, info) {
    if (error) {
      this.setState({
        error: true
      });
    }
  }
  render() {
    if (this.state.error) return (<h1>에러발생!</h1>);
    
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        { this.state.number === 4 && <ProblemComponent /> }
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}
```