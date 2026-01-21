import { Fragment, useState } from 'react'
import Counter from './Counter'
import Form from './Form'


function App() {
  const title = 'Greetings stranger !'
  const className = 'greetings'
  const style = {
    color: 'red',
    background: 'blue'
  }

  const showTitle = true
  const todos = ['Apprendre Python', 'Apprendre React', 'Apprendre Java']

  const handleClick = (e) => {
    alert("J'ai cliqué")
    // e.preventDefault()
    // e.stopPropagation()
    // console.log(e.nativeEvent)
  }

  const [isTermAccepted, setIsTermAccepted] = useState(false)


  return <Fragment>
    {/* <> */}
    {showTitle &&
      <h1 id='title' className={className} style={style} onClick={handleClick}>{title}</h1>
    }
    {/* {showTitle ? 
      <h1 id='title' className={className} style={style} onClick={handleClick}>{title}</h1> 
      : <h1>Demo</h1>
    } */}

    <SubTitle color='green' id='monID' className='maClass' data-type='JSON'>How are you today ?</SubTitle>
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

    <Counter />

    <Form />

    <form>
      <br />
      <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted}/>
      <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
    </form>

  </Fragment>
  // </>

}


function SubTitle({ color, children, hidden, ...props }) {
  if (hidden) {
    return null
  }
  // console.log(hidden)

  // const props = {
  //   id: 'monID',
  //   className: 'maClass'
  // }

  return <h2 style={{ color: color }} {...props}>{children}</h2>
}


function CGUCheckbox({checked, onCheck}) {
  return <>
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={(e) => onCheck(e.target.checked)}/>
        Accepter les conditions d'utilisation
      </label>
    </div>
  </>
}


export default App