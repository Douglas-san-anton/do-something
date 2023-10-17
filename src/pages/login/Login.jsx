import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useValidation } from "../../hooks/useValidation";

import Aside from "../../components/Aside";
import InputField from "../../components/InputField";
import styles from '../../styles/global.module.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isEmailValid } = useValidation();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!isEmailValid(email)) {
      setError('Invalid email format.');
      return;
    }

    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData) {
      const storedEmail = storedData.email;
      const storedPassword = storedData.password;
      const storedName = storedData.name;
      const storedAge = storedData.age;

      if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('name', storedName);
        localStorage.setItem('age', storedAge);

        navigate('/home');
      } else {
        setError('Incorrect credentials. Please try again.');
      }
    } else {
      setError('No credentials stored in the LocalStorage were found.');
    }
  };
  return (
    <main className={styles.main__container}>
      <form className={styles.form__container}>
        <h2 className={styles.form__title}>Login</h2>

        <InputField
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className={styles.button} type="submit" onClick={handleLogin}>Log In</button>
        {error && <span className={styles.error}>{error}</span>}
        <Link className={styles.link} to="/singup">Create an account - Sign Up</Link>
      </form>

      <Aside />

    </main>
  );
}

export default Login;