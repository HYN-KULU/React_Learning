/* 非受控表单组件 */
// 非受控组件通过手动操作dom的方法获取文本框的值，文本框的状态不受react组件的state中的状态控制，直接通过原生dom获取输入框的值
import React, { createRef } from "react" // 导入createRef函数
class Input extends React.Component {
  // 调用createRef函数，创建一个ref对象，存储到名为msgRef的实例属性中
  msgRef = createRef()
  getValue = () => {
    // 通过msgRef获取input value值
    console.log(this.msgRef.current.value)
  }
  // 产出UI模板结构
  render () {
    return (
      <>
        <input type="text" ref={this.msgRef} />
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
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
