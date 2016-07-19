//requires the main stylesheet from Sass sourcemap
require('./main.scss');


//Important React Modules
import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

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


const Edit = React.createClass({
  getInitialState() {
    return {
      showModal: this.props.modalState,
      value: this.props.recipe
    };
  },

  handleChange(event) {
    this.setState({value: event.target.value})
  },

  completeEdit() {
    //sets a new item and replicates the old ingredents data and deletes the previous item.
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    let popover = <Popover title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;
      // console.log(this.props.recipe);
      // console.log(localStorage.getItem(this.props.recipe));
    return (
      <div>
        <Button  bsStyle="info" onClick={this.open}>Edit</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label for="recipe">Recipe</label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />

          </Modal.Body>
          <Modal.Footer>
            //Create a button that saves the edited recipe
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )}
});

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      showEdit: false
    }
  }

  render() {
  function getIngredents(recipe) {
      var ingredents = localStorage.getItem(recipe).split(',');
      console.log(ingredents);
      return ingredents;
  }
  return (
    <div>
      <h1>
        {this.props.recipeNames}
      </h1>
      <ul>
        {getIngredents(this.props.recipeNames).map(function(c,i) {
            return (
              <li key={i}>{c}</li>
            );
          })}
      </ul>
      <Edit recipe={this.props.recipeNames} >Edit</Edit>
      <Button bsStyle="danger">Delete</Button>
    </div>
  );
  }
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
            return <Recipes key={i} recipeNames={c} />
        })}
      </div>
    )
  }
}



render(<App />, document.getElementById('app'))
