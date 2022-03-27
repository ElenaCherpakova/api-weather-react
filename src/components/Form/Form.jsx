import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [location, setLocation] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} form-control`}
        placeholder="Type Location"
        required
      />
      <button type="submit" className={styles.button} onClick={onSubmit}>
        Search
      </button>
    </form>
  );
}

export default Form;
