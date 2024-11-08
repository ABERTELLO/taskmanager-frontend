import helpers from '../helpers';
import { InputDataInterface } from '../interfaces';

const { paramsFormat } = helpers.dateHelper;


const Input = (data: InputDataInterface) => {
    const {
        dispatch,
        dispatchType,
        inputType,
        label,
        placeholder,
        value
    } = data;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let payload: string | number;
        if (inputType === 'date') payload = paramsFormat(e.target.valueAsDate);
        else if (inputType === 'number') payload = e.target.valueAsNumber;
        else if (inputType === 'text') payload = e.target.value;
        else return;
        dispatch({ type: dispatchType, payload });
    };

    return (
        <div className='inputContainer'>
            {
                label && (
                    <div className='inputLabel '>
                        {label}
                    </div>
                )
            }
            <div>
                <input
                    className='input'
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