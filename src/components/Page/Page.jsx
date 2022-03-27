import React, { Fragment } from "react";
import styles from "./Page.module.css";
import Form from "../Form/Form";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Forecast from "../Forecast/Forecast";
import Header from "../Header/Header";

const Page = () => {
 

  return (
    <Fragment>
      <Header />
      <div className={styles.box}>
        <Form />
        {/* <Error />
        <Loader />
        <Forecast /> */}
      </div>
    </Fragment>
  );
};

export default Page;
