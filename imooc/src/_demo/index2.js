import React, { Component } from 'react';
import ReactDom from 'react-dom'
import {Button} from 'antd-mobile'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary">4354</Button>
        </header>
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
)
