// Common
import { createContext, useContext, useReducer } from 'react';
import { NoteContext, ContextProps } from '../../interfaces';
import note from './reducer';

const { notes_actions, initState, reducer } = note;

const CreateNoteContext = createContext<NoteContext>({
    notes_actions: notes_actions,
    notes_state: initState,
    notes_dispatch: () => {}
});

export const useNoteContext = () => {
    return useContext(CreateNoteContext);
};

export const NoteContextProvider = (props: ContextProps) => {
    const [notes_state, notes_dispatch] = useReducer(reducer, initState);

    return (
        <CreateNoteContext.Provider value={{ notes_actions, notes_state, notes_dispatch }}>
            {props.children}
        </CreateNoteContext.Provider>
    );
};
