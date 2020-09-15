import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

interface IFormdata {
  username: string;
  age: number;
  remember: boolean;
}

function App() {
  const { handleSubmit, register, errors } = useForm<IFormdata | any>({});

  const onSubmit = handleSubmit((formData) => {
    console.log(errors);
  });

  useEffect(() => {
    console.log(errors);
  }, [errors.username]);

  return (
    <div className="App">
      <h1> Heact Hook Form Example</h1>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          ref={register({ required: true, minLength: 3 })}
        />
        {errors.username && <p>{errors.username.message + 'foi esse erro'}</p>}

        <label>Age</label>
        <input type="number" name="age" ref={register} />

        <span>
          <input type="checkbox" name="remember" ref={register} />
          <label>Remember Me</label>
        </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
