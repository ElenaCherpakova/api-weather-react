import React, { Fragment } from "react";
import styles from "./Page.module.css";
import Form from "../Form/Form";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Forecast from "../Forecast/Forecast";
import Header from "../Header/Header";
import useForecast from "../../Hooks/useForecast";

const Page = () => {
  const [isError, isLoading, forecast] = useForecast();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Fragment>
      <Header />
      <div className={styles.box}>
        {!isLoading && <Form submitSearch={onSubmit} />}
        {isError && <Error message={isError}/>}
        {isLoading && <Loader />}
      </div>
      {forecast && <Forecast />}
    </Fragment>
  );
};

export default Page;
