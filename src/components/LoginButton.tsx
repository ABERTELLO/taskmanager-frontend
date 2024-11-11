// Common
import { useNavigate } from 'react-router-dom';
import contexts from '../contexts';
import { authServices } from '../services';


const LoginButton = () => {
    const navigate = useNavigate();
    const { actions, auth_state, auth_dispatch } = contexts.useAuthContext();

    const onClick = async (): Promise<void> => {
        const response = await authServices.auth.login(auth_state.loginParams);
        if (typeof response === 'undefined') {
            auth_dispatch({ type: actions.SET_ERROR_PROCESSING_LOGIN })
            return;
        };
        if (!response.ok) {
            auth_dispatch({ type: actions.SET_ERROR_INVALID_CREDENTIALS })
            return;
        };
        navigate('/home');
    };

    return (
        <button
            className='button'
            onClick={onClick}
        >
            Login
        </ button>
    );
};

export default LoginButton;