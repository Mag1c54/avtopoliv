import React from "react";
import styles from "./input-field.module.css";

const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
      required
    />
  );
};

export default InputField;
