// Common
import { AuthServices, Services } from '../interfaces';

// Resource
import auth from './auth';
import notes from './notes';
import users from './users';


export const authServices: AuthServices = {
    auth
}

const services: Services = {
    notes,
    users
};

export default services;