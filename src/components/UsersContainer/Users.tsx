import {useAppSelector} from "../../hooks/useAppSelector";
import {User} from "./User";
import {useEffect} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {userService} from "../../services/userService";
import {userActions} from "../../redux/slices/userSlice";

const Users = () => {
    const {users} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        userService.getAll().then(({data}) => {
            dispatch(userActions.setAll(data))
        });
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
