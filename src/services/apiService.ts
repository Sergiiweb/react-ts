import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants/urls";

type IRes<T> = Promise<AxiosResponse<T>>;

const apiService = axios.create({baseURL});


export type {
    IRes
}
export {
    apiService
}
