// Common
import { useNavigate } from 'react-router-dom';
import { CancelButtonData } from '../interfaces';


const CancelButton = (data: CancelButtonData) => {
    const {
        dispatch,
        dispatchType,
        redirectPath
    } = data;
    const navigate = useNavigate();

    const onClick = (): void => {
        if (dispatch && dispatchType) dispatch({ type: dispatchType });
        navigate(redirectPath);
    };

    return (
        <button
            className='cancelButton'
            onClick={onClick}
        >
            Cancel
        </ button>
    );
};

export default CancelButton;