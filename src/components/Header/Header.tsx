import {Link} from "react-router-dom";

import css from "./Header.module.css";
import {useAppSelector} from "../../hooks/useAppSelector";

const Header = () => {
    const {count} = useAppSelector(state => state.count);
    const {user} = useAppSelector(state => state.users);
    const {post} = useAppSelector(state => state.posts);

    return (
        <div className={css.Header}>
            <div className={css.links}>
                <Link to={'users'}>Users</Link>
                <Link to={'posts'}>Posts</Link>
                <Link to={'count'}>Count</Link>
            </div>
            <div>
                <div>user: {user}</div>
                <div>post: {post}</div>
                <div>count: {count}</div>
            </div>
        </div>
    );
};

export {Header};
