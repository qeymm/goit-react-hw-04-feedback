import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticsStyle.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={style.label}>
        Good: <span className={style.result}>{good}</span>
      </p>
      <p className={style.label}>
        Neutral: <span className={style.result}>{neutral}</span>
      </p>
      <p className={style.label}>
        Bad: <span className={style.result}>{bad}</span>
      </p>
      <p className={style.label}>
        Total: <span className={style.result}>{total}</span>
      </p>
      <p className={style.label}>
        Positive Feedback:{''}
        <span className={style.result}>{positivePercentage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
