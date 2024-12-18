// Resource
import { Action } from './context';


export interface TextAreaData {
    readonly data: TextAreaProps;
};

export interface TextAreaProps {
    readonly dispatch: React.Dispatch<Action>;
    readonly dispatchType: string;
    readonly enterAction: () => void;
    readonly escapeAction: () => void;
    readonly label: string;
    readonly ref?: React.RefObject<HTMLTextAreaElement>;
    readonly rows: number;
    readonly value:string;
};
