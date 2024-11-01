import { ActionInterface } from './context';


export interface InputDataInterface {
    readonly dispatch: React.Dispatch<ActionInterface>;
    readonly dispatchType: string;
    readonly inputType: string;
    readonly label: string;
    readonly value: string;
};
