// Common
import note from '../contexts/note/reducer';

// Resource
import { Action } from './context';
import { PaginationParams } from './request';


interface NoteBooleanParam {
    readonly status: boolean;
    readonly value: boolean;
};

interface NoteStatusParam {
    readonly status: boolean;
    readonly value: NoteStatus;
};

interface NoteStringParam {
    readonly status: boolean;
    readonly value: string;
};

export enum NoteStatus {
    regular = 'regular',
    important = 'important',
    urgent = 'urgent',
    lapsed = 'lapsed'
};

export interface NoteContext {
    readonly notes_actions: typeof note.notes_actions;
    readonly notes_state: NoteState;
    readonly notes_dispatch: React.Dispatch<Action>;
};

export interface NoteParams {
    readonly author: NoteStringParam;
    readonly completed: NoteBooleanParam;
    readonly content: NoteStringParam;
    readonly date: NoteStringParam;
    readonly registrationDate: NoteStringParam;
    readonly status: NoteStatusParam;
    readonly title: NoteStringParam;
};

export interface NoteState {
    readonly loading: boolean;
    readonly loadingRecordsError: { message: string, status: boolean };
    readonly paginationParams: PaginationParams;
    readonly params: NoteParams;
    readonly recordsToRender: SavedNote[];
};

export interface SavedNote extends NoteParams {
    readonly _id: string;
    readonly __v: number;
};