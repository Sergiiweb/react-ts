import {FC} from "react";
import {IPost} from "../../interfaces/postInterface";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {postActions} from "../../redux/slices/postSlice";

interface IProps {
    post: IPost;
}

const Post: FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post;

    const dispatch = useAppDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => dispatch(postActions.setCurrent(title))}>select</button>
        </div>
    );
};

export {Post};
