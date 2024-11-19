// Common
import { UserRoles, UserState } from '../../interfaces';


enum actions {
    CLEAR_FIELD_STATUS = 'CLEAR_FIELD_STATUS',
    CLEAR_PARAMS = 'CLEAR_PARAMS',
    CLEAR_STATE = 'CLEAR_STATE',
    SET_CONFIRM_EMAIL = 'SET_CONFIRM_EMAIL',
    SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD',
    SET_EMAIL = 'SET_EMAIL',
    SET_FULL_NAME = 'SET_FULL_NAME',
    SET_IS_ACTIVE = 'SET_IS_ACTIVE',
    SET_LOADING = 'SET_LOADING',
    SET_PASSWORD = 'SET_PASSWORD',
    SET_RECORDS_TO_RENDER = 'SET_RECORDS_TO_RENDER',
    SET_ROLE = 'SET_ROLE',
    SET_VISIBILITY_OF_RESTORE_PASSWORD_MODAL = 'SET_VISIBILITY_OF_RESTORE_PASSWORD_MODAL',
    SET_VISIBILITY_OF_SUSCRIBE_MODAL = 'SET_VISIBILITY_OF_SUSCRIBE_MODAL',
    SET_VISIBILITY_OF_UNSUSCRIBE_MODAL = 'SET_VISIBILITY_OF_UNSUSCRIBE_MODAL'
};

const initState: UserState = {
    loading: false,
    params: {
        email: { status: null, value: '' },
        fullName: { status: null, value: '' },
        isActive: { status: null, value: false },
        password: { status: null, value: '' },
        role: { status: null, value: UserRoles.user },
    },
    confirmSubscribe: {
        email: { status: null, value: '' },
        password: { status: null, value: '' }
    },
    recordsToRender: [],
    visibilityOfRestorePasswordModal: false,
    visibilityOfSuscribeModal: false,
    visibilityOfUnsuscribeModal: false
};

const reducer = (state: UserState = initState, action: any): UserState => {
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
                },
                confirmSubscribe: {
                    email: { ...state.confirmSubscribe.email, status: null },
                    password: { ...state.confirmSubscribe.password, status: null }
                }
            };
        case actions.CLEAR_PARAMS:
            return {
                ...state,
                params: initState.params,
                confirmSubscribe: initState.confirmSubscribe
            };
        case actions.CLEAR_STATE:
            return initState;
        case actions.SET_CONFIRM_EMAIL:
            return {
                ...state,
                confirmSubscribe: {
                    ...state.confirmSubscribe,
                    email: {
                        ...state.confirmSubscribe.email,
                        value: action.payload
                    }
                }
            };
        case actions.SET_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmSubscribe: {
                    ...state.confirmSubscribe,
                    password: {
                        ...state.confirmSubscribe.password,
                        value: action.payload
                    }
                }
            };
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
        case actions.SET_VISIBILITY_OF_RESTORE_PASSWORD_MODAL:
            return {
                ...state,
                visibilityOfRestorePasswordModal: action.payload
            };
        case actions.SET_VISIBILITY_OF_SUSCRIBE_MODAL:
            return {
                ...state,
                visibilityOfSuscribeModal: action.payload
            };
        case actions.SET_VISIBILITY_OF_UNSUSCRIBE_MODAL:
            return {
                ...state,
                visibilityOfUnsuscribeModal: action.payload
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