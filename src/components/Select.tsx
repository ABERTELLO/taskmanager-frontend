import { SelectOption, SelectData } from '../interfaces';


const Select = (data: SelectData) => {
    const {
        dispatch,
        dispatchType,
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

    return (
        <select
            multiple={multiple}
            onChange={onChange}
            value={value}
        >
            {selectOptions}
        </select>
    );
};

export default Select;