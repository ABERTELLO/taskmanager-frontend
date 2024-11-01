import { AuthLoginParams } from './auth';
import { NoteParamsInterface, SavedNoteInterface } from './note';
import { UserParamsInterface, SavedUserInterface } from './user';

export interface RequestParamsInterface {
    readonly filters: object;
    readonly limit: number;
    readonly page: number;
};

export type RequestInitDataType =
    AuthLoginParams
    | null
    | NoteParamsInterface
    | SavedNoteInterface
    | UserParamsInterface
    | SavedUserInterface