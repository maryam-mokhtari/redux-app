import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {pushState} from 'redux-router'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.handlerBack = this.handlerBack.bind(this)
  }
  handlerBack() {
    this.props.dispatch(pushState(null, '/', ''))
  }
  render() {
    const {fields: {firstName, lastName, email, address}, handleSubmit} = this.props;
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" {...firstName}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" {...lastName}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" {...email}/>
        </div>
        <div>
          <label>Address</label>
          <input type="address" placeholder="Address" {...address}/>
        </div>
        <button type="submit">Submit</button>
      </form>

      <button onClick={this.handlerBack}>Back</button>
      </div>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact',
  fields: ['firstName', 'lastName', 'email', 'address'] 
})(ContactForm);

export default ContactForm;
