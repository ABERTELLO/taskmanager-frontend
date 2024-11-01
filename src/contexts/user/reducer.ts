import { UserStateInterface } from '../../interfaces';


const actions = {
    CLEAR_FIELD_STATUS: 'CLEAR_FIELD_STATUS',
    CLEAR_PARAMS: 'CLEAR_PARAMS',
    CLEAR_STATE: 'CLEAR_STATE',
    SET_EMAIL: 'SET_EMAIL',
    SET_FULL_NAME: 'SET_FULL_NAME',
    SET_IS_ACTIVE: 'SET_IS_ACTIVE',
    SET_LOADING: 'SET_LOADING',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_RECORDS_TO_RENDER: 'SET_RECORDS_TO_RENDER',
    SET_ROLES: 'SET_ROLES'
};

const initState: UserStateInterface = {
    loading: false,
    params: {
        email: { status: null, value: '' },
        fullName: { status: null, value: '' },
        isActive: { status: null, value: false },
        password: { status: null, value: '' },
        roles: { status: null, value: [] },
    },
    recordsToRender: []
};

const reducer = (state: UserStateInterface = initState, action: any): UserStateInterface => {
    const { type, payload } = action;

    switch (type) {
        case actions.CLEAR_FIELD_STATUS:
            return {
                ...state,
                params: {
                    email: { ...state.params.email, status: null },
                    fullName: { ...state.params.fullName, status: null },
                    isActive: { ...state.params.isActive, status: null },
                    password: { ...state.params.password, status: null },
                    roles: { ...state.params.roles, status: null }
                }
            };
        case actions.CLEAR_PARAMS:
            return {
                ...state,
                params: initState.params
            };
        case actions.CLEAR_STATE:
            return initState;
        case actions.SET_EMAIL:
            return {
                ...state,
                params: {
                    ...state.params,
                    email: payload
                }
            };
        case actions.SET_FULL_NAME:
            return {
                ...state,
                params: {
                    ...state.params,
                    fullName: payload
                }
            };
        case actions.SET_IS_ACTIVE:
            return {
                ...state,
                params: {
                    ...state.params,
                    isActive: payload
                }
            };
        case actions.SET_LOADING:
            return {
                ...state,
                loading: payload
            };
        case actions.SET_PASSWORD:
            return {
                ...state,
                params: {
                    ...state.params,
                    password: payload
                }
            };
        case actions.SET_RECORDS_TO_RENDER:
            return {
                ...state,
                recordsToRender: payload
            };
        case actions.SET_ROLES:
            return {
                ...state,
                params: {
                    ...state.params,
                    roles: payload
                }
            };
        default:
            return state;
    };
};

const user = {
    actions,
    initState,
    reducer
};

export default user;