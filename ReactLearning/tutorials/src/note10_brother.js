import React from "react"
// 目标: B组件中的数据传给A组件
// 技术方案: 1. B中数据传给App 2. App数据传给A
function SonA (props) {
  return (
    <div>this is A {props.sendAMsg}</div>
  )
}
function SonB (props) {
  const bMsg = '这里是来自B组件的数据'
  return (
    <div>this is B
      <button onClick={() => props.getBMsg(bMsg)}>发送数据</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    list: [1, 2, 3],
    sendAMsg: '测试父传子'
  }
  getBMsg = (msg) => {
    console.log(msg)
    this.setState({
      sendAMsg: msg
    })
  }
  render () {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg} />
        <SonB getBMsg={this.getBMsg} />
      </div>
    )
  }
}

export default App