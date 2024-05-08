import { useState } from 'react'

function NameList() {
  const [list, setList] = useState(['Jack', 'John']);
  const [name, setName] = useState("")

  function addName() {
    setList([...list, name]);
    setName("")
  }

  return (
    <div>
      {list.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={addName}>Add name</button>
      </div>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10);

  function addOne () {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count = { count }</button>
    </div>
  )
}

function App() {

  return (
    <div>
      <Counter />
      <NameList />
    </div>
  )
}

export default App
