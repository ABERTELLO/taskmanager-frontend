import {
    ActionInterface,
    AuthStateInterface
} from '../../interfaces';


const actions = {
    CLEAR_FIELD_STATUS: 'CLEAR_FIELD_STATUS',
    CLEAR_LOGIN_PARAMS: 'CLEAR_LOGIN_PARAMS',
    CLEAR_REGISTRY_PARAMS: 'CLEAR_REGISTRY_PARAMS',
    CLEAR_STATE: 'CLEAR_STATE',
    SET_LOADING: 'SET_LOADING',
    SET_LOGIN_EMAIL: 'SET_LOGIN_EMAIL',
    SET_LOGIN_PASSWORD: 'SET_LOGIN_PASSWORD',
    SET_LOGIN_REMEMBER_ME: 'SET_LOGIN_REMEMBER_ME',
    SET_REGISTRY_CONFIRM_EMAIL: 'SET_REGISTRY_CONFIRM_EMAIL',
    SET_REGISTRY_CONFIRM_PASSWORD: 'SET_REGISTRY_CONFIRM_PASSWORD',
    SET_REGISTRY_EMAIL: 'SET_REGISTRY_EMAIL',
    SET_REGISTRY_PASSWORD: 'SET_REGISTRY_PASSWORD',
};

const initState: AuthStateInterface = {
    loading: false,
    loginParams: {
        email: { status: null, value: '' },
        password: { status: null, value: '' },
        rememberMe: { status: null, value: false }
    },
    registryParams: {
        confirmEmail: { status: null, value: '' },
        confirmPassword: { status: null, value: '' },
        email: { status: null, value: '' },
        password: { status: null, value: '' }
    }
};

const reducer = (state: AuthStateInterface = initState, action: ActionInterface): AuthStateInterface => {
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
                    email: action.payload
                }
            };
        case actions.SET_LOGIN_PASSWORD:
            return {
                ...state,
                loginParams: {
                    ...state.loginParams,
                    password: action.payload
                }
            };
        case actions.SET_LOGIN_REMEMBER_ME:
            return {
                ...state,
                loginParams: {
                    ...state.loginParams,
                    rememberMe: action.payload
                }
            };
        case actions.SET_REGISTRY_CONFIRM_EMAIL:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    confirmEmail: action.payload
                }
            };
        case actions.SET_REGISTRY_CONFIRM_PASSWORD:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    confirmPassword: action.payload
                }
            };
        case actions.SET_REGISTRY_EMAIL:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    email: action.payload
                }
            };
        case actions.SET_REGISTRY_PASSWORD:
            return {
                ...state,
                registryParams: {
                    ...state.registryParams,
                    password: action.payload
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