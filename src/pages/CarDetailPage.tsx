import {useAppLocation} from "../hooks/useAppLocation";
import {ICar} from "../interfaces/carInterface";

const CarDetailPage = () => {
    const {state} = useAppLocation<ICar>();

    return (
        <div>
            <div>id: {state.id}</div>
            <div>brand: {state.brand}</div>
            <div>price: {state.price}</div>
            <div>year: {state.year}</div>
        </div>
    );
};

export {CarDetailPage};
