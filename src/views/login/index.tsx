// Common
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import components from '../../components';
import contexts from '../../contexts';
import { FormProps, InputTypes } from '../../interfaces';
import { authServices } from '../../services';

//Resource
import FormFooter from './formFooter';

const { Form } = components;


const Login = () => {
    const { actions, auth_state, auth_dispatch } = contexts.useAuthContext();
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
            && auth_state.loginParams.password.value.length === 0
        ) passwordInputRef.current.focus();
    };

    const login = async (): Promise<void> => {
        const response = await authServices.auth.login(auth_state.loginParams);
        if (typeof response === 'undefined') {
            return auth_dispatch({ type: actions.SET_ERROR_PROCESSING_LOGIN });
        };
        if (!response.ok) {
            return auth_dispatch({ type: actions.SET_ERROR_INVALID_CREDENTIALS });
        };
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
                        dispatchType: actions.SET_LOGIN_EMAIL_STATUS,
                        value: auth_state.loginParams.email.value
                    },
                    {
                        dispatchType: actions.SET_LOGIN_PASSWORD_STATUS,
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
                dispatchType: actions.SET_LOGIN_EMAIL,
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
                dispatchType: actions.SET_LOGIN_PASSWORD,
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
                dispatchType: actions.SET_LOGIN_REMEMBER_ME,
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