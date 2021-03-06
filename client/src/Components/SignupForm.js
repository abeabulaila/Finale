import { useState } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const SignupForm = ({onLogin}) => {
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((r) => {
        if (r.ok) {
            r.json().then((user) => onLogin(user));
            navigate("/")
        } else {
            r.json().then((err) => setErrors(err.errors));
            alert("Username must be unique")
        }
    });
}





  return (
    <div className="logform">
      <h1>Signup Here!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" className="sign-in">Submit</button>
      </form>
      <br />
      <Link to="/login" replace>
        Have an account already? Log in!
      </Link>
    </div>
  );
};

export default SignupForm;