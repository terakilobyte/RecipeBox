//requires the main stylesheet from Sass sourcemap
require('./main.scss');


//Important React Modules
import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';

localStorage.setItem('Cereal', ['cornflakes', 'milk', 'sugar', 'spoon']);
localStorage.setItem('Fried Rice', ['rice','egg yolk','peas','carrots','onion']);
localStorage.setItem('Sandwich', ['bread', 'cheese', 'turkey', 'mustard']);
localStorage.setItem('Chicken Noodle Soup', ['chicken chunks', 'stock', 'leeks', 'noodles', 'peas and carrots'])



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


class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <Button bsStyle="info">Edit</Button>
    )
  }
}

const Recipes = function({recipeName}) {
  function getIngredents(recipe) {
    var ingredents = localStorage.getItem(recipe).split(',');
    console.log(ingredents);
    return ingredents;
  }
  return (
    <div>
      <h1>
        {recipeName}
      </h1>
      <ul>
        {getIngredents(recipeName).map(function(c,i) {
            return (
              <li key={i}>{c}</li>
            );
          })}
      </ul>
      <Edit />
      <Button bsStyle="danger">Delete</Button>
    </div>
  );
}

//React compenents and render
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //store an instances of local storage
      localKey: function() {
        var eachKey = [];
        for(var i = 0; i < localStorage.length; i++) {
          eachKey.push(localStorage.key(i));
        }

        return eachKey;
      }
    }

  }

  render() {
    return (
      <div>
        {this.state.localKey().map(function(c,i,arr) {
            return <Recipes key={i} recipeName={c} />
        })}
      </div>
    )
  }
}



render(<App />, document.getElementById('app'))
