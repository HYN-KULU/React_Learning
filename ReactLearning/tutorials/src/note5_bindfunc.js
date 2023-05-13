import React from "react"

//通过类组件修改状态的方式 Counter
class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'jack',
      age: 20
    }
  }
  increment = (e) => {
    this.setState({
      count: this.state.count + 1
    })
    // 数组修改 & 增添
    this.setState({
      list: [...this.state.list, Math.max(...this.state.list) + 1] //拓展运算符 ... 将数组转化成逗号分隔形式的参数
    })
    // 对象修改 & 增添
    this.setState({
      person: {
        ...this.state.person, name: 'kulu', gender: 'male'
      }
    })
  }
  // 对象的删除
  delete = () => {
    this.setState({
      list: this.state.list.filter(item => (item !== Math.max(...this.state.list)))
    })
  }
  render () {
    // render函数中的this已经被react内部做了修正
    // 这里的this就是指向当前的组件实例对象
    console.log('父函数中的this指向为:', this)
    return (<>
      <ul>
        {this.state.list.map((item) => <li key={item}>{item}</li>)}
        {this.state.person.gender}
      </ul>
      <div>{this.state.count}<button onClick={(e) => this.increment(e)}> + </button></div>
      <div>{this.state.count}<button onClick={(e) => this.delete(e)}> - </button></div>
    </>

    )
  }
}
function App () {
  return (
    <div >
      {/* 渲染Counter */}
      <Counter />
    </div>
  )
}

export default App
