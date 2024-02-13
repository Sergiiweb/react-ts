import {apiService, IRes} from "./apiService";
import {IUser} from "../interfaces/userInterface";
import {urls} from "../constants/urls";

const userService = {
    getAll(): IRes<IUser[]> {
        return apiService.get(urls.users);
    }
}

export {
    userService
}
