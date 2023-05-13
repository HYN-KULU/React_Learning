import {useEffect, useState} from 'react'
// 在修改数据之后，把count值放到页面标题中
// 1. 导入useEffect函数
// 2. 在函数组件中执行 传入回调函数 并且定义副作用
// 3. 当我们通过修改状态更新组件时，副作用也会不断执行
// 依赖项控制副作用的执行时机
// 1. 默认状态（无依赖项）
// 组件初始化的时候先执行一次，等到每次数据修改组件更新再次执行
// 2. 添加空数组 
// 组件初始化的时候执行一次
// 3. 添加特定依赖项
// 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
function App(){
  const [count,setCount] = useState(0)
  const [name,setName] = useState('kula')
  useEffect(()=>{
    // 定义副作用
    console.log('副作用又执行了')
    document.title=count
  },[count])//在这里添加空数组以后，组件只在首次渲染时执行一次
  return(
    <div>
      <button onClick={()=>setCount(count+1)}>{count}</button>
      <button onClick={()=>setName('kulu')}>{name}</button>
    </div>
  )
}

export default App