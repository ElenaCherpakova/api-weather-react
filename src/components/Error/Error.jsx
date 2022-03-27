import React from "react";
import styles from "./Error.module.css";
import PropTypes from "prop-types";

const Error = ({ message }) => (
  <div className={`${styles.error} alert position-absolute`} role="alert">
    {message}
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: "An error occurred",
};

export default Error;
