import React, { Fragment } from "react";
import styles from "./Page.module.css";
import Form from "../Form/Form";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Forecast from "../Forecast/Forecast";
import Header from "../Header/Header";
import useForecast from "../../Hooks/useForecast";

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    submitRequest(value);
  };

  return (
    <Fragment>
      <Header />
      {!forecast ? (
      <div className={`${styles.box} position-relative`}>
        {!isLoading && <Form submitSearch={onSubmit} />}
        {isError && <Error message={isError} />}
        {isLoading && <Loader />}
      </div>) :
      ( <Forecast forecast={forecast}/>)}
    </Fragment>
  );
};

export default Page;
