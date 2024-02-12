import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {ICar} from "../interfaces/carInterface";

interface IProps {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand} = car;

    let navigate = useNavigate();

    return (
        <div  style={{margin: "10px"}}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={() => navigate(id.toString(), {state: car})}>Details</button>
        </div>
    );
};

export {Car};
