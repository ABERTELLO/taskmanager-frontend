// Common
import {
    Action,
    AuthState
} from '../../interfaces';


enum auth_actions {
    CLEAR_FIELD_STATUS = 'CLEAR_FIELD_STATUS',
    CLEAR_LOGIN_PARAMS = 'CLEAR_LOGIN_PARAMS',
    CLEAR_REGISTRY_PARAMS = 'CLEAR_REGISTRY_PARAMS',
    CLEAR_STATE = 'CLEAR_STATE',
    SET_LOADING = 'SET_LOADING',
    SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL',
    SET_LOGIN_EMAIL_STATUS = 'SET_LOGIN_EMAIL_STATUS',
    SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD',
    SET_LOGIN_PASSWORD_STATUS = 'SET_LOGIN_PASSWORD_STATUS',
    SET_LOGIN_REMEMBER_ME = 'SET_LOGIN_REMEMBER_ME',
    SET_ERROR_INVALID_CREDENTIALS = 'SET_ERROR_INVALID_CREDENTIALS',
    SET_ERROR_PROCESSING_LOGIN = 'SET_ERROR_PROCESSING_LOGIN',
    SET_ERROR_PROCESSING_REGISTRY = 'SET_ERROR_PROCESSING_REGISTRY',
    SET_REFS = 'SET_REFS',
    SET_REGISTRY_CONFIRM_EMAIL = 'SET_REGISTRY_CONFIRM_EMAIL',
    SET_REGISTRY_CONFIRM_EMAIL_STATUS = 'SET_REGISTRY_CONFIRM_EMAIL_STATUS',
    SET_REGISTRY_CONFIRM_PASSWORD = 'SET_REGISTRY_CONFIRM_PASSWORD',
    SET_REGISTRY_CONFIRM_PASSWORD_STATUS = 'SET_REGISTRY_CONFIRM_PASSWORD_STATUS',
    SET_REGISTRY_EMAIL = 'SET_REGISTRY_EMAIL',
    SET_REGISTRY_EMAIL_STATUS = 'SET_REGISTRY_EMAIL_STATUS',
    SET_REGISTRY_PASSWORD = 'SET_REGISTRY_PASSWORD',
    SET_REGISTRY_PASSWORD_STATUS = 'SET_REGISTRY_PASSWORD_STATUS',
};

const initState: AuthState = {
    loading: false,
    loginError: { message: '', status: false },
    loginParams: {
        email: { status: true, value: '' },
        password: { status: true, value: '' },
        rememberMe: { status: true, value: false }
    },
    refs: { email: null },
    registryError: { message: '', status: false },
    registryParams: {
        confirmEmail: { status: true, value: '' },
        confirmPassword: { status: true, value: '' },
        email: { status: true, value: '' },
        password: { status: true, value: '' }
    }
};

const reducer = (state: AuthState = initState, action: Action): AuthState => {
    switch (action.type) {
        case auth_actions.CLEAR_FIELD_STATUS:
            return {
                ...state,
                loginParams: {
                    email: { ...state.loginParams.email, status: true },
                    password: { ...state.loginParams.password, status: true },
                    rememberMe: { ...state.loginParams.rememberMe, status: true }
                },
                registryParams: {
                    confirmEmail: { ...state.registryParams.confirmEmail, status: true },
                    confirmPassword: { ...state.registryParams.confirmPassword, status: true },
                    email: { ...state.registryParams.email, status: true },
                    password: { ...state.registryParams.password, status: true }
                }
            };
        case auth_actions.CLEAR_LOGIN_PARAMS:
            return {
                ...state,
                loginParams: initState.loginParams
            };
        case auth_actions.CLEAR_REGISTRY_PARAMS:
            return {
                ...state,
                registryParams: initState.registryParams
            };
        case auth_actions.CLEAR_STATE:
            return initState;
        case auth_actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case auth_actions.SET_LOGIN_EMAIL:
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
        case auth_actions.SET_LOGIN_EMAIL_STATUS:
            return {
                ...state,
                loginParams: {
                    ...state.loginParams,
                    email: {
                        ...state.loginParams.email,
                        status: action.payload
                    }
                }
            };
        case auth_actions.SET_LOGIN_PASSWORD:
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
        case auth_actions.SET_LOGIN_PASSWORD_STATUS:
            return {
                ...state,
                loginParams: {
                    ...state.loginParams,
                    password: {
                        ...state.loginParams.password,
                        status: action.payload
                    }
                }
            };
        case auth_actions.SET_LOGIN_REMEMBER_ME:
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
        case auth_actions.SET_ERROR_INVALID_CREDENTIALS:
            return {
                ...state,
                loginError: {
                    ...state.loginError,
                    message: action.payload ? 'Invalid credentials.' : '',
                    status: action.payload
                }
            };
        case auth_actions.SET_ERROR_PROCESSING_LOGIN:
            return {
                ...state,
                loginError: {
                    ...state.loginError,
                    message: action.payload ? 'Error processing login. Try again later.' : '',
                    status: action.payload
                }
            };
        case auth_actions.SET_ERROR_PROCESSING_REGISTRY:
            return {
                ...state,
                registryError: {
                    ...state.registryError,
                    message: action.payload ? 'Error processing registry. Try again later.' : '',
                    status: action.payload
                }
            };
        case auth_actions.SET_REFS:
            return {
                ...state,
                refs: action.payload
            };
        case auth_actions.SET_REGISTRY_CONFIRM_EMAIL:
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
        case auth_actions.SET_REGISTRY_CONFIRM_EMAIL_STATUS:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    confirmEmail: {
                        ...state.registryParams.confirmEmail,
                        status: action.payload
                    }
                }
            };
        case auth_actions.SET_REGISTRY_CONFIRM_PASSWORD:
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
        case auth_actions.SET_REGISTRY_CONFIRM_PASSWORD_STATUS:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    confirmPassword: {
                        ...state.registryParams.confirmPassword,
                        status: action.payload
                    }
                }
            };
        case auth_actions.SET_REGISTRY_EMAIL:
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
        case auth_actions.SET_REGISTRY_EMAIL_STATUS:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    email: {
                        ...state.registryParams.email,
                        status: action.payload
                    }
                }
            };
        case auth_actions.SET_REGISTRY_PASSWORD:
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
        case auth_actions.SET_REGISTRY_PASSWORD_STATUS:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    password: {
                        ...state.registryParams.password,
                        status: action.payload
                    }
                }
            };
        default:
            return state;
    };
};

const auth = {
    auth_actions,
    initState,
    reducer
};

export default auth;