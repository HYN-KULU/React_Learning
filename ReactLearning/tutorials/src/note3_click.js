// 函数组件的创建和渲染
// 创建
// 首字母必须大写 必须return，如果没有要渲染的，则返回return null
// 1.只需要一个额外参数 {clickHandler}     {()=>clickHandler('自定义参数')}
// 2. 既需要e也需要额外的参数  {(e)=>clickHandler(e,'自定义参数')}
import React from "react"
function Hello () {
  const clickHandler = (e, msg) => {
    // 阻止默认行为
    e.preventDefault()
    console.log('函数组件中的事件被触发了', msg)
  }
  return <div><a onClick={(e) => clickHandler(e, 'this is msg')} href="http://baidu.com">百度</a></div>
}
// 渲染 <Hello/> <Hello></Hello>

// 类组件的创建和渲染
// 创建
class HelloComponent extends React.Component {
  //事件回调函数（标准写法）
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render () {
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}
// 渲染 <HelloComponent/>  <HelloComponent></HelloComponent>
function App () {
  return (
    <div>{/*渲染Hello组件*/}
      <Hello />{/*自闭合*/}
      <Hello></Hello>{/*成对*/}
      <HelloComponent />
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App
