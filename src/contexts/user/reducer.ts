// Common
import helpers from '../../helpers';
import { UserRoles, UserState } from '../../interfaces';

const { genericExpressions } = helpers.stringHelper;


enum users_actions {
    CLEAR_FIELD_STATUS = 'CLEAR_FIELD_STATUS',
    CLEAR_PARAMS = 'CLEAR_PARAMS',
    CLEAR_STATE = 'CLEAR_STATE',
    SET_CONFIRM_EMAIL = 'SET_CONFIRM_EMAIL',
    SET_CONFIRM_EMAIL_STATUS = 'SET_CONFIRM_EMAIL_STATUS',
    SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD',
    SET_CONFIRM_PASSWORD_STATUS = 'SET_CONFIRM_PASSWORD_STATUS',
    SET_EMAIL = 'SET_EMAIL',
    SET_EMAIL_STATUS = 'SET_EMAIL_STATUS',
    SET_FILTER_BY_EMAIL = 'SET_FILTER_BY_EMAIL',
    SET_FILTER_BY_FULLNAME = 'SET_FILTER_BY_FULLNAME',
    SET_FILTER_BY_IS_ACTIVE = 'SET_FILTER_BY_IS_ACTIVE',
    SET_FILTER_BY_ROLE = 'SET_FILTER_BY_ROLE',
    SET_FULL_NAME = 'SET_FULL_NAME',
    SET_FULL_NAME_STATUS = 'SET_FULL_NAME_STATUS',
    SET_IS_ACTIVE = 'SET_IS_ACTIVE',
    SET_IS_ACTIVE_STATUS = 'SET_IS_ACTIVE_STATUS',
    SET_LOADING = 'SET_LOADING',
    SET_LOADING_RECORDS_ERROR = 'SET_LOADING_RECORDS_ERROR',
    SET_PAGINATION_LIMIT = 'SET_PAGINATION_LIMIT',
    SET_PAGINATION_PAGE = 'SET_PAGINATION_PAGE',
    SET_PASSWORD = 'SET_PASSWORD',
    SET_PASSWORD_STATUS = 'SET_PASSWORD_STATUS',
    SET_RECORDS_TO_RENDER = 'SET_RECORDS_TO_RENDER',
    SET_ROLE = 'SET_ROLE',
    SET_ROLE_STATUS = 'SET_ROLE_STATUS',
    SET_SAVE_USER_ERROR = 'SET_SAVE_USER_ERROR',
    SET_SHOW_PASSWORDS_IN_RENDER = 'SET_SHOW_PASSWORDS_IN_RENDER',
    SET_VISIBILITY_OF_RESTORE_PASSWORD_MODAL = 'SET_VISIBILITY_OF_RESTORE_PASSWORD_MODAL',
    SET_VISIBILITY_OF_SUSCRIBE_MODAL = 'SET_VISIBILITY_OF_SUSCRIBE_MODAL',
    SET_VISIBILITY_OF_UNSUSCRIBE_MODAL = 'SET_VISIBILITY_OF_UNSUSCRIBE_MODAL'
};

const initState: UserState = {
    loading: false,
    loadingRecordsError: { message: '', status: false },
    paginationParams: {
        filters: {
            email: null,
            fullName: null,
            isActive: null,
            role: null
        },
        limit: 7,
        page: 1
    },
    params: {
        email: { status: true, value: '' },
        fullName: { status: true, value: '' },
        isActive: { status: true, value: false },
        password: { status: true, value: '' },
        role: { status: true, value: UserRoles.user },
    },
    confirmSubscribe: {
        email: { status: true, value: '' },
        password: { status: true, value: '' }
    },
    recordsToRender: [],
    saveUserError: { message: '', status: false },
    showPasswordsInRender: false,
    visibilityOfRestorePasswordModal: false,
    visibilityOfSuscribeModal: false,
    visibilityOfUnsuscribeModal: false
};

