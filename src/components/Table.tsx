// Common
import { TableData } from '../interfaces'


const Table = ({ data }: TableData) => {
    const {
        headers,
        rows,
        tableFooter,
        tableHead
    } = data;

    const tableHeads = headers.map((header, index) => {
        const tableHead = (
            <th
                className={header.className}
                key={'tableHeader_' + index}
            >
                {header.element}
            </th>
        );
        return tableHead;
    });

    const tableRows = rows?.map((row, rowIndex) => {
        const tableRow = (
            <tr
                className={row.className}
                key={'tableRow_' + rowIndex}
            >
                {
                    row.cells.map((cell, cellIndex) => {
                        const tableCell = (
                            <td
                                className={cell.className}
                                key={'tableCell_' + cellIndex}
                            >
                                {cell.element}
                            </td>
                        );
                        return tableCell;
                    })
                }
            </tr>
        );
        return tableRow;
    });


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'space-between'
        }}>
            <div style={{ height: '10%' }}>
                {tableHead}
            </div>
            <div style={{ height: '80%' }}>
                <table className='table'>
                    <thead>
                        <tr>
                            {tableHeads}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
            <div style={{ height: '10%' }}>
                {tableFooter}
            </div>
        </div>
    );
};

export default Table;