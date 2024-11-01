// Common
import { AuthServicesInterface, ServicesInterface } from '../interfaces';

// Resource
import auth from './auth';
import notes from './notes';
import users from './users';


export const authServices: AuthServicesInterface = {
    auth
}

const services: ServicesInterface = {
    notes,
    users
};

export default services;