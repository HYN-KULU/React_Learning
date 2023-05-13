// useState
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入初始值，必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

// 状态的读取和修改
import { useState } from 'react'
function App () {  {/* 这里的useState里的0只有首次渲染有效 */}
{/* 更新渲染时 setCount会更新，useState再次被执行，得到的新的count值不是0而是修改之后的1，模板会用新值渲染 */}
  const [count, setCount] = useState(0) // useState传过来的参数是count的初始值 这里是解构赋值 useState函数返回一个数组
  // 名字可以自定义 可以自定义保持语义化 顺序不可以换
  // setCount 不是直接修改原值 而是生成一个新值替换原值 setCount(基于原值计算得到的新值
  return(
    <div>
      <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}

export default App