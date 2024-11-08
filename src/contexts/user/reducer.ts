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
    SET_ROLE: 'SET_ROLE'
};

const initState: UserStateInterface = {
    loading: false,
    params: {
        email: { status: null, value: '' },
        fullName: { status: null, value: '' },
        isActive: { status: null, value: false },
        password: { status: null, value: '' },
        role: { status: null, value: 'user' },
    },
    recordsToRender: []
};

const reducer = (state: UserStateInterface = initState, action: any): UserStateInterface => {
    switch (action.type) {
        case actions.CLEAR_FIELD_STATUS:
            return {
                ...state,
                params: {
                    email: { ...state.params.email, status: null },
                    fullName: { ...state.params.fullName, status: null },
                    isActive: { ...state.params.isActive, status: null },
                    password: { ...state.params.password, status: null },
                    role: { ...state.params.role, status: null }
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
                    email: {
                        ...state.params.email,
                        value: action.payload
                    }
                }
            };
        case actions.SET_FULL_NAME:
            return {
                ...state,
                params: {
                    ...state.params,
                    fullName: {
                        ...state.params.fullName,
                        value: action.payload
                    }
                }
            };
        case actions.SET_IS_ACTIVE:
            return {
                ...state,
                params: {
                    ...state.params,
                    isActive: {
                        ...state.params.isActive,
                        value: action.payload
                    }
                }
            };
        case actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case actions.SET_PASSWORD:
            return {
                ...state,
                params: {
                    ...state.params,
                    password: {
                        ...state.params.password,
                        value: action.payload
                    }
                }
            };
        case actions.SET_RECORDS_TO_RENDER:
            return {
                ...state,
                recordsToRender: action.payload
            };
        case actions.SET_ROLE:
            return {
                ...state,
                params: {
                    ...state.params,
                    role: {
                        ...state.params.role,
                        value: action.payload
                    }
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