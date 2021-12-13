import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import getRandomColor from "./random-color";

export default function Statistics({ title, stats }) {
  return (
    <section className={s.Statistics}>
      {title && <h2 className={s.Title}>{title}</h2>}

      <ul className={s.Stat}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.Item}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
