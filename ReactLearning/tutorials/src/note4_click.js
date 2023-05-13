// 组件状态 类组件作为演示
import React from "react"
class TestComponent extends React.Component {
  //state是固定的名字 setState是从React.Component继承过来的方法
  state = {
    //在这里定义各种属性 全都是组件当前的状态
    name: 'kulu'
  }
  //事件回调函数
  changeName = () => {
    //修改state中的状态不能直接复制修改 必须通过一个方法 setState
    this.setState({
      name: 'kula'
    })
  }
  render () {
    return (<div>
      this is TestComponent
      当前name为:{this.state.name}
      <button onClick={this.changeName}>修改name</button>
    </div>)
  }
}
function App () {
  return (
    <div>
      <TestComponent />
    </div>
  )
}

export default App
