// Resource
import { Action } from './context';


export interface SelectOption {
    readonly label: string;
    readonly selected: boolean;
    readonly value: string;
};

export interface SelectData {
    readonly dispatch: React.Dispatch<Action>;
    readonly dispatchType: string;
    readonly multiple: boolean;
    readonly optionsData: SelectOption[];
    readonly value:string;
};

