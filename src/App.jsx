import { Fragment, useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  const title = 'Greetings stranger !'
  const className = 'greetings'
  const style = {color: 'red', 
    background: 'blue'}
  
  const showTitle = true
  const todos = ['Apprendre Python', 'Apprendre React', 'Apprendre Java']
  
  const handleClick = (e) => {
    // console.log(e.nativeEvent)
    alert("J'ai cliqué")
    // e.preventDefault()
    // e.stopPropagation()
  }


  return <Fragment>
  {/* <> */}
    {showTitle && 
      <h1 id='title' className={className} style={style} onClick={handleClick}>{title}</h1>
    }
    <SubTitle color='green' id='monID' className='maClass' data-type='JSON'>How are you today ?</SubTitle>
    {/* {showTitle ? 
      <h1 id='title' className={className} style={style} onClick={handleClick}>{title}</h1> 
      : <h1>Demo</h1>
    } */}
    {/* <SubTitle color='green' hidden>How are you today ?</SubTitle> */}
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias nam suscipit quia fugiat, quasi ut dolor fugit cum libero accusantium ipsa id, nisi dolorem reiciendis maxime odio, non consequuntur!
      Illum corporis quae ullam! Laboriosam velit, error, expedita totam recusandae est ab consequuntur voluptas, rem incidunt explicabo commodi minima adipisci vel architecto beatae voluptatibus atque tempore nisi quis iure doloremque.
      Quaerat fugiat libero quo, et blanditiis quibusdam commodi a sit consequuntur vero eos iste officiis quod reiciendis vitae, neque dolor dolorem suscipit voluptates, nulla aliquid iure nemo! Cum, ea et?
    </p>
    <ul>
      {todos.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
    <input type="text" />
  </Fragment>
  // </>

}

function SubTitle({color, children, hidden, ...props}) {
  // console.log(hidden)
  if (hidden) {
    return null
  }

  // const props = {
  //   id: 'monID',
  //   className: 'maClass'
  // }

  return <h2 style={{color: color}} {...props}>{children}</h2>
}


export default App