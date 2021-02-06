export default function validateInfo(values) {
    let errors = {};
    
    if (!values.username) {
      errors.username = 'Username required';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6 || values.password.length > 16) {
      errors.password = 'Password needs to be between 6 and 16 characters long';
    } else if ((values.password.search(/[a-z]/) < 0)) {
        errors.password = 'Password needs to contain at least 1 lowercase letter';
    } else if ((values.password.search(/[A-Z]/) < 0)) {
        errors.password = 'Password needs to contain at least 1 uppercase letter';
    } else if ((values.password.search(/[0-9]/) < 0)) {
        errors.password = 'Password needs to contain at least 1 number';
    } else if ((values.password.search(/[!@#$%^&*]/) < 0)) {
        errors.password = 'Password needs to contain at least 1 special character';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }