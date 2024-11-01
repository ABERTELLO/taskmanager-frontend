// Common
import { createContext, useContext, useReducer } from 'react';
import { UserContextInterface, ContextPropsInterface } from '../../interfaces';
import user from './reducer';

const { actions, initState, reducer } = user;

const CreateUserContext = createContext<UserContextInterface>({
    actions: actions,
    users_state: initState,
    users_dispatch: () => {}
});

export const useUserContext = () => {
    return useContext(CreateUserContext);
};

export const UserContext = (props: ContextPropsInterface) => {
    const [users_state, users_dispatch] = useReducer(reducer, initState);

    return (
        <CreateUserContext.Provider value={{ actions, users_state, users_dispatch }}>
            {props.children}
        </CreateUserContext.Provider>
    );
};