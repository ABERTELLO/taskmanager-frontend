import helpers from '../helpers';
import type {
    NoteParamsInterface,
    RequestParamsInterface,
    SavedNoteInterface
} from '../interfaces';

const { reqInit } = helpers.requestHelper;


const find = async (params: RequestParamsInterface): Promise<Response | void> => {
    const { filters, limit, page } = params;
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_REST}/notes?page=${page}&limit=${limit}&filters=${filters}`,
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

const save = async (data: NoteParamsInterface): Promise<Response | void> => {
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

const update = async (data: SavedNoteInterface): Promise<Response | void> => {
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