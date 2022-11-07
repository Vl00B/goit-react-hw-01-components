import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends_list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.friends_item} key={id}>
          {isOnline ? (
            <span className={css.friend_online}></span>
          ) : (
            <span className={css.friend_offline}></span>
          )}
          <img src={avatar} alt="User avatar" className={css.friend_avatar} />
          <p className={css.friend_name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
