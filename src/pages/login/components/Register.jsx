import React, { useState } from "react";
import "./AuthFormStyles.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Handle the registration logic here
    // This can be an API call to your backend server
    console.log(
      "Registration Details:",
      username,
      email,
      password,
      confirmPassword,
      image
    );
  };

  return (
    <form onSubmit={handleRegister} className="auth-form">
      <h2>Register</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Profile Picture:</label>
        <input type="file" onChange={handleImageChange} accept="image/*" />
      </div>
      {image && (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            width="100"
            height="100"
          />
        </div>
      )}
      <button type="seeker-submit">Seeker Register</button>
      <button type="shelter-submit">Shelter Register</button>
    </form>
  );
};

export default Register;
