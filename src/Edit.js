import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      originalName: this.props.recipe.name,
      recipe: this.props.recipe
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.completeEdit = this.completeEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.handleIngredientEdit = this.handleIngredientEdit.bind(this);
  }

  handleChange(event) {
    const name = event.target.value;
    const ingredients = this.state.recipe.ingredients;
    this.setState({recipe: {name, ingredients}});
  }

  handleIngredientEdit(event) {
    console.log(event.target);
    const name = this.state.recipe.name;
    const ingredients = this.state.recipe.ingredients;
    const newState = ingredients.map((elem, idx) => {
      console.log(idx, +event.target.id, 'matching', idx === +event.target.id);
      if (idx === +event.target.id) {

        return event.target.value;
      }
      return elem;
    });
    this.setState({recipe: {name, ingredients: newState}});
  }

  completeEdit() {
    //Need to update parent div with new items.
    this.close();
    this.props.editItem(this.state.originalName, this.state.recipe);
  }

  addInput() {
    const name = this.state.recipe.name;
    const ingredients = this.state.recipe.ingredients;
    const recipe = {name, ingredients: [...ingredients, ""]};
    //this.props.editItem(this.state.originalName, recipe);
    this.setState({recipe})
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    // let popover = <Popover title="popover">very popover. such engagement</Popover>;
    // let tooltip = <Tooltip>wow.</Tooltip>;
      // console.log(this.props.recipe);
      // console.log(localStorage.getItem(this.props.recipe));
    const ingredients = this.state.recipe.ingredients.map((elem, idx) => {
      return <input name="ingredients"
        id={idx}
        key={idx} type="text"
        onChange={this.handleIngredientEdit}
        value={elem} />
    });
    return (
      <div>
        <Button
          bsStyle="info"
          onClick={this.open}>
          Edit
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form">
            <label htmlFor="recipe">name</label>
            <input type="text" value={this.state.recipe.name} onChange={this.handleChange} />
            </div>
            <hr />
            <div className="form">
            <label htmlFor="ingredients">ingredients</label>
            {ingredients}
            <Button bsStyle="success" onClick={this.addInput}>Add</Button>

            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.completeEdit}>Save</Button>
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )}
}

Edit.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  editItem: React.PropTypes.func.isRequired
}

module.exports = Edit;
