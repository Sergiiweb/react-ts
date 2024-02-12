import {useEffect, useState} from "react";

import {carService} from "../services/carService";
import {ICar} from "../interfaces/carInterface";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            <hr/>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};
