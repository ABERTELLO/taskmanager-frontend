import {
    CancelButtonDataInterface,
    SaveButtonDataInterface
} from './button';
import { InputDataInterface } from './input';
import { SelectDataInterface } from './select';
import { TextAreaDataInterface } from './textArea';


export interface FormDataInterface {
    readonly cancelButtonData: CancelButtonDataInterface;
    readonly formFooterText?: string;
    readonly formHeaderText?: string;
    readonly inputsData?: InputDataInterface[];
    readonly saveButtonData: SaveButtonDataInterface;
    readonly selectsData?: SelectDataInterface[];
    readonly textAreasData?: TextAreaDataInterface[];
};
