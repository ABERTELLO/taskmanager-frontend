import { ActionInterface } from './context';


export interface SelectOptionInterface {
    readonly label: string;
    readonly selected: boolean;
    readonly value: string;
};

export interface SelectDataInterface {
    readonly dispatch: React.Dispatch<ActionInterface>;
    readonly dispatchType: string;
    readonly multiple: boolean;
    readonly optionsData: SelectOptionInterface[];
    readonly value:string;
};

