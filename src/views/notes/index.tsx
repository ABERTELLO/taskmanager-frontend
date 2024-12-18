// Common
import { useEffect } from 'react';
import components from '../../components';
import contexts from '../../contexts';
import { TableProps } from '../../interfaces';
import services from '../../services';

const { Table } = components;


const Notes = () => {
    const { notes_actions, notes_state, notes_dispatch } = contexts.useNoteContext();


    const loadNotes = async () => {
        const response = await services.notes.find(notes_state.paginationParams);
        if (!response || !response.ok) {
            notes_dispatch({
                type: notes_actions.SET_LOADING_RECORDS_ERROR,
                payload: true
            });
            return;
        } else {
            notes_dispatch({
                type: notes_actions.SET_LOADING_RECORDS_ERROR,
                payload: false
            });
        };
        const notes = await response.json();
        console.log(notes);
    };

    // eslint-disable-next-line
    useEffect(() => { loadNotes() }, [
        notes_state.recordsToRender
    ]);

    // const tableData: TableProps = {

    // };


    return (
        <div>
            {/* <Table data={tableData} /> */}
        </div>
    );
};

export default Notes;