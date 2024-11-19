// Common
import user from '../contexts/user/reducer';

// Resource
import { Action } from './context';


interface UserBooleanParam {
    readonly status: null | string;
    readonly value: boolean;
};

interface UserRoleParam {
    readonly status: null | string;
    readonly value: UserRoles;
};

interface UserStringParam {
    readonly status: null | string;
    readonly value: string;
};

export enum UserRoles {
    admin = 'admin',
    user = 'user'
};

export interface UserConfirmSubscribe {
    readonly email: UserStringParam;
    readonly password: UserStringParam;
};

export interface UserContext {
    readonly actions: typeof user.actions;
    readonly users_state: UserState;
    readonly users_dispatch: React.Dispatch<Action>;
};

export interface UserParams {
    readonly email: UserStringParam;
    readonly fullName: UserStringParam;
    readonly isActive: UserBooleanParam;
    readonly password: UserStringParam;
    readonly role: UserRoleParam;
};

export interface UserState {
    readonly confirmSubscribe: UserConfirmSubscribe;
    readonly loading: boolean;
    readonly params: UserParams;
    readonly recordsToRender: SavedUser[];
    readonly visibilityOfRestorePasswordModal: boolean;
    readonly visibilityOfSuscribeModal: boolean;
    readonly visibilityOfUnsuscribeModal: boolean;
};

export interface SavedUser extends UserParams {
    readonly _id: string;
    readonly __v: number;
};