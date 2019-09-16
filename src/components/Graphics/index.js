import React, { Component } from 'react'
import './styles.css';
class App extends Component {
    stata = {
    }
    getUsers = async () => {
        try {
          const result = await fetch('http://194.32.77.87:3000/api/coins');
        //   result = JSON.parse(result);
          console.log(result);
          
        } catch (err) {
          throw err;
        }
      };
    render() {
        return (
            <section className="wrapper">
                <div className="container">
                    hello
                    <button onClick={this.getUsers}>click</button>
                </div>
            </section>
        )
    }
}

export default App;