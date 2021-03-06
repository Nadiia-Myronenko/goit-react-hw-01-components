import React from "react";
import PropTypes from "prop-types";
import s from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.Container}>
      <div className={s.Description}>
        <img className={s.Avatar} src={avatar} alt="User avatar" width="100" />
        <p className={s.Name}>{username}</p>
        <p className={s.Tag}>@{tag}</p>
        <p className={s.Location}>{location}</p>
      </div>

      <ul className={s.Stats}>
        <li>
          <span className={s.Label}>Followers</span>
          <span className={s.Quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.Label}>Views</span>
          <span className={s.Quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.Label}>Likes</span>
          <span className={s.Quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
