// Common
import { createContext, useContext, useReducer } from 'react';
import { AuthContext, ContextProps } from '../../interfaces';
import auth from './reducer';

const { actions, initState, reducer } = auth;

const CreateAuthContext = createContext<AuthContext>({
    actions: actions,
    auth_state: initState,
    auth_dispatch: () => {}
});

export const useAuthContext = () => {
    return useContext(CreateAuthContext);
};

export const AuthContextProvider = (props: ContextProps) => {
    const [auth_state, auth_dispatch] = useReducer(reducer, initState);

    return (
        <CreateAuthContext.Provider value={{ actions, auth_state, auth_dispatch }}>
            {props.children}
        </CreateAuthContext.Provider>
    );
};