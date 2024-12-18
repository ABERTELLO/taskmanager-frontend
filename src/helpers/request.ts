// Resource
import { RequestInitDataType, StateParams } from '../interfaces';


const extractValues = (params: StateParams): any => {
    const paramsKeys = Object.keys(params);
    const paramsObj = Object.values(params);
    const objValues: any = {};
    for (let index = 0; index < paramsKeys.length; index++) {
        const key = paramsKeys[index];
        const value = paramsObj[index].value;
        objValues[key] = value;
    };
    return objValues;
};

const reqInit = (method: string, data: RequestInitDataType = null): RequestInit => {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const reqConfig = {
        body: data ? JSON.stringify(data) : null,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        method
    };
    return reqConfig;
};

const requestHelper = {
    extractValues,
    reqInit
};

export default requestHelper;