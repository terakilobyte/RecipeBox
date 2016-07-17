//requires the main stylesheet from Sass sourcemap
require('./main.scss');


//Important React Modules
import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

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


const Example = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
});

class Recipes extends React.Component {
  render() {
  console.log(this.state.show)
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
        <Button bsStyle="info" onClick={function() {this.state.showEdit = true}}>Edit</Button>
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
