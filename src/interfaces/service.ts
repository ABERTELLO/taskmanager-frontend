// Resource
import { AuthLoginParams } from './auth';
import { NoteParams, SavedNote } from './note';
import { RequestParams } from './request';
import { UserParams, SavedUser } from './user';


interface AuthService {
    readonly login: (data: AuthLoginParams) => Promise<Response | void>;
};

interface NoteService extends ServiceCommon {
    readonly save: (data: NoteParams) => Promise<Response | void>;
    readonly update: (data: SavedNote) => Promise<Response | void>;
};

interface ServiceCommon {
    readonly find: (params: RequestParams) => Promise<Response | void>;
    readonly findAll: () => Promise<Response | void>;
    readonly findById: (id: string) => Promise<Response | void>;
    readonly remove: (id: string) => Promise<Response | void>;
};

interface UserService extends ServiceCommon {
    readonly save: (data: UserParams) => Promise<Response | void>;
    readonly update: (data: SavedUser) => Promise<Response | void>;
};

export interface AuthServices {
    readonly [index: string]: AuthService
    readonly auth: AuthService;
};

export interface Services {
    readonly [index: string]:
        NoteService
        |UserService;
    readonly notes: NoteService;
    readonly users: UserService;
};

