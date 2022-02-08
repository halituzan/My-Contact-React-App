import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    phone: "",
  };

  render() {
    const changeValue = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
      e.preventDefault();
      if (this.state.name !== "" && this.state.phone !== "") {
        this.props.formSetState({ ...this.state });
        this.setState({ name: "", phone: "" });
      }
    };
    return (
      <div className="forms container p-0">
        <form className="d-flex flex-column">
          <input
            type="text"
            name="name"
            className="form-control my-2"
            id="name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={changeValue}
          />
          <input
            type="text"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Enter Number"
            value={this.state.phone}
            onChange={changeValue}
          />
          <button
            type="Submit"
            className="btn btn-success mt-2"
            onClick={submitHandler}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
