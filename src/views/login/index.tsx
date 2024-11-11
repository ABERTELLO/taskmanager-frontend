// Common
import components from '../../components';
import contexts from '../../contexts';
import { InputTypes, SaveService, SaveType } from '../../interfaces';
const { Form } = components;


const Login = () => {
    const { actions, auth_state, auth_dispatch } = contexts.useAuthContext();

    const formData = {
        formFooterText: 'Form footer',
        formHeaderText: 'Form header',
        inputsData: [
            {
                dispatch: auth_dispatch,
                dispatchType: actions.SET_LOGIN_EMAIL,
                inputType: InputTypes.text,
                label: 'Email',
                placeholder: 'email@example.com',
                value: auth_state.loginParams.email.value
            },
            {
                dispatch: auth_dispatch,
                dispatchType: actions.SET_LOGIN_PASSWORD,
                inputType: InputTypes.password,
                label: 'Password',
                value: auth_state.loginParams.password.value
            },
            {
                checked: auth_state.loginParams.rememberMe.value,
                dispatch: auth_dispatch,
                dispatchType: actions.SET_LOGIN_REMEMBER_ME,
                inputType: InputTypes.checkbox,
                label: 'Remember me'
            }
        ]
    };

    return (
        <div className='loginContainer'>
            <Form
                formFooterText={formData.formFooterText}
                formHeaderText={formData.formHeaderText}
                inputsData={formData.inputsData}
            />
        </div>
    );
};

export default Login;