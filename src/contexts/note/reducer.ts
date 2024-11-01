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

const reducer = ( state: NoteStateInterface = initState, action: any): NoteStateInterface => {
    const { type, payload } = action;

    switch (type) {
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
                    author: payload
                }
            };
        case actions.SET_COMPLETED:
            return {
                ...state,
                params: {
                    ...state.params,
                    completed: payload
                }
            };
        case actions.SET_CONTENT:
            return {
                ...state,
                params: {
                    ...state.params,
                    content: payload
                }
            };
        case actions.SET_DATE:
            return {
                ...state,
                params: {
                    ...state.params,
                    date: payload
                }
            };
        case actions.SET_LOADING:
            return {
                ...state,
                loading: payload
            };
        case actions.SET_RECORDS_TO_RENDER:
            return {
                ...state,
                recordsToRender: payload
            };
        case actions.SET_REGISTRATION_DATE:
            return {
                ...state,
                params: {
                    ...state.params,
                    registrationDate: payload
                }
            };
        case actions.SET_STATUS:
            return {
                ...state,
                params: {
                    ...state.params,
                    status: payload
                }
            };
        case actions.SET_TITLE:
            return {
                ...state,
                params: {
                    ...state.params,
                    title: payload
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