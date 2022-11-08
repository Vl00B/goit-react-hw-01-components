import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.friends_item}>
    <span className={isOnline ? css.friend_online : css.friend_offline}></span>
    <img
      className={css.friends_avatar}
      src={avatar}
      alt="User avatar"
      width="48"
    />
    <p>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
