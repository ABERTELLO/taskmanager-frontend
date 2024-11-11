// Resource
import { Action } from './context';


export interface TextAreaData {
    readonly dispatch: React.Dispatch<Action>;
    readonly dispatchType: string;
    readonly label: string;
    readonly rows: number;
    readonly value:string;
};
