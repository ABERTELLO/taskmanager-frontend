import { NoteStateInterface } from '../../interfaces';


const actions = {
    CLEAR_FIELD_STATUS: 'CLEAR_FIELD_STATUS',
    CLEAR_PARAMS: 'CLEAR_PARAMS',
    CLEAR_STATE: 'CLEAR_STATE',
    SET_AUTHOR: 'SET_AUTHOR',
    SET_COMPLETED: 'SET_COMPLETED',
    SET_CONTENT: 'SET_CONTENT',
    SET_DATE: 'SET_DATE',
    SET_LOADING: 'SET_LOADING',
    SET_RECORDS_TO_RENDER: 'SET_RECORDS_TO_RENDER',
    SET_REGISTRATION_DATE: 'SET_REGISTRATION_DATE',
    SET_STATUS: 'SET_STATUS',
    SET_TITLE: 'SET_TITLE'
};

const initState: NoteStateInterface = {
    loading: false,
    params: {
        author: { status: null, value: '' },
        completed: { status: null, value: false },
        content: { status: null, value: '' },
        date: { status: null, value: '' },
        registrationDate: { status: null, value: '' },
        status: { status: null, value: [] },
        title: { status: null, value: '' },
    },
    recordsToRender: []
};

const reducer = (state: NoteStateInterface = initState, action: any): NoteStateInterface => {
    switch (action.type) {
        case actions.CLEAR_FIELD_STATUS:
            return {
                ...state,
                params: {
                    author: { ...state.params.author, status: null },
                    completed: { ...state.params.completed, status: null },
                    content: { ...state.params.content, status: null },
                    date: { ...state.params.date, status: null },
                    registrationDate: { ...state.params.registrationDate, status: null },
                    status: { ...state.params.status, status: null },
                    title: { ...state.params.title, status: null }
                }
            };
        case actions.CLEAR_PARAMS:
            return {
                ...state,
                params: initState.params
            };
        case actions.CLEAR_STATE:
            return initState;
        case actions.SET_AUTHOR:
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
        case actions.SET_COMPLETED:
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
        case actions.SET_CONTENT:
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
        case actions.SET_DATE:
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
        case actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case actions.SET_RECORDS_TO_RENDER:
            return {
                ...state,
                recordsToRender: action.payload
            };
        case actions.SET_REGISTRATION_DATE:
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
        case actions.SET_STATUS:
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
        case actions.SET_TITLE:
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
    actions,
    initState,
    reducer
};

export default note;