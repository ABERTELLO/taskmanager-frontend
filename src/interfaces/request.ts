// Resource
import { AuthLoginParams } from './auth';
import { NoteParams, NoteStatus, SavedNote } from './note';
import { UserParams, UserRoles, SavedUser } from './user';


interface NotePaginationParams {
    readonly completed: boolean | null;
    readonly content: string | null;
    readonly date: string | null;
    readonly registrationDate: string | null;
    readonly status: NoteStatus | null;
    readonly title: string | null;
};

interface UserPaginationParams {
    readonly email: string | null;
    readonly fullName: string | null;
    readonly isActive: boolean | null;
    readonly role: UserRoles | null;
};

export interface PaginationParams {
    readonly filters: NotePaginationParams | UserPaginationParams;
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

export type StateParams = 
    AuthLoginParams
    | NoteParams
    | UserParams