import {Outlet} from "react-router-dom";
import React from "react";

import {Cars} from "../components/Cars";

const CarsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};
