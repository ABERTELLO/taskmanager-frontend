// Common
import { ContextPropsInterface } from '../interfaces';

// Resource
import { AuthContext, useAuthContext } from './auth/contextProvider';
import { NoteContext, useNoteContext } from './note/contextProvider';
import { UserContext, useUserContext } from './user/contextProvider';


const StoreContext = (props: ContextPropsInterface) => {
    return (
        <AuthContext>
            <NoteContext>
                <UserContext>
                    {props.children}
                </UserContext>
            </NoteContext>
        </AuthContext>
    )
}


const contexts = {
    StoreContext,
    useAuthContext,
    useNoteContext,
    useUserContext,
};

export default contexts;