import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription/CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast/UpcomingDaysForecast';

import styles from './Forecast.module.css';

const Forecast = ({ forecast }) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={12}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay} />
                </div>
            </Col>
            <Col xs={12} md={12} className="d-flex flex-column justify-content-center">
                <CurrentDayDescription forecast={forecast.currentDayDetails} />
                <UpcomingDaysForecast days={forecast.upcomingDays} />
            </Col>
        </Row>
    </Container>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};

export default Forecast;

