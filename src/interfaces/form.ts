// Resource
import { ButtonProps } from './button';
import { InputProps } from './input';
import { SelectProps } from './select';
import { TextAreaProps } from './textArea';


export interface FormData {
    readonly data: FormProps;
};

export interface FormProps {
    readonly buttonsData: ButtonProps[];
    readonly formFooter?: React.JSX.Element | string;
    readonly formHeader?: React.JSX.Element | string;
    readonly inputsData?: InputProps[];
    readonly selectsData?: SelectProps[];
    readonly textAreasData?: TextAreaProps[];
};