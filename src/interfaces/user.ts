import { ActionInterface } from './context';


interface UserActionsInterface {
    readonly CLEAR_FIELD_STATUS: string;
    readonly CLEAR_PARAMS: string;
    readonly CLEAR_STATE: string;
    readonly SET_EMAIL: string;
    readonly SET_FULL_NAME: string;
    readonly SET_IS_ACTIVE: string;
    readonly SET_LOADING: string;
    readonly SET_PASSWORD: string;
    readonly SET_RECORDS_TO_RENDER: string;
    readonly SET_ROLE: string;
};

interface UserBooleanParam {
    readonly status: null | string;
    readonly value: boolean;
};

interface UserRoleParam {
    readonly status: null | string;
    readonly value: 'admin' | 'user';
};

interface UserStringParam {
    readonly status: null | string;
    readonly value: string;
};

export interface UserContextInterface {
    readonly actions: UserActionsInterface;
    readonly users_state: UserStateInterface;
    readonly users_dispatch: React.Dispatch<ActionInterface>;
}

export interface UserParamsInterface {
    readonly email: UserStringParam;
    readonly fullName: UserStringParam;
    readonly isActive: UserBooleanParam;
    readonly password: UserStringParam;
    readonly role: UserRoleParam;
};


export interface UserStateInterface {
    readonly loading: boolean;
    readonly params: UserParamsInterface;
    readonly recordsToRender: SavedUserInterface[];
};

export interface SavedUserInterface extends UserParamsInterface {
    readonly _id: string;
    readonly __v: number;
};