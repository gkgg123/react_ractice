## 02. Multi Element



```jsx
React.createElement('div',{
    children : [
    React.createElement("h1",null,'first'),
    React.createElement("h3",null,'second'),
    React.createElement("h5",null,'third')
]
})


///

React.createElement(
      "div",
      null,
      React.createElement("h1", null, "first"),
      React.createElement("h3", null, "second"),
      React.createElement("h5", null, "third")
    );

///

jsx 처럼
<div> 
  <h1>first </h1>
  <h3>second</h3>
  <h5>third</h5>
</div>
```

위와 같은 방식으로 하나의 요소 안에 여러개의 children 을 만들 수 있다.

하지만 위와 같은 방법의 문제점은 쓸데 없는 `div`를 감싼다는 문제가 있다.



그렇기 때문에 React에서는 Fragment라는 tag를 지원한다.



```jsx
React.createElement(React.Fragment,{
    children : [
    React.createElement("h1",null,'first'),
    React.createElement("h3",null,'second'),
    React.createElement("h5",null,'third')
]
})


///

React.createElement(
      React.Fragment,
      null,
      React.createElement("h1", null, "first"),
      React.createElement("h3", null, "second"),
      React.createElement("h5", null, "third")
    );

///

jsx
<Fragment> 
  <h1>first </h1>
  <h3>second</h3>
  <h5>third</h5>
</Fragment>
```

Fragment를 사용하면, 쓸데없는 div 없이 자식들을 렌더링 할 수 있다.





### jsx와 React.createElement를 통해, 하나의 컴포넌트 안에 다수의 자식을 만드는 법을 배웠다.

### 그리고, 그 자식들이 div로 감싸지는 것이 싫으면 React에서 제공해주는 Fragment 태그를 사용해서 감싸주면 된다.




