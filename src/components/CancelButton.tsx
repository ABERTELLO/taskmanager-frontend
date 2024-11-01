// Common
import { useNavigate } from 'react-router-dom';
import { CancelButtonDataInterface } from '../interfaces';


const CancelButton = (data: CancelButtonDataInterface) => {
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
            Cancelar
        </ button>
    );
};

export default CancelButton;