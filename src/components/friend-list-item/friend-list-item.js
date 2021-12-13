import React from "react";
import PropTypes from "prop-types";
import s from "./Friend-list-item.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.Item}>
      {isOnline ? (
        <span className={s.Status + " " + s.StatusOnline}></span>
      ) : (
        <span className={s.Status}></span>
      )}

      <img className={s.Avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.Name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
