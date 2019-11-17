
export default ({ isAuth }) => ({

  email: (errors, values) => {
    if (!values) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
      errors.email = 'Invalid email address';
    }
  },

  password: (errors, values) => {
    if (!values) { 
      errors.password = 'Required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values)) {
      errors.password = isAuth ? "Invalid password" : 'Password too light';
    }
  }

});