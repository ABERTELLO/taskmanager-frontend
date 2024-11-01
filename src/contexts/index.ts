import { AuthContext, useAuthContext } from './auth/contextProvider';
import { NoteContext, useNoteContext } from './note/contextProvider';
import { UserContext, useUserContext } from './user/contextProvider';

const contexts = {
    AuthContext,
    NoteContext,
    UserContext,
    useAuthContext,
    useNoteContext,
    useUserContext,
};

export default contexts;