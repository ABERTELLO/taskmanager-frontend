// Resource
import {
    CancelButtonData,
    SaveButtonData
} from './button';
import { InputData } from './input';
import { SelectData } from './select';
import { TextAreaData } from './textArea';


export interface FormData {
    readonly cancelButtonData?: CancelButtonData;
    readonly formFooterText?: string;
    readonly formHeaderText?: string;
    readonly inputsData?: InputData[];
    readonly saveButtonData?: SaveButtonData;
    readonly selectsData?: SelectData[];
    readonly textAreasData?: TextAreaData[];
};
