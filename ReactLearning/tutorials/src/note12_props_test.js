import React from "react"
// 渲染列表
function ListItem (props) {
  const {item,delItem}=props
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={()=>delItem(item.id)}>删除</button>
    </>
  )
}

// 数据提供者 渲染ListTItem组件 App-ListItem
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业' },
      { id: 2, name: '超级好吃的大乳糖', price: 28.8, info: '失业' },
      { id: 3, name: '超级好吃的葡萄糖', price: 38.8, info: '毕业' }
    ]
  }
  // 给子组件传递的函数
  delItem=(target)=>{
    this.setState({
      list:this.state.list.filter(item=>(item.id!==target))
    })
  }
  render () {
    return (
      <div>
        {
          this.state.list.map(item => <ListItem  key={item.id} item={item} delItem={this.delItem}/>)
        }
      </div>

    )
  }
}
export default App