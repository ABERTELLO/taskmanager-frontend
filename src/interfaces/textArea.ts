import { ActionInterface } from './context';


export interface TextAreaDataInterface {
    readonly dispatch: React.Dispatch<ActionInterface>;
    readonly dispatchType: string;
    readonly label: string;
    readonly rows: number;
    readonly value:string;
};
