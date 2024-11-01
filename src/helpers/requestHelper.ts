import { RequestInitDataType } from '../interfaces';


const reqInit = (method: string, data: RequestInitDataType = null) => {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const reqConfig = {
        body: data ? JSON.stringify(data) : null,
        headers: {
            'Authorization': token ?? null,
            'Content-Type': 'application/json'
        },
        method
    };
    return reqConfig;
};

const requestHelper = {
    reqInit
};

export default requestHelper;