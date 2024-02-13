import {useAppDispatch} from "../hooks/useAppDispatch";
import {countActions} from "../redux/slices/countSlice";
import css from "./CountPage.module.css";

const CountPage = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={css.CountPage}>
            <button className={css.button} onClick={() => dispatch(countActions.inc())}>increment</button>
            <button className={css.button} onClick={() => dispatch(countActions.dec())}>decrement</button>
            <button className={css.button} onClick={() => dispatch(countActions.reset())}>reset</button>
        </div>
    );
};

export {CountPage};
