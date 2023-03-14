// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  const [checkedValue, setCheckedValue] = React.useState('')

  function handleChange(e) {
    const {value} = e.target
    // const check = value === value.toLowerCase()
    // setError(check ? null : 'Username must be lowercase')
    setCheckedValue(value.toLowerCase())
    setUsername(previousState => value.toLowerCase())
  }

  // handle submit function
  function handleSubmit(event) {
    event.preventDefault()
    // console.dir(event.target)

    // const username = event.target.elements.username.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          value={checkedValue}
        />
      </div>
      <div style={{color: 'red'}} role="alert">
        {' '}
        {error}{' '}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
