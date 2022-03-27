import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
    setLocation("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={location}
        aria-label="location"
        type="text"
        className={`${styles.input} form-control`}
        placeholder="Type Location"
        required
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" className={styles.button} onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Form;
