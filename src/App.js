//requires the main stylesheet from Sass sourcemap
require('./main.scss');


//Important React Modules
import React from 'react';
import {render} from 'react-dom';
import Recipes from './Recipes';

const initialState = {
  recipes: [
    {
      name: 'Cereal',
      ingredients: ['cornflakes', 'milk', 'sugar', 'spoon']
    },
    {
      name: 'Fried Rice',
      ingredients: ['rice', 'egg yolk', 'peas', 'carrots', 'onion']
    }
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem('appState')) {
      localStorage.setItem('appState', JSON.stringify(initialState));
    }
    this.state = JSON.parse(localStorage.getItem('appState'));
    this.editRecipeName = this.editRecipeName.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  setLocalStorage () {
    localStorage.setItem('appState', JSON.stringify(this.state));
  }

  editRecipeName(oldName, newItem) {
    const oldState = this.state.recipes;
    const newState = oldState.map(elem => {
      if (elem.name === oldName) {
        return newItem;
      }
      return elem;
    });
    this.setState({recipes: newState});
  }

  deleteRecipe(name) {
    const newState = this.state.recipes.filter(elem => elem.name !== name);
    this.setState({recipes: newState});
  }

  render() {
    this.setLocalStorage();
    const display = this.state.recipes.map((elem, idx) => {
      return <Recipes editItem={this.editRecipeName} delete={this.deleteRecipe} key={idx} recipe={elem}/>
    })

    return (
      <div>
        {display}
      </div>
    )
  }
}



render(<App />, document.getElementById('app'))
