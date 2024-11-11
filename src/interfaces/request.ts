// Resource
import { AuthLoginParams } from './auth';
import { NoteParams, SavedNote } from './note';
import { UserParams, SavedUser } from './user';

export interface RequestParams {
    readonly filters: object;
    readonly limit: number;
    readonly page: number;
};

export type RequestInitDataType =
    AuthLoginParams
    | null
    | NoteParams
    | SavedNote
    | SavedUser
    | UserParams