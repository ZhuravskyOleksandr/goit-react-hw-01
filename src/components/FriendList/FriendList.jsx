import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({friends}) {
    return (
        <ul className={css.friendsList}>
            {friends.map(({ avatar, name, isOnline, id }) => 
                <li className={css.friendsListItem} key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </li>)}
        </ul>
    );
}