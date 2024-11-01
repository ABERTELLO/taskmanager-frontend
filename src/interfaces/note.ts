import { ActionInterface } from './context';


interface NoteActionsInterface {
    readonly CLEAR_FIELD_STATUS: string;
    readonly CLEAR_PARAMS: string;
    readonly CLEAR_STATE: string;
    readonly SET_AUTHOR: string;
    readonly SET_COMPLETED: string;
    readonly SET_CONTENT: string;
    readonly SET_DATE: string;
    readonly SET_LOADING: string;
    readonly SET_RECORDS_TO_RENDER: string;
    readonly SET_REGISTRATION_DATE: string;
    readonly SET_STATUS: string;
    readonly SET_TITLE: string;
};

interface NoteBooleanParam {
    readonly status: null | string;
    readonly value: boolean;
};

interface NoteStatusParam {
    readonly status: null | string;
    readonly value: ['regular', 'important', 'urgent', 'lapsed'] | [];
};

interface NoteStringParam {
    readonly status: null | string;
    readonly value: string;
};

export interface NoteContextInterface {
    readonly actions: NoteActionsInterface;
    readonly notes_state: NoteStateInterface;
    readonly notes_dispatch: React.Dispatch<ActionInterface>;
}

export interface NoteParamsInterface {
    readonly author: NoteStringParam;
    readonly completed: NoteBooleanParam;
    readonly content: NoteStringParam;
    readonly date: NoteStringParam;
    readonly registrationDate: NoteStringParam;
    readonly status: NoteStatusParam;
    readonly title: NoteStringParam;
};

export interface NoteStateInterface {
    readonly loading: boolean;
    readonly params: NoteParamsInterface;
    readonly recordsToRender: SavedNoteInterface[];
};

export interface SavedNoteInterface extends NoteParamsInterface {
    readonly _id: string;
    readonly __v: number;
};