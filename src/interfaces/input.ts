// Resource
import { Action } from './context';


export interface InputData {
    readonly data: InputProps;
};

export interface InputProps {
    readonly autofocus?: boolean;
    readonly checked?: boolean;
    readonly dispatch: React.Dispatch<Action>;
    readonly dispatchType: string;
    readonly enterAction?: () => void;
    readonly escapeAction?: () => void;
    readonly inputType: InputTypes;
    readonly label?: string;
    readonly placeholder?: string;
    readonly ref?: React.RefObject<HTMLInputElement>;
    readonly status?: boolean;
    readonly value?: number | string;
};

export enum InputTypes {
    button = 'button',
    checkbox = 'checkbox',
    color = 'color',
    date = 'date',
    datetimeLocal = 'datetime-local',
    email = 'email',
    file = 'file',
    hidden = 'hidden',
    image = 'image',
    month = 'month',
    number = 'number',
    password = 'password',
    radio = 'radio',
    range = 'range',
    reset = 'reset',
    search = 'search',
    submit = 'submit',
    tel = 'tel',
    text = 'text',
    time = 'time',
    url = 'url',
    week = 'week'
};

export enum InputValueTypes {
    boolean = 'boolean',
    date = 'date',
    number = 'number',
    string = 'string',
    null = 'null'
};

const typesForBooleanValue = [
    InputTypes.checkbox,
    InputTypes.radio
];

const typesForDateValue = [
    InputTypes.date,
];

const typesForNumberValue = [
    InputTypes.number,
    InputTypes.range
];

const typesForStringValue = [
    InputTypes.color,
    InputTypes.datetimeLocal,
    InputTypes.email,
    InputTypes.file,
    InputTypes.month,
    InputTypes.password,
    InputTypes.search,
    InputTypes.tel,
    InputTypes.text,
    InputTypes.time,
    InputTypes.url,
    InputTypes.week
];

const typesWithoutValue = [
    InputTypes.button,
    InputTypes.image,
    InputTypes.reset,
    InputTypes.submit,
];

export const InputTypesForValues = {
    typesForBooleanValue,
    typesForDateValue,
    typesForNumberValue,
    typesForStringValue,
    typesWithoutValue
};