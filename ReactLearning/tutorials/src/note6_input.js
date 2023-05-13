/* 表单组件 受控表单组件 */
// 什么是受控组件? input框自己的状态被React组件状态控制   受控组件是可以被react的状态控制的组件
// React组件的状态的地方是在state中，input表单元素也有自己的状态，在value中，React将state与表单元素的值 (value) 绑定到一起
// 由state的值来控制单元素的值，从而保证单一数据源的特性
import React from "react"

class Input extends React.Component {
  // 1. 声明用来控制input value的react组件作为自己的状态
  state = {
    wordCount: 0,
    message: 'this is message'
  }
  inputChange = (e) => {
    console.log(e.target.value)

    this.setState({
      message: e.target.value
    })
  }
  //产出UI模板结构
  render () {
    return (
      // 2. 给input框的value属性绑定 react state
      // 3. 给input框绑定一个事件，用于拿到输入内容
      <input type="text" value={this.state.message} onChange={(e) => this.inputChange(e)} />
    )
  }
}


// 产出 UI 模板结构
function App () {
  return (
    <div>
      <Input />
    </div>
  )
}

export default App
