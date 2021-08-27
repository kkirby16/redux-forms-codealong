import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="add todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  //does mapDispatch to props if created as a const need to be under the render function?
  //also, why do we use const for mapDispatchToProps but not for other variables above that are set to functions?
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
