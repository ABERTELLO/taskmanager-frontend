import { ActionInterface } from './context';


interface AuthActionsInterface {
    readonly CLEAR_FIELD_STATUS: string;
    readonly CLEAR_LOGIN_PARAMS: string;
    readonly CLEAR_REGISTRY_PARAMS: string;
    readonly CLEAR_STATE: string;
    readonly SET_LOADING: string;
    readonly SET_LOGIN_EMAIL: string;
    readonly SET_LOGIN_PASSWORD: string;
    readonly SET_LOGIN_REMEMBER_ME: string;
    readonly SET_REGISTRY_CONFIRM_EMAIL: string;
    readonly SET_REGISTRY_CONFIRM_PASSWORD: string;
    readonly SET_REGISTRY_EMAIL: string;
    readonly SET_REGISTRY_PASSWORD: string;
};

interface AuthBooleanParam {
    readonly status: null | string;
    readonly value: boolean;
};

interface AuthStringParam {
    readonly status: null | string;
    readonly value: string;
};

export interface AuthContextInterface {
    readonly actions: AuthActionsInterface;
    readonly auth_state: AuthStateInterface;
    readonly auth_dispatch: React.Dispatch<ActionInterface>;
};

export interface AuthLoginParams {
    readonly email: AuthStringParam;
    readonly password: AuthStringParam;
    readonly rememberMe: AuthBooleanParam;
};

export interface AuthRegistryParamsInterface {
    readonly confirmEmail: AuthStringParam;
    readonly confirmPassword: AuthStringParam;
    readonly email: AuthStringParam;
    readonly password: AuthStringParam;
};

export interface AuthStateInterface {
    readonly loading: boolean;
    readonly loginParams: AuthLoginParams;
    readonly registryParams: AuthRegistryParamsInterface;
};