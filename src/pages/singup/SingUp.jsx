import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useValidation } from "../../hooks/useValidation";

import Aside from "../../components/Aside";
import styles from '../../styles/global.module.scss'
import InputField from "../../components/InputField";

const SingUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState('');
  const { isEmailValid, isPasswordValid } = useValidation();

  const navigate = useNavigate();
  const handleSignUp = () => {
    setError('');

    if (!isEmailValid(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!isPasswordValid(password)) {
      setError('Password must have at least 6 characters.');
      return;
    }

    const userData = { email, password, age, name, lastname };
    localStorage.setItem('userData', JSON.stringify(userData));

    navigate('/login');
  };

  return (
    <main className={styles.main__container}>
      <form className={styles.form__container} >
        <h2 className={styles.form__title}>Sign Up</h2>

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

        <InputField
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <InputField
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <InputField
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />

        {error && <span className={styles.error}>{error}</span>}
        <button className={styles.button} onClick={handleSignUp}>Sign Up</button>

        <Link className={styles.link} to="/login">Are you already registered? - Login</Link>
      </form>

      <Aside />
    </main>
  )
}

export default SingUp