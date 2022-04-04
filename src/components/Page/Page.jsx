import React, { Fragment } from "react";

import Header from "../Header/Header";
import Form from "../Form/Form";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Forecast from "../Forecast/Forecast";
import useForecast from "../../hooks/useForecast";

import styles from "./Page.module.css";

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
                    {/* Form */}
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {/* Error */}
                    {isError && <Error message={isError} />}
                    {/* Loader */}
                    {isLoading && <Loader />}
                </div>
            ) : (
                <Forecast forecast={forecast} />
            )}
        </Fragment>
    );
};

export default Page;
