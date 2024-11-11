// Common
import {
    Action,
    AuthState
} from '../../interfaces';


enum actions {
    CLEAR_FIELD_STATUS = 'CLEAR_FIELD_STATUS',
    CLEAR_LOGIN_PARAMS = 'CLEAR_LOGIN_PARAMS',
    CLEAR_REGISTRY_PARAMS = 'CLEAR_REGISTRY_PARAMS',
    CLEAR_STATE = 'CLEAR_STATE',
    SET_LOADING = 'SET_LOADING',
    SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL',
    SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD',
    SET_LOGIN_REMEMBER_ME = 'SET_LOGIN_REMEMBER_ME',
    SET_ERROR_INVALID_CREDENTIALS = 'SET_ERROR_INVALID_CREDENTIALS',
    SET_ERROR_PROCESSING_LOGIN = 'SET_ERROR_PROCESSING_LOGIN',
    SET_ERROR_PROCESSING_REGISTRY = 'SET_ERROR_PROCESSING_REGISTRY',
    SET_REGISTRY_CONFIRM_EMAIL = 'SET_REGISTRY_CONFIRM_EMAIL',
    SET_REGISTRY_CONFIRM_PASSWORD = 'SET_REGISTRY_CONFIRM_PASSWORD',
    SET_REGISTRY_EMAIL = 'SET_REGISTRY_EMAIL',
    SET_REGISTRY_PASSWORD = 'SET_REGISTRY_PASSWORD',
};

const initState: AuthState = {
    loading: false,
    loginError: { message: '', status: false },
    loginParams: {
        email: { status: null, value: '' },
        password: { status: null, value: '' },
        rememberMe: { status: null, value: false }
    },
    registryError: { message: '', status: false },
    registryParams: {
        confirmEmail: { status: null, value: '' },
        confirmPassword: { status: null, value: '' },
        email: { status: null, value: '' },
        password: { status: null, value: '' }
    }
};

const reducer = (state: AuthState = initState, action: Action): AuthState => {
    switch (action.type) {
        case actions.CLEAR_FIELD_STATUS:
            return {
                ...state,
                loginParams: {
                    email: { ...state.loginParams.email, status: null },
                    password: { ...state.loginParams.password, status: null },
                    rememberMe: { ...state.loginParams.rememberMe, status: null }
                },
                registryParams: {
                    confirmEmail: { ...state.registryParams.confirmEmail, status: null },
                    confirmPassword: { ...state.registryParams.confirmPassword, status: null },
                    email: { ...state.registryParams.email, status: null },
                    password: { ...state.registryParams.password, status: null }
                }
            };
        case actions.CLEAR_LOGIN_PARAMS:
            return {
                ...state,
                loginParams: initState.loginParams
            };
        case actions.CLEAR_REGISTRY_PARAMS:
            return {
                ...state,
                registryParams: initState.registryParams
            };
        case actions.CLEAR_STATE:
            return initState;
        case actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case actions.SET_LOGIN_EMAIL:
            return {
                ...state,
                loginParams: {
                    ...state.loginParams,
                    email: {
                        ...state.loginParams.email,
                        value: action.payload
                    }
                }
            };
        case actions.SET_LOGIN_PASSWORD:
            return {
                ...state,
                loginParams: {
                    ...state.loginParams,
                    password: {
                        ...state.loginParams.password,
                        value: action.payload
                    }
                }
            };
        case actions.SET_LOGIN_REMEMBER_ME:
            return {
                ...state,
                loginParams: {
                    ...state.loginParams,
                    rememberMe: {
                        ...state.loginParams.rememberMe,
                        value: action.payload
                    }
                }
            };
        case actions.SET_ERROR_INVALID_CREDENTIALS:
            return {
                ...state,
                loginError: {
                    ...state.loginError,
                    message: 'Invalid credentials.',
                    status: true
                }
            };
        case actions.SET_ERROR_PROCESSING_LOGIN:
            return {
                ...state,
                loginError: {
                    ...state.loginError,
                    message: 'Error processing login. Try again later.',
                    status: true
                }
            };
        case actions.SET_ERROR_PROCESSING_REGISTRY:
            return {
                ...state,
                registryError: {
                    ...state.registryError,
                    message: 'Error processing registry. Try again later.',
                    status: true
                }
            };
        case actions.SET_REGISTRY_CONFIRM_EMAIL:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    confirmEmail: {
                        ...state.registryParams.confirmEmail,
                        value: action.payload
                    }
                }
            };
        case actions.SET_REGISTRY_CONFIRM_PASSWORD:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    confirmPassword: {
                        ...state.registryParams.confirmPassword,
                        value: action.payload
                    }
                }
            };
        case actions.SET_REGISTRY_EMAIL:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    email: {
                        ...state.registryParams.email,
                        value: action.payload
                    }
                }
            };
        case actions.SET_REGISTRY_PASSWORD:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    password: {
                        ...state.registryParams.password,
                        value: action.payload
                    }
                }
            };
        default:
            return state;
    };
};

const auth = {
    actions,
    initState,
    reducer
};

export default auth;