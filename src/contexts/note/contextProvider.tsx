// Common
import { createContext, useContext, useReducer } from 'react';
import { NoteContext, ContextProps } from '../../interfaces';
import note from './reducer';

const { actions, initState, reducer } = note;

const CreateNoteContext = createContext<NoteContext>({
    actions: actions,
    notes_state: initState,
    notes_dispatch: () => {}
});

export const useNoteContext = () => {
    return useContext(CreateNoteContext);
};

export const NoteContextProvider = (props: ContextProps) => {
    const [notes_state, notes_dispatch] = useReducer(reducer, initState);

    return (
        <CreateNoteContext.Provider value={{ actions, notes_state, notes_dispatch }}>
            {props.children}
        </CreateNoteContext.Provider>
    );
};
