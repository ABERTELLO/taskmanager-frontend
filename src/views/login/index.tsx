// Common
import components from '../../components';
import contexts from '../../contexts';

const { Input } = components;


const Login = () => {
    const { actions, auth_state, auth_dispatch } = contexts.useAuthContext();

    return (
        <div className='loginContainer'>
            <Input
                dispatch={auth_dispatch}
                dispatchType={actions.SET_LOGIN_EMAIL}
                inputType='text'
                label='Email'
                placeholder='email@example.com'
                value={auth_state.loginParams.email.value}
            />
        </div>
    );
};

export default Login;