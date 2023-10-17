import styles from "../styles/navbar.module.scss";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className={styles.nav__container}>
      <p>Do Something</p>
      <ul className={styles.nav__ul}>
        <li>
          <p>{user.name}</p>
        </li>
        <li>
          <p>{user.age} years</p>
        </li>
        <li>
          <button className={styles.button} onClick={logout}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;