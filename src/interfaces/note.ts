// Common
import note from '../contexts/note/reducer';

// Resource
import { Action } from './context';


interface NoteBoolean {
    readonly status: null | string;
    readonly value: boolean;
};

interface NoteStatusParam {
    readonly status: null | string;
    readonly value: NoteStatus;
};

interface NoteStringParam {
    readonly status: null | string;
    readonly value: string;
};

export interface NoteContext {
    readonly actions: typeof note.actions;
    readonly notes_state: NoteState;
    readonly notes_dispatch: React.Dispatch<Action>;
};

export interface NoteParams {
    readonly author: NoteStringParam;
    readonly completed: NoteBoolean;
    readonly content: NoteStringParam;
    readonly date: NoteStringParam;
    readonly registrationDate: NoteStringParam;
    readonly status: NoteStatusParam;
    readonly title: NoteStringParam;
};

export interface NoteState {
    readonly loading: boolean;
    readonly params: NoteParams;
    readonly recordsToRender: SavedNote[];
};

export enum NoteStatus {
    regular = 'regular',
    important = 'important',
    urgent = 'urgent',
    lapsed = 'lapsed'
};

export interface SavedNote extends NoteParams {
    readonly _id: string;
    readonly __v: number;
};