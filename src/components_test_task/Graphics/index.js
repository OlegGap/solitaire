import React, { Component } from 'react'
import './styles.css';
import CreateGraph from './graphic.js.js'
class App extends Component {
  state = {

  }

  render() {
    
    return (
      <section className="wrapper">
        <div className="container">
          <CreateGraph />
          <button>click</button>
        </div>
      </section>
    )
  }
}

export default App;