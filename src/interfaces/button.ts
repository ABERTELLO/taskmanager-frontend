import { ActionInterface } from './context';


export interface CancelButtonDataInterface {
    readonly dispatch?: React.Dispatch<ActionInterface>;
    readonly dispatchType?: string;
    readonly redirectPath: string;
};

export interface SaveButtonDataInterface {
    readonly objToSave: any;
    readonly saveType: string;
    readonly service: string;
};
