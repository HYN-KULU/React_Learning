// 有一个状态 type 1 2 3
// 1 -> h1 , 2 -> h2 , 3 -> h3
// 原则: 模板中的逻辑尽量精简
// 复杂的多分支逻辑， 收敛为一个函数， 通过一个专门的函数来写分支逻辑 模板中只负责调用

// const getHtag = (type) => {
//     if (type === 1) {
//         return <h1>this is h1</h1>
//     }
//     if (type === 2) {
//         return <h2>this is h2</h2>
//     }
//     if (type === 3) {
//         return <h3>this is h3</h3>
//     }
// }
import "./app.css"
// 样式控制
// 1. 行内样式 - 在元素身上绑定一个style属性即可
const style = {
  color: "red",
  fontSize: "30px",
}
// 2. 类名样式
var flag = false
function App () {
  return (
    <div className="App">
      {/* {getHtag(1)}
            {getHtag(2)}
            {getHtag(3)} */}
      <span style={style}>this is a span</span>
      <span className={flag ? "active" : null}>类名样式</span>
    </div>
  )
}

export default App
