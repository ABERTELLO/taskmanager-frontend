// Common
import { AuthLoginParams } from './auth';
import { NoteParamsInterface, SavedNoteInterface } from './note';
import { RequestParamsInterface } from './request';
import { UserParamsInterface, SavedUserInterface } from './user';


interface AuthServiceInterface {
    readonly login: (data: AuthLoginParams) => Promise<Response | void>;
};

interface NoteServiceInterface extends ServiceCommonInterface {
    readonly save: (data: NoteParamsInterface) => Promise<Response | void>;
    readonly update: (data: SavedNoteInterface) => Promise<Response | void>;
};

interface ServiceCommonInterface {
    readonly find: (params: RequestParamsInterface) => Promise<Response | void>;
    readonly findAll: () => Promise<Response | void>;
    readonly findById: (id: string) => Promise<Response | void>;
    readonly remove: (id: string) => Promise<Response | void>;
};

interface UserServiceInterface extends ServiceCommonInterface {
    readonly save: (data: UserParamsInterface) => Promise<Response | void>;
    readonly update: (data: SavedUserInterface) => Promise<Response | void>;
};

export interface AuthServicesInterface {
    readonly [index: string]: AuthServiceInterface
    readonly auth: AuthServiceInterface;
};

export interface ServicesInterface {
    readonly [index: string]:
        NoteServiceInterface
        |UserServiceInterface;
    readonly notes: NoteServiceInterface;
    readonly users: UserServiceInterface;
};

