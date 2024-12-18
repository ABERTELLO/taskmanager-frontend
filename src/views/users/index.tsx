// Common
import { useEffect } from 'react';
import components from '../../components';
import contexts from '../../contexts';
import helpers from '../../helpers';
import {
    TableProps
} from '../../interfaces';
import services from '../../services';

const { Table } = components;
const { generateTableElements } = helpers.dataProcessing;


const Users = () => {
    const { users_actions, users_state, users_dispatch } = contexts.useUserContext();


    const loadUsers = async (): Promise<void> => {
        const response = await services.users.find(users_state.paginationParams);
        if (!response || !response.ok) {
            users_dispatch({
                type: users_actions.SET_LOADING_RECORDS_ERROR,
                payload: true
            });
            return;
        };
        users_dispatch({
            type: users_actions.SET_LOADING_RECORDS_ERROR,
            payload: false
        });
        const users = await response.json();
        users_dispatch({
            type: users_actions.SET_RECORDS_TO_RENDER,
            payload: users
        });
    };

    // eslint-disable-next-line
    useEffect(() => { loadUsers() }, [
        users_state.recordsToRender.length
    ]);

    const generateUsersTableData = () => {
        const rowsData = {
            records: users_state.recordsToRender,
            titles: {
                email: 'Email',
                fullName: 'Full name',
                role: 'Role',
                isActive: 'Is active'
            }
        };
        const data = generateTableElements(rowsData);
        return data;
    };

    const usersTableData: TableProps = {
        headers: generateUsersTableData().headers,
        rows: generateUsersTableData().rows,
        tableFooter: 'Footer',
        tableHead: 'Users',
    };


    return (
        <div>
            <Table data={usersTableData} />
        </div>
    );
};

export default Users;