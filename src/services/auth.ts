// Common
import helpers from '../helpers';
import type { AuthLoginParams } from '../interfaces';

const { reqInit } = helpers.requestHelper;


const login = async (data: AuthLoginParams): Promise<Response | void> => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/auth/login`,
            reqInit('POST', data)
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const auth = {
    login
};

export default auth;