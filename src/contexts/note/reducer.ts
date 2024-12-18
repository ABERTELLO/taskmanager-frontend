// Common
import helpers from '../../helpers';
import { NoteState, NoteStatus } from '../../interfaces';

const { genericExpressions } = helpers.stringHelper;


enum notes_actions {
    CLEAR_FIELD_STATUS = 'CLEAR_FIELD_STATUS',
    CLEAR_PARAMS = 'CLEAR_PARAMS',
    CLEAR_STATE = 'CLEAR_STATE',
    SET_AUTHOR = 'SET_AUTHOR',
    SET_COMPLETED = 'SET_COMPLETED',
    SET_CONTENT = 'SET_CONTENT',
    SET_DATE = 'SET_DATE',
    SET_FILTER_BY_COMPLETED = 'SET_FILTER_BY_COMPLETED',
    SET_FILTER_BY_CONTENT = 'SET_FILTER_BY_CONTENT',
    SET_FILTER_BY_DATE = 'SET_FILTER_BY_DATE',
    SET_FILTER_BY_REGISTRATION_DATE = 'SET_FILTER_BY_REGISTRATION_DATE',
    SET_FILTER_BY_STATUS = 'SET_FILTER_BY_STATUS',
    SET_FILTER_BY_TITLE = 'SET_FILTER_BY_TITLE',
    SET_LOADING = 'SET_LOADING',
    SET_LOADING_RECORDS_ERROR = 'SET_LOADING_RECORDS_ERROR',
    SET_PAGINATION_LIMIT = 'SET_PAGINATION_LIMIT',
    SET_PAGINATION_PAGE = 'SET_PAGINATION_PAGE',
    SET_RECORDS_TO_RENDER = 'SET_RECORDS_TO_RENDER',
    SET_REGISTRATION_DATE = 'SET_REGISTRATION_DATE',
    SET_STATUS = 'SET_STATUS',
    SET_TITLE = 'SET_TITLE'
};

const initState: NoteState = {
    loading: false,
    loadingRecordsError: { message: '', status: false },
    paginationParams: {
        filters: {
            completed: null,
            content: null,
            date: null,
            registrationDate: null,
            status: null,
            title: null
        },
        limit: 7,
        page: 1
    },
    params: {
        author: { status: true, value: '' },
        completed: { status: true, value: false },
        content: { status: true, value: '' },
        date: { status: true, value: '' },
        registrationDate: { status: true, value: '' },
        status: { status: true, value: NoteStatus.regular },
        title: { status: true, value: '' },
    },
    recordsToRender: []
};

const reducer = (state: NoteState = initState, action: any): NoteState => {
    switch (action.type) {
        case notes_actions.CLEAR_FIELD_STATUS:
            return {
                ...state,
                params: {
                    author: { ...state.params.author, status: true },
                    completed: { ...state.params.completed, status: true },
                    content: { ...state.params.content, status: true },
                    date: { ...state.params.date, status: true },
                    registrationDate: { ...state.params.registrationDate, status: true },
                    status: { ...state.params.status, status: true },
                    title: { ...state.params.title, status: true }
                }
            };
        case notes_actions.CLEAR_PARAMS:
            return {
                ...state,
                params: initState.params
            };
        case notes_actions.CLEAR_STATE:
            return initState;
        case notes_actions.SET_AUTHOR:
            return {
                ...state,
                params: {
                    ...state.params,
                    author: {
                        ...state.params.author,
                        value: action.payload
                    }
                }
            };
        case notes_actions.SET_COMPLETED:
            return {
                ...state,
                params: {
                    ...state.params,
                    completed: {
                        ...state.params.completed,
                        value: action.payload
                    }
                }
            };
        case notes_actions.SET_CONTENT:
            return {
                ...state,
                params: {
                    ...state.params,
                    content: {
                        ...state.params.content,
                        value: action.payload
                    }
                }
            };
        case notes_actions.SET_DATE:
            return {
                ...state,
                params: {
                    ...state.params,
                    date: {
                        ...state.params.date,
                        value: action.payload
                    }
                }
            };
        case notes_actions.SET_FILTER_BY_COMPLETED:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        completed: action.payload
                    }
                }
            };
        case notes_actions.SET_FILTER_BY_CONTENT:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        content: action.payload
                    }
                }
            };
        case notes_actions.SET_FILTER_BY_DATE:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        date: action.payload
                    }
                }
            };
        case notes_actions.SET_FILTER_BY_REGISTRATION_DATE:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        registrationDate: action.payload
                    }
                }
            };
        case notes_actions.SET_FILTER_BY_STATUS:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        status: action.payload
                    }
                }
            };
        case notes_actions.SET_FILTER_BY_TITLE:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    filters: {
                        ...state.paginationParams.filters,
                        title: action.payload
                    }
                }
            };
        case notes_actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case notes_actions.SET_LOADING_RECORDS_ERROR:
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
        case notes_actions.SET_PAGINATION_LIMIT:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    limit: action.payload
                }
            };
        case notes_actions.SET_PAGINATION_PAGE:
            return {
                ...state,
                paginationParams: {
                    ...state.paginationParams,
                    page: action.payload
                }
            };
        case notes_actions.SET_RECORDS_TO_RENDER:
            return {
                ...state,
                recordsToRender: action.payload
            };
        case notes_actions.SET_REGISTRATION_DATE:
            return {
                ...state,
                params: {
                    ...state.params,
                    registrationDate: {
                        ...state.params.registrationDate,
                        value: action.payload
                    }
                }
            };
        case notes_actions.SET_STATUS:
            return {
                ...state,
                params: {
                    ...state.params,
                    status: {
                        ...state.params.status,
                        value: action.payload
                    }
                }
            };
        case notes_actions.SET_TITLE:
            return {
                ...state,
                params: {
                    ...state.params,
                    title: {
                        ...state.params.title,
                        value: action.payload
                    }
                }
            };
        default:
            return state;
    };
};

const note = {
    notes_actions,
    initState,
    reducer
};

export default note;