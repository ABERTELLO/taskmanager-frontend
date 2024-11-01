// Common
import { createContext, useContext, useReducer } from 'react';
import { NoteContextInterface, ContextPropsInterface } from '../../interfaces';
import note from './reducer';

const { actions, initState, reducer } = note;

const CreateNoteContext = createContext<NoteContextInterface>({
    actions: actions,
    notes_state: initState,
    notes_dispatch: () => {}
});

export const useNoteContext = () => {
    return useContext(CreateNoteContext);
};

export const NoteContext = (props: ContextPropsInterface) => {
    const [notes_state, notes_dispatch] = useReducer(reducer, initState);

    return (
        <CreateNoteContext.Provider value={{ actions, notes_state, notes_dispatch }}>
            {props.children}
        </CreateNoteContext.Provider>
    );
};
