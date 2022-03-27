import React, { Fragment } from 'react';
import styles from "./Page.module.css";

import Header from '../Header/Header';

const Page = () => {
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>HII</div>
        </Fragment>
    );
};

export default Page;

