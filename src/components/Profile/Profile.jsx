import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    return (
        <div className={css.mainWrapper}>
            <div className={css.infoWrapper}>
                <div className={css.imgWrapper}>
                    <img
                        src={image}
                        alt={name}
                        width={120}
                        height={120}
                    />
                </div>
                <p><b>{name}</b></p>
                <p className={css.userInfo}>@{tag}</p>
                <p className={css.userInfo}>{location}</p>
            </div>

            <ul className={css.statsList}>
                <li className={css.statsListItem}>
                    <span>Followers</span>
                    <span><b>{followers}</b></span>
                </li>
                <li className={css.statsListItem}>
                    <span>Views</span>
                    <span><b>{views}</b></span>
                </li>
                <li className={css.statsListItem}>
                    <span>Likes</span>
                    <span><b>{likes}</b></span>
                </li>
            </ul>
        </div>
    );
}