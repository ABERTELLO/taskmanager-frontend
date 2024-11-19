// Resource
import { Action } from './context';


export interface SelectData {
    readonly data: SelectProps;
};

export interface SelectOption {
    readonly label: string;
    readonly selected: boolean;
    readonly value: string;
};

export interface SelectProps {
    readonly dispatch: React.Dispatch<Action>;
    readonly dispatchType: string;
    readonly multiple: boolean;
    readonly optionsData: SelectOption[];
    readonly ref?: React.RefObject<HTMLSelectElement>;
    readonly value:string;
};

