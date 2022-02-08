import { Component } from "react";
import List from "./List";
import "./contact.css";
import Form from "./Form";

export default class Contact extends Component {
  state = {
    contacts: [],
  };
  formSetState = (contactData) => {
    const { contacts } = this.state;
    contacts.push(contactData);
    this.setState(this.state.contacts);
  };
  deleteContact = (phone) => {
    const newList = this.state.contacts.filter((i) => i.phone !== phone);
    this.setState({contacts:newList})
    console.log(newList);
  };
  render() {
    return (
      <div className="contact d-flex flex-column align-items-center my-3 container w-50">
        <h1 className="contactTitle">Contacts</h1>
        <List delete={this.deleteContact} contacts={this.state.contacts} />
        <Form formSetState={this.formSetState} />
      </div>
    );
  }
}
