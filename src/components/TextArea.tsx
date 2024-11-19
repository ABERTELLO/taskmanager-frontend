import { TextAreaData } from '../interfaces';


const TextArea = ({ data }: TextAreaData) => {
    const {
        dispatch,
        dispatchType,
        label,
        rows,
        value
    } = data;

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        console.log(e);
        // dispatch({ type: dispatchType, payload: e.target.value });
    };

    return (
        <textarea
            onChange={onChange}
            placeholder={label}
            rows={rows}
            value={value}
        />
    );
};

export default TextArea;