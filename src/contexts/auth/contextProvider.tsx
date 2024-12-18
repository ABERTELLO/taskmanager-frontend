// Common
import { createContext, useContext, useReducer } from 'react';
import { AuthContext, ContextProps } from '../../interfaces';
import auth from './reducer';

const { auth_actions, initState, reducer } = auth;

const CreateAuthContext = createContext<AuthContext>({
    auth_actions: auth_actions,
    auth_state: initState,
    auth_dispatch: () => {}
});

export const useAuthContext = () => {
    return useContext(CreateAuthContext);
};

export const AuthContextProvider = (props: ContextProps) => {
    const [auth_state, auth_dispatch] = useReducer(reducer, initState);

    return (
        <CreateAuthContext.Provider value={{ auth_actions, auth_state, auth_dispatch }}>
            {props.children}
        </CreateAuthContext.Provider>
    );
};