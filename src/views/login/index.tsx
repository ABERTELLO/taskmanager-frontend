// Common
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import components from '../../components';
import contexts from '../../contexts';
import { FormProps, InputTypes } from '../../interfaces';
import helpers from '../../helpers';
import { authServices } from '../../services';

//Resource
import FormFooter from './formFooter';

const { Form } = components;
const { extractValues } = helpers.requestHelper;


const Login = () => {
    const { auth_actions, auth_state, auth_dispatch } = contexts.useAuthContext();
    const navigate = useNavigate();
    const loginButtonRef = useRef<HTMLButtonElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const rememberMeInpiutRef = useRef<HTMLInputElement>(null);

    const enterAction = (): void => {
        if (
            emailInputRef.current
            && auth_state.loginParams.email.value.length === 0
        ) emailInputRef.current.focus();
        if (
            passwordInputRef.current
            && auth_state.loginParams.email.value.length > 0
            && auth_state.loginParams.password.value.length === 0
        ) passwordInputRef.current.focus();
        if (
            loginButtonRef.current
            && auth_state.loginParams.email.value.length > 0
            && auth_state.loginParams.password.value.length > 0
        ) loginButtonRef.current.focus();
    };

    const login = async (): Promise<void> => {
        const loginParams = extractValues(auth_state.loginParams);
        const response = await authServices.auth.login(loginParams);
        if (!response) {
            auth_dispatch({ type: auth_actions.SET_ERROR_PROCESSING_LOGIN, payload: true });
            return;
        } else auth_dispatch({ type: auth_actions.SET_ERROR_PROCESSING_LOGIN, payload: false });
        if (!response.ok) {
            auth_dispatch({ type: auth_actions.SET_ERROR_INVALID_CREDENTIALS, payload: true });
            return;
        } else auth_dispatch({ type: auth_actions.SET_ERROR_INVALID_CREDENTIALS, payload: false });
        const formattedResponse = await response.json();
        localStorage.setItem('token', formattedResponse.token);
        localStorage.setItem('userID', formattedResponse.userID);
        navigate('/home');
    };


    const formData: FormProps = {
        buttonsData: [
            {
                action: login,
                dispatch: auth_dispatch,
                label: 'Login',
                ref: loginButtonRef,
                verifyNotEmptyFields: [
                    {
                        dispatchType: auth_actions.SET_LOGIN_EMAIL_STATUS,
                        value: auth_state.loginParams.email.value
                    },
                    {
                        dispatchType: auth_actions.SET_LOGIN_PASSWORD_STATUS,
                        value: auth_state.loginParams.password.value
                    }
                ]
            }
        ],
        formFooter: <FormFooter />,
        inputsData: [
            {
                autofocus: true,
                dispatch: auth_dispatch,
                dispatchType: auth_actions.SET_LOGIN_EMAIL,
                enterAction,
                inputType: InputTypes.email,
                label: 'Email',
                placeholder: 'email@example.com',
                ref: emailInputRef,
                status: auth_state.loginParams.email.status,
                value: auth_state.loginParams.email.value
            },
            {
                dispatch: auth_dispatch,
                dispatchType: auth_actions.SET_LOGIN_PASSWORD,
                enterAction,
                inputType: InputTypes.password,
                label: 'Password',
                ref: passwordInputRef,
                status: auth_state.loginParams.password.status,
                value: auth_state.loginParams.password.value
            },
            {
                checked: auth_state.loginParams.rememberMe.value,
                dispatch: auth_dispatch,
                dispatchType: auth_actions.SET_LOGIN_REMEMBER_ME,
                inputType: InputTypes.checkbox,
                label: 'Remember me',
                ref: rememberMeInpiutRef
            }
        ]
    };

    return (
        <div className='center'>
            <div className='container'>
                <Form data={formData} />
            </div>
        </div>
    );
};

export default Login;