const reducer = (state: UserState = initState, action: any): UserState => {
    switch (action.type) {
        case users_actions.CLEAR_FIELD_STATUS:
            return {
                ...state,
                params: {
                    email: { ...state.params.email, status: true },
                    fullName: { ...state.params.fullName, status: true },
                    isActive: { ...state.params.isActive, status: true },
                    password: { ...state.params.password, status: true },
                    role: { ...state.params.role, status: true }
                },
                confirmSubscribe: {
                    email: { ...state.confirmSubscribe.email, status: true },
                    password: { ...state.confirmSubscribe.password, status: true }
                }
            };
        case users_actions.CLEAR_PARAMS:
            return {
                ...state,
                params: initState.params,
                confirmSubscribe: initState.confirmSubscribe
            };
        case users_actions.CLEAR_STATE:
            return initState;
        case users_actions.SET_CONFIRM_EMAIL:
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
        case users_actions.SET_CONFIRM_EMAIL_STATUS:
            return {
                ...state,
                confirmSubscribe: {
                    ...state.confirmSubscribe,
                    email: {
                        ...state.confirmSubscribe.email,
                        status: action.payload
                    }
                }
            };
        case users_actions.SET_CONFIRM_PASSWORD:
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
        case users_actions.SET_CONFIRM_PASSWORD_STATUS:
            return {
                ...state,
                confirmSubscribe: {
                    ...state.confirmSubscribe,
                    password: {
                        ...state.confirmSubscribe.password,
                        status: action.payload
                    }
                }
            };
        case users_actions.SET_EMAIL:
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
        case users_actions.SET_EMAIL_STATUS:
            return {
                ...state,
                params: {
                    ...state.params,
                    email: {
                        ...state.params.email,
                        status: action.payload
                    }
                }
            };
        case users_actions.SET_FILTER_BY_EMAIL:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        email: action.payload
                    }
                }
            };
        case users_actions.SET_FILTER_BY_FULLNAME:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        fullName: action.payload
                    }
                }
            };
        case users_actions.SET_FILTER_BY_IS_ACTIVE:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        isActive: action.payload
                    }
                }
            };
        case users_actions.SET_FILTER_BY_ROLE:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        role: action.payload
                    }
                }
            };
        case users_actions.SET_FULL_NAME:
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
        case users_actions.SET_FULL_NAME_STATUS:
            return {
                ...state,
                params: {
                    ...state.params,
                    fullName: {
                        ...state.params.fullName,
                        status: action.payload
                    }
                }
            };
        case users_actions.SET_IS_ACTIVE:
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
        case users_actions.SET_IS_ACTIVE_STATUS:
            return {
                ...state,
                params: {
                    ...state.params,
                    isActive: {
                        ...state.params.isActive,
                        status: action.payload
                    }
                }
            };
        case users_actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
            case users_actions.SET_LOADING_RECORDS_ERROR:
            return {
                ...state,
                loadingRecordsError: {
                    ...state.loadingRecordsError,
                    message: action.payload
                        ? genericExpressions.processingRecordsError
                        : '',
                    status: action.payload
                }
            };
        case users_actions.SET_PAGINATION_LIMIT:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    limit: action.payload
                }
            };
        case users_actions.SET_PAGINATION_PAGE:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    page: action.payload
                }
            };
        case users_actions.SET_PASSWORD:
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
        case users_actions.SET_PASSWORD_STATUS:
            return {
                ...state,
                params: {
                    ...state.params,
                    password: {
                        ...state.params.password,
                        status: action.payload
                    }
                }
            };
        case users_actions.SET_RECORDS_TO_RENDER:
            return {
                ...state,
                recordsToRender: action.payload
            };
        case users_actions.SET_ROLE:
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
        case users_actions.SET_ROLE_STATUS:
            return {
                ...state,
                params: {
                    ...state.params,
                    role: {
                        ...state.params.role,
                        status: action.payload
                    }
                }
            };
        case users_actions.SET_SAVE_USER_ERROR:
            return {
                ...state,
                saveUserError: action.payload
            };
        case users_actions.SET_SHOW_PASSWORDS_IN_RENDER:
            return {
                ...state,
                showPasswordsInRender: action.payload
            };
        case users_actions.SET_VISIBILITY_OF_RESTORE_PASSWORD_MODAL:
            return {
                ...state,
                visibilityOfRestorePasswordModal: action.payload
            };
        case users_actions.SET_VISIBILITY_OF_SUSCRIBE_MODAL:
            return {
                ...state,
                visibilityOfSuscribeModal: action.payload
            };
        case users_actions.SET_VISIBILITY_OF_UNSUSCRIBE_MODAL:
            return {
                ...state,
                visibilityOfUnsuscribeModal: action.payload
            };
        default:
            return state;
    };
};

const user = {
    users_actions,
    initState,
    reducer
};

export default user;