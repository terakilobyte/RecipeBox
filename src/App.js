//requires the main stylesheet from Sass sourcemap
require('./main.scss');


//Important React Modules
import React from 'react';
import {render} from 'react-dom';



//React compenents and render
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: null
    }
  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

render(<App />, document.getElementById('app'))
