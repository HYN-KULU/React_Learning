import React from "react"

// App Son
// 父传子: props 函数
// 子传父: 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可
function Son (props) {
  // 解构 props
  const { getSonMsg } = props
  return (
    <div>this is son
      <button onClick={() => getSonMsg('来自子组件的数据')}>click</button>
    </div>
  )
}
class App extends React.Component {
  // 准备数据
  state = {
    list: [1, 2, 3]
  }
  // 1. 准备一个函数 传给子组件
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
    this.setState({
      list: [2, 3, 4]
    })
  }
  render () {
    return (
      <div>
        {this.state.list}
        <Son getSonMsg={this.getSonMsg} />
      </div>
    )
  }
}
export default App