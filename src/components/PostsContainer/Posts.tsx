import {useEffect} from "react";

import {useAppSelector} from "../../hooks/useAppSelector";
import {Post} from "./Post";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {postService} from "../../services/postService";
import {postActions} from "../../redux/slices/postSlice";

const Posts = () => {
    const {posts} = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        postService.getAll().then(({data}) => {
            dispatch(postActions.setAll(data));
        })
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
