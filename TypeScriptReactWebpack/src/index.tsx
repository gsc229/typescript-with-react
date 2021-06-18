import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  (window as any).helloWorld()

  return <div>Hello World</div>
}

ReactDOM.render(<App />, document.getElementById('root'))