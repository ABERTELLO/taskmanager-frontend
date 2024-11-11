// Resource
import { Action } from './context';


export enum SaveService {
    auth = 'auth',
    notes = 'notes',
    users = 'users'
};

export enum SaveType {
    save = 'save',
    update = 'update'
};

export interface CancelButtonData {
    readonly dispatch?: React.Dispatch<Action>;
    readonly dispatchType?: string;
    readonly redirectPath: string;
};

export interface SaveButtonData {
    readonly objToSave: any;
    readonly saveType: SaveType;
    readonly service: SaveService;
};
