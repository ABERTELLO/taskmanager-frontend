// Common
import { ContextProps } from '../interfaces';

// Resource
import { AuthContextProvider, useAuthContext } from './auth/contextProvider';
import { NoteContextProvider, useNoteContext } from './note/contextProvider';
import { UserContextProvider, useUserContext } from './user/contextProvider';


const StoreContext = (props: ContextProps) => {
    return (
        <AuthContextProvider>
            <NoteContextProvider>
                <UserContextProvider>
                    {props.children}
                </UserContextProvider>
            </NoteContextProvider>
        </AuthContextProvider>
    )
}


const contexts = {
    StoreContext,
    useAuthContext,
    useNoteContext,
    useUserContext,
};

export default contexts;