// Common
import auth from '../contexts/auth/reducer';

// Resource
import { Action } from './context';


interface AuthBooleanParam {
    readonly status: boolean;
    readonly value: boolean;
};

interface AuthStringParam {
    readonly status: boolean;
    readonly value: string;
};

export interface AuthContext {
    readonly auth_actions: typeof auth.auth_actions;
    readonly auth_state: AuthState;
    readonly auth_dispatch: React.Dispatch<Action>;
};

export interface AuthLoginParams {
    readonly email: AuthStringParam;
    readonly password: AuthStringParam;
    readonly rememberMe: AuthBooleanParam;
};

export interface AuthRegistryParams {
    readonly confirmEmail: AuthStringParam;
    readonly confirmPassword: AuthStringParam;
    readonly email: AuthStringParam;
    readonly password: AuthStringParam;
};

export interface AuthState {
    readonly loading: boolean;
    readonly loginError: { message: string, status: boolean };
    readonly loginParams: AuthLoginParams;
    readonly refs: { email: null };
    readonly registryError: { message: string, status: boolean };
    readonly registryParams: AuthRegistryParams;
};