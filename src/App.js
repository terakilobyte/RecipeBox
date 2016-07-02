//requires the main stylesheet from Sass sourcemap
require('./main.scss');


//Important React Modules
import React from 'react';
import {render} from 'react-dom';

var recipe = localStorage.setItem('Cereal', ['cornflakes', 'milk', 'sugar']);


//How should recipe data be stored

//A component that renders different recipes
  //recipes are rendered seperately
    //A button that allows the user to delete a recipe
    //A button that allows the user to edit the recipe
  //A button that allows the user to create a new recipe

//A component that allows for recipe management
  //If the edit button is clicked, the recipe is populated with recipe name and ingredents. The ingredents are seperated by commas
    //The user can add additional ingredents as long there is a comma seperated by the rest of the data
    //The user can change the name of the recipe
  //If add button is pressed, then a blank form is presented to the user to add a new recipe
    //If no recipe name is added, the recipe name will be 'Untitled'


function ingredents(recipeItem) {
  return (
    <li>
      {recipeItem}
    </li>
  );
}


//React compenents and render
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //store an instances of local storage
      localKey: function() {
        return localStorage.key(0);
      },
      localIngrds: localStorage.getItem('Cereal').split(',')
    }

  }

  render() {
    console.log(this.state.localIngrds);
    return (
      <div>
        <h1>{this.state.localKey()}</h1>
        <ul>
          {this.state.localIngrds.map(function(c,i,arr) {
            return ingredents(c);
          })}
        </ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
