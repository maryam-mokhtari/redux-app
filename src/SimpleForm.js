import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
export const fields = ['firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes']

const submit = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!['john', 'paul', 'george', 'ringo'].includes(values.firstName)) {
        reject({firstName: 'User does not exist', _error: 'Login failed!'})
      } else {
        dispatch(showResults(values))
        resolve()
      }
    }, 1000)
  })
}

const validate = values => {
  const errors = {};
  // if (!values.firstName) {
  //   errors.firstName = 'Required';
  // } else if (values.firstName.length > 15) {
  //   errors.firstName = 'Must be 15 characters or less';
  // }
  // if (!values.lastName) {
  //   errors.lastName = 'Required';
  // } else if (values.lastName.length > 15) {
  //   errors.lastName = 'Must be 15 characters or less';
  // }
  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
  return errors;
}

class SimpleForm extends Component {

  render() {
    const {
      fields: {firstName, lastName, email, sex, favoriteColor, employed, notes},
      handleSubmit,
      resetForm,
      error,
      submitting
      } = this.props;
    return (<form onSubmit={handleSubmit(submit)}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...firstName}/>
          </div>
          {firstName.touched && firstName.error && <div>{firstName.error}</div>}
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type="text" placeholder="Last Name" {...lastName}/>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input type="email" placeholder="Email" {...email}/>
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
            </label>
            <label>
              <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
            </label>
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <select
              {...favoriteColor}
              value={favoriteColor.value || ''}  // required syntax for reset form to work
                                                 // undefined will not change value to first empty option
                                                 // when resetting
              >
              <option></option>
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </select>
          </div>
        </div>
        <div>
          <label>
            <input type="checkbox" {...employed}/> Employed
          </label>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea
              {...notes}
              value={notes.value || ''} // required for reset form to work (only on textarea's)
                                        // see: https://github.com/facebook/react/issues/2533
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}
SimpleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'simple',
  fields,
  // validate,
})(SimpleForm);
