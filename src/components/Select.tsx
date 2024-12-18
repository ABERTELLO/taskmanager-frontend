import { SelectData, SelectOption } from '../interfaces';


const Select = ({ data }: SelectData) => {
    const {
        dispatch,
        dispatchType,
        enterAction,
        escapeAction,
        multiple,
        optionsData,
        value
    } = data;

    const selectOptions = optionsData.map(
        (optionData: SelectOption, index: number) => {
            const key = 'select_option_' + index;
            const option = (
                <option
                    key={key}
                    label={optionData.label ?? null}
                    selected={optionData.selected ?? false}
                    value={optionData.value}
                />
            );
            return option;
        });

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        console.log(e)
        // dispatch({ type: dispatchType, payload: e.target.value });
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
        const pressedEnter = ['Enter', 'NumpadEnter'].includes(e.key);
        const pressedEscape = ['Escape'].includes(e.key);
        if (enterAction && pressedEnter) enterAction();
        else if (escapeAction && pressedEscape) escapeAction();
        else return;
    };

    return (
        <select
            multiple={multiple}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
        >
            {selectOptions}
        </select>
    );
};

export default Select;