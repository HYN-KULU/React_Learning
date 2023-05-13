// 1. 识别常规的变量
const name = 'kulu'
// 2. 原生js方法的调用
const getAge = (a) => {
  return a
}
// 3. 三元运算符
const flag = true
// 4. react的列表渲染 用map
const songs = [
  { id: 1, name: '痴心绝对' }, { id: 2, name: '像我这样的人' }, { id: 3, name: '南山南' }
]
// 遍历列表时，需要一个类型为number/string不可重复的key,提高性能 key不会出现在真是的dom结构中
// 5. 条件渲染 技术方案: 三元表达式  逻辑&&运算
// 三元表达式 满足条件才渲染一个span标签
function App () {
  return (
    <div className="App">
      {name}
      {getAge('呼呼呼')}
      {flag ? (<div>
        <span>this is a span</span>
      </div>) : null}
      {flag && <span>this is a span</span>}
      <ul>
        {songs.map(song => <li key={song.id}>{song.name}</li>)}
      </ul>
    </div>
  )
}

export default App
