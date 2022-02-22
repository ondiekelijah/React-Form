import { useState } from 'react';
import './App.css';
import FormInputs from './components/FormInputs';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Is your username between 3-16 characters? We don't allow special characters too",
      pattern:"^[A-Za-z0-9]{3,16}$",
      label: "Username",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"Please provide a valid email",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      errorMessage:"",
      label: "Birthday",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:"Password must be a minumum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      label: "Password",
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage:"Passwords don't match!",
      pattern: values.password,
      label: "Confirm Password",
      required: true
    }

  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
        {inputs.map((input) => (
          <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
