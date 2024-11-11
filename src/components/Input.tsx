// Common
import helpers from '../helpers';
import { InputData, InputTypesForValues, InputValueTypes } from '../interfaces';
const { yyyymmddhhmmss } = helpers.dateHelper;


const Input = (data: InputData) => {
    const {
        checked,
        dispatch,
        dispatchType,
        inputType,
        label,
        placeholder,
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

        let valueType: any;
        if (typesForBooleanValue.includes(inputType)) valueType = InputValueTypes.boolean;
        else if (typesForDateValue.includes(inputType)) valueType = InputValueTypes.date;
        else if (typesForNumberValue.includes(inputType)) valueType = InputValueTypes.number;
        else if (typesForStringValue.includes(inputType)) valueType = InputValueTypes.string;
        else valueType = InputValueTypes.null;
        return valueType;
    };

    const inputContainerClass = (): string => {
        let className: string;
        const inputValueType = getValueType();
        if (inputValueType === 'boolean') className = 'inputContainer';
        else className = 'inputContainer inputContainerPercentage';
        return className;
    };

    const inputLabelClass = (): string => {
        let className: string;
        const inputValueType = getValueType();
        if (inputValueType === 'boolean') className = 'inputLabel';
        else className = 'inputLabel inputLabelPercentage';
        return className;
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

    return (
        <div className='inputComponent'>
            {
                label && (
                    <div className={inputLabelClass()}>
                        {label}
                    </div>
                )
            }
            <div className={inputContainerClass()}>
                <input
                    checked={checked}
                    className='input'
                    onClick={onClick}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={inputType}
                    value={value}
                />
            </div>
        </div>
    );
};

export default Input;