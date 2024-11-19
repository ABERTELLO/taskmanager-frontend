// Common
import components from '../../../components';
import contexts from '../../../contexts';
import helpers from '../../../helpers';
import {
    ButtonTypes,
    FormProps,
    InputTypes,
    ModalLauncherElements,
    ModalProps,
    SaveType,
    Services
} from '../../../interfaces';

const { Form, Modal } = components;
const { useUserContext } = contexts;
const { extractValues } = helpers.requestHelper;


const SuscribeModal = () => {
    const { actions, users_dispatch, users_state } = useUserContext();

    const closeModal = () => {
        users_dispatch({ type: actions.SET_VISIBILITY_OF_SUSCRIBE_MODAL, payload: false });
    };

    const formData: FormProps = {
        buttonsData: [
            {
                action: closeModal,
                dispatch: users_dispatch,
                dispatchType: actions.CLEAR_PARAMS,
                type: ButtonTypes.cancel
            },
            {
                action: closeModal,
                objToSave: extractValues(users_state.params),
                saveType: SaveType.save,
                service: Services.users,
                type: ButtonTypes.save
            }
        ],
        formHeader: 'Fill out the fields to subscribe.',
        inputsData: [
            {
                dispatch: users_dispatch,
                dispatchType: actions.SET_FULL_NAME,
                inputType: InputTypes.text,
                label: 'Fullname',
                placeholder: 'Fullname, nickname, etc.',
                value: users_state.params.fullName.value
            },
            {
                dispatch: users_dispatch,
                dispatchType: actions.SET_EMAIL,
                inputType: InputTypes.email,
                label: 'Email',
                placeholder: 'email@example.com',
                value: users_state.params.email.value
            },
            {
                dispatch: users_dispatch,
                dispatchType: actions.SET_CONFIRM_EMAIL,
                inputType: InputTypes.text,
                label: 'Confirm email',
                placeholder: 'email@example.com',
                value: users_state.confirmSubscribe.email.value
            },
            {
                dispatch: users_dispatch,
                dispatchType: actions.SET_PASSWORD,
                inputType: InputTypes.text,
                label: 'Password',
                value: users_state.params.password.value
            },
            {
                dispatch: users_dispatch,
                dispatchType: actions.SET_CONFIRM_PASSWORD,
                inputType: InputTypes.text,
                label: 'Confirm password',
                value: users_state.confirmSubscribe.password.value
            }
        ]
    };

    const modalData: ModalProps = {
        dispatch: users_dispatch,
        dispatchType: actions.SET_VISIBILITY_OF_SUSCRIBE_MODAL,
        launcherElement: ModalLauncherElements.link,
        launcherLabel: `You don't have an account? Sign up`,
        modalBody: <Form data={formData}/>,
        visible: users_state.visibilityOfSuscribeModal
    };

    return (
        <Modal data={modalData}/>
    );
};

export default SuscribeModal;