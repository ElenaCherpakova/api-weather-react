import React from "react";
import styles from "./Error.module.css";
// import propTypes from "prop-types";

function Error({ message }) {
  return (
    <div className={`${styles.error} alert position-absolute`} role="alert">
      {message}
    </div>
  );
}

// Error.propTypes = {
//   message: PropTypes.string,
// };

// Error.defaultProps = {
//   message: "An error occurred",
// };

export default Error;
