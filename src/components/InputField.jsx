import styles from '../styles/global.module.scss'
/* eslint-disable react/prop-types */
const InputField = ({ type, placeholder, value, onChange, required }) => (
  <input
    className={styles.input}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

export default InputField;