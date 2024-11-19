// Common
import helpers from '../helpers';
import { InputData, InputTypesForValues, InputValueTypes } from '../interfaces';
const { yyyymmddhhmmss } = helpers.dateHelper;


const Input = ({ data }: InputData) => {
    const {
        autofocus,
        checked,
        dispatch,
        dispatchType,
        enterAction,
        escapeAction,
        inputType,
        label,
        placeholder,
        ref,
        status,
        value
    } = data;


    const dispatchAction = (payload: any): void => {
        dispatch({ type: dispatchType, payload });
    };

    const getValueType = (): string => {
        const {
            typesForBooleanValue,
            typesForDateValue,
            typesForNumberValue,
            typesForStringValue
        } = InputTypesForValues;

        const booleanValue = typesForBooleanValue.includes(inputType);
        const dateValue = typesForDateValue.includes(inputType);
        const numberValue = typesForNumberValue.includes(inputType);
        const stringValue = typesForStringValue.includes(inputType);

        let valueType: InputValueTypes;
        if (booleanValue) valueType = InputValueTypes.boolean;
        else if (dateValue) valueType = InputValueTypes.date;
        else if (numberValue) valueType = InputValueTypes.number;
        else if (stringValue) valueType = InputValueTypes.string;
        else valueType = InputValueTypes.null;
        return valueType;
    };

    const inputClasses = (): { container: string, label: string } => {
        let container: string;
        let label: string;
        const inputValueType = getValueType();

        if (inputValueType === 'boolean') {
            container = 'inputContainer';
            label = 'inputLabel';
        } else {
            container = 'inputContainer inputContainerPercentage';
            label = 'inputLabel inputLabelPercentage';
        }
        return { container, label };
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const valueType = getValueType();

        switch (valueType) {
            case InputValueTypes.boolean:
                return dispatchAction(e.target.checked);
            case InputValueTypes.date:
                const formattedDate = yyyymmddhhmmss(e.target.valueAsDate);
                return dispatchAction(formattedDate);
            case InputValueTypes.number:
                return dispatchAction(e.target.valueAsNumber);
            case InputValueTypes.string:
                return dispatchAction(e.target.value);
            default:
                return;
        };
    };

    const onClick = (): void => {
        if (InputTypesForValues.typesWithoutValue.includes(inputType)) {
            dispatch({ type: dispatchType });
        } else return;
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const pressedEnter = ['Enter', 'NumpadEnter'].includes(e.key);
        const pressedEscape = ['Escape'].includes(e.key);
        if (enterAction && pressedEnter) enterAction();
        else if (escapeAction && pressedEscape) escapeAction();
        else return;
    };

    return (
        <div className='inputComponent'>
            {
                label && (
                    <div className={inputClasses().label}>
                        {label}
                    </div>
                )
            }
            <div className={inputClasses().container}>
                <input
                    autoFocus={autofocus}
                    checked={checked}
                    className='input'
                    onClick={onClick}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    ref={ref}
                    type={inputType}
                    value={value}
                />
                {
                    status === false && (
                        <div className='inputErrorSpan'>
                            You must complete this field.
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Input;