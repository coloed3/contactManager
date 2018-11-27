import React, { Component } from 'react';
import { throws } from 'assert';

class AddContact_ref extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };
  static defaultProps = {
    name: ' Fred smith',
    email: 'fred@yahoo.com',
    phone: '777-777-7777'
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-Header">
          Add Contact
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Name.."
                  name="name"
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter  Email..."
                  name="email"
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone.."
                  name="phone"
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact_ref;
