import helpers from '../helpers';
import type {
    NoteParams,
    PaginationParams,
    SavedNote
} from '../interfaces';

const { reqInit } = helpers.requestHelper;


const find = async (params: PaginationParams): Promise<Response | void> => {
    const { filters, limit, page } = params;
    const stringFilters = JSON.stringify(filters);
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/notes?page=${page}&limit=${limit}&filters=${stringFilters}`,
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
            `${process.env.REACT_APP_API_REST}/notes`,
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
            `${process.env.REACT_APP_API_REST}/notes/${id}`,
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
            `${process.env.REACT_APP_API_REST}/notes/${id}`,
            reqInit('DELETE')
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const save = async (data: NoteParams): Promise<Response | void> => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/notes`,
            reqInit('POST', data)
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const update = async (data: SavedNote): Promise<Response | void> => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/notes/${data._id}`,
            reqInit('PUT', data)
        );
        return response;
    } catch (error) {
        return console.log(error);
    };
};

const notes = {
    find,
    findAll,
    findById,
    remove,
    save,
    update
};

export default notes;