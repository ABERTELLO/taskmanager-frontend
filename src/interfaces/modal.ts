import { Action } from './context';


export enum ModalLauncherElements {
    button = 'button',
    link = 'link'
}

export interface ModalData {
    readonly data: ModalProps;
};

export interface ModalProps {
    readonly dispatch: React.Dispatch<Action>;
    readonly dispatchType: string;
    readonly launcherElement?: ModalLauncherElements;
    readonly launcherLabel: string;
    readonly modalBody: React.JSX.Element | string;
    readonly modalFooter?: React.JSX.Element | string;
    readonly modalTitle?: React.JSX.Element | string;
    readonly renderButtons?: boolean;
    readonly visible: boolean;
};