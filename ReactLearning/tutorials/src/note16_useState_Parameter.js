// useState 函数作为参数
import { useState } from 'react'
function Counter (props) {
  const [count, setCount] = useState(() => { return props.count })
  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}

function App () {
  return (
    <div>
      <Counter count={10} />
      <Counter count={20} />
    </div>
  )
}

export default App