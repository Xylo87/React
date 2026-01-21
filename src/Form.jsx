import { useState } from 'react'


function Form() {
    const [firstName, setFirstName] = useState('John Doe')
    // const [firstName, setFirstName] = useState('')
    
    // const [checked, setChecked] = useState(true)

    const handleChange = (e) => {
        setFirstName(e.target.value)
    }

    const reset = () => {
        setFirstName('')
    }

    // const handleSubmit = (e) => {
    //     console.log(new FormData(e.target))
    //     e.preventDefault()
    // }

    // const toggleChecked = () => {
    //     setChecked(!checked)
    // }

    return <>
        <br />
        <br />
        <form>
        {/* <form onSubmit={handleSubmit}> */}
            <input type="text" name='firstName' value={firstName} onChange={handleChange} />
            <button onClick={reset} type='button'>Reset</button>

            {/* <input type="text" name='firstName' defaultValue='Please enter something'/>
            <button>Envoyer</button> */}

            {/* <textarea name="writingArea" id="writingArea" value={value} onChange={handleChange}></textarea> */}

            {/* <input type="checkbox" checked={checked} onChange={toggleChecked} />
            <button disabled={!checked}>Envoyer</button> */}
        </form>
    </>
}


export default Form