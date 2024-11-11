import helpers from '../helpers';
import type {
    RequestParams,
    SavedUser,
    UserParams
} from '../interfaces';

const { reqInit } = helpers.requestHelper;


const find = async (params: RequestParams): Promise<Response | void> => {
    const { filters, limit, page } = params;
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/users?page=${page}&limit=${limit}&filters=${filters}`,
            reqInit('GET')
        );
        return response;
    } catch (error) {
        return console.log(error);
    }
};

const findAll = async (): Promise<Response | void> => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/users`,
            reqInit('GET')
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const findById = async (id: string): Promise<Response | void> => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/users/${id}`,
            reqInit('GET')
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const remove = async(id: string): Promise<Response | void> => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/users/${id}`,
            reqInit('DELETE')
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const save = async (data: UserParams): Promise<Response | void> => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/users`,
            reqInit('POST', data)
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const update = async (data: SavedUser): Promise<Response | void> => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/users/${data._id}`,
            reqInit('PUT', data)
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const users = {
    find,
    findAll,
    findById,
    remove,
    save,
    update
};

export default users;