// Resource
import { Action } from './context';
import { Services } from './service';


interface VerifyNotEmptyField {
    readonly dispatchType: string;
    readonly value: any;
};

export enum ButtonTypes {
    cancel = 'cancel',
    save = 'save'
};

export enum SaveType {
    save = 'save',
    update = 'update'
};

export interface ButtonData {
    readonly data: ButtonProps;
};

export interface ButtonProps {
    readonly action?: any;
    readonly dispatch?: React.Dispatch<Action>;
    readonly dispatchType?: string;
    readonly label?: string;
    readonly objToSave?: any;
    readonly redirectPath?: string;
    readonly ref?: React.RefObject<HTMLButtonElement>;
    readonly saveType?: SaveType;
    readonly service?: Services;
    readonly type?: ButtonTypes;
    readonly verifyNotEmptyFields?: VerifyNotEmptyField[];
};