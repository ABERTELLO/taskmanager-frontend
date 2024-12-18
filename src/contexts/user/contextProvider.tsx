// Common
import { createContext, useContext, useReducer } from 'react';
import { UserContext, ContextProps } from '../../interfaces';
import user from './reducer';

const { users_actions, initState, reducer } = user;

const CreateUserContext = createContext<UserContext>({
    users_actions: users_actions,
    users_state: initState,
    users_dispatch: () => {}
});

export const useUserContext = () => {
    return useContext(CreateUserContext);
};

export const UserContextProvider = (props: ContextProps) => {
    const [users_state, users_dispatch] = useReducer(reducer, initState);

    return (
        <CreateUserContext.Provider value={{ users_actions, users_state, users_dispatch }}>
            {props.children}
        </CreateUserContext.Provider>
    );
};