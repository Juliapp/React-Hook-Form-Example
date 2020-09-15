import React, { useState } from 'react';
import './styles.css';
import { Interface } from 'readline';

interface IFormdata {
  username: string;
  age: number;
  remember: boolean;
}

function AppRegularVersion() {
  const [erros, setErros] = useState({ username: false, age: false });
  const [formData, setFormData] = useState<IFormdata>({
    username: '',
    age: 0,
    remember: false,
  });

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate(formData);
  };

  const validate = ({ username }: IFormdata) => {
    const valid = username.length > 3;
    setErros({ ...erros, username: !valid });
    console.log(valid);
    console.log(erros);
  };

  return (
    <div className="App">
      <h1> Heact Hook Form Example</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleOnChange}
        />
        {erros.username && <p>Invalid User</p>}

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleOnChange}
        />

        <span>
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleOnChange}
          />
          <label>Remember Me</label>
        </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AppRegularVersion;
