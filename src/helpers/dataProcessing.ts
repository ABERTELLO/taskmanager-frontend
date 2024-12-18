// Common
import { Cell } from '../interfaces';


const isEven = (value: number): boolean => {
    return value % 2 === 0
};

const generateHeadersOfRows = (
    headerClassName: string,
    titles: object
): { element: string }[] => {
    const cellTitlesValues = Object.values(titles);
    let headers: { element: string }[] = [];
    for (let index = 0; index < cellTitlesValues.length; index++) {
        const value = cellTitlesValues[index];
        if (value) {
            const header = {
                className: headerClassName ?? 'tableHeader',
                element: value
            };
            headers.push(header);
        };
    };
    return headers;
};

const generateTableElements = (rowsData: any) => {
    const {
        cellClassName,
        headerClassName,
        records,
        rowClassName,
        titles
    } = rowsData;
    const headers = generateHeadersOfRows(headerClassName, titles);
    const recordProps = Object.keys(titles);
    const rows = records.map((record: any, index: number) => {
        const cells: Cell[] = recordProps.map(recordProp => {
            const cell = {
                className: cellClassName ?? 'cell',
                element: record[recordProp]
            };
            return cell;
        });
        const rowDefaultClassName = isEven(index) ? 'evenRow' : 'oddRow';
        const row = {
            cells,
            className: rowClassName ?? rowDefaultClassName
        };
        return row;
    });

    const data = { headers, rows };
    return data;
};

const dataProcessing = {
    generateTableElements
};

export default dataProcessing;