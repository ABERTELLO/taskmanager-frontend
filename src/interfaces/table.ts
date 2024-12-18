import { SavedNote } from './note';
import { SavedUser } from './user';

export interface Cell {
    readonly className?: string;
    readonly element: React.JSX.Element | string;
};

export type RecordsToTable =
    SavedNote[]
    | SavedUser[]

export interface Row {
    readonly cells: Cell[];
    readonly className?: string;
};

export interface TableData {
    readonly data: TableProps;
};

export interface TableProps {
    readonly headers: Cell[];
    readonly rows?: Row[];
    readonly tableFooter?: React.JSX.Element | string;
    readonly tableHead?: React.JSX.Element | string;
};