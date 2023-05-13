// 跨层传递
// 1.上层组件和下层组件关系是相对的 只要存在就可以使用 通常我们都会通过App作为数据提供方
// 2.固定的语法有两处: (1) value 提供数据 (2) 获取value用: value=>{.....{value}......}
import React, { createContext } from "react"
// 1. 导入createContext方法并执行
const { Provider, Consumer } = createContext()
function ComA () {
  return (
    <div>this is ComA
      <ComC />
    </div>
  )
}
function ComC () {
  return (
    <div>
      this is ComC
      {/* 3.通过 Consumer 使用数据 */}
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render () {
    return (
      // 2. 使用Provider包裹根组件
      <Provider value={this.state.message}>
        <div>
          <ComA />
        </div>
      </Provider>
    )
  }
}
export default App