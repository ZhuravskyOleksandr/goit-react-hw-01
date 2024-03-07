import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
    
    return (
        <div>
            <img className={css.imgFriend} src={avatar} alt={name} width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(css.friendStatus, {
                [css.online]: isOnline,
                [css.offline]: !isOnline,
            })}>{isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}