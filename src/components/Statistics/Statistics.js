import React from 'react';
import Notification from '../Notification/Notification';
import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <div className={css.statistics}>
      <h3 className={css.statistics}>Statistics:</h3>
      <p className={css.statistics}>Good: {good}</p>
      <p className={css.statistics}>Neutral: {neutral}</p>
      <p className={css.statistics}>Bad: {bad}</p>
      <p className={css.statistics}>Total: {total}</p>
      <p className={css.statistics}>Positive Percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
