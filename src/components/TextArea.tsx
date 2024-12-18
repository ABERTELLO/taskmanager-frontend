import { TextAreaData } from '../interfaces';


const TextArea = ({ data }: TextAreaData) => {
    const {
        dispatch,
        dispatchType,
        enterAction,
        escapeAction,
        label,
        rows,
        value
    } = data;

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        console.log(e);
        // dispatch({ type: dispatchType, payload: e.target.value });
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const pressedEnter = ['Enter', 'NumpadEnter'].includes(e.key);
        const pressedEscape = ['Escape'].includes(e.key);
        if (enterAction && pressedEnter) enterAction();
        else if (escapeAction && pressedEscape) escapeAction();
        else return;
    };

    return (
        <textarea
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={label}
            rows={rows}
            value={value}
        />
    );
};

export default TextArea;