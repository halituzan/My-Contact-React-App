import React, { Component } from "react";
import { Phone, ContactPhone, DeleteForever } from "@material-ui/icons";
import "./list.css";
import PropTypes from "prop-types";
export default class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };
  state = {
    filter: "",
  };

  render() {
    const searchHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const deleteHandler = (param) => {
      this.props.delete(param)
    };
    const { contacts } = this.props;
    console.log(this.props.delete);

    return (
      <div className="list mt-3 w-100">
        <input
          name="filter"
          id="filter"
          className="form-control"
          placeholder="Search"
          value={this.state.filter}
          onChange={searchHandler}
        />
        <ul className="list-group my-3 d">
          {contacts
            .filter(
              (i) =>
                i.name.includes(this.state.filter) ||
                i.phone.includes(this.state.filter)
            )
            .map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                <span className="d-flex align-items-center justify-content-center">
                  <ContactPhone style={{ color: "orange" }} />
                  <span className="name ms-2">{item.name}</span>
                </span>
                <span>
                  <span className="phone">
                    <span>
                      {item.phone
                        .replace(/\D/g, "")
                        .replace(
                          /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
                          "$1 ($2) $3 $4 $5"
                        )}
                    </span>
                    <Phone style={{ color: "blue" }} />
                  </span>
                  <span onClick={() => deleteHandler(item.phone)}>
                    <DeleteForever style={{ color: "red" }} />
                  </span>
                </span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
