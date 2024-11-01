import helpers from '../helpers';
import { InputDataInterface } from '../interfaces';

const { paramsFormat } = helpers.dateHelper;


const Input = (data: InputDataInterface) => {
    const {
        dispatch,
        dispatchType,
        inputType,
        label,
        value
    } = data;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let payload: any;
        if (inputType === 'date') payload = paramsFormat(e.target.valueAsDate);
        else if (inputType === 'number') payload = e.target.valueAsNumber;
        else if (inputType === 'text') payload = e.target.value;
        else return;
        dispatch({ type: dispatchType, payload });
    };

    return (
        <input
            onChange={onChange}
            placeholder={label}
            type={inputType}
            value={value}
        />
    );
};

export default Input;