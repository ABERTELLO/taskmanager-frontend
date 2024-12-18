// Common
import components from '../../../components';
import contexts from '../../../contexts';
import services from '../../../services';
import {
    ButtonTypes,
    FormProps,
    InputTypes,
    ModalLauncherElements,
    ModalProps,
    Services
} from '../../../interfaces';

const { Form, Modal } = components;
const { useUserContext } = contexts;
// const {  } = services;


const UnsuscribeModal = () => {
    const { users_actions, users_dispatch, users_state } = useUserContext();

    const closeModal = () => {
        users_dispatch({
            type: users_actions.SET_VISIBILITY_OF_UNSUSCRIBE_MODAL,
            payload: false
        });
    };

    const escapeAction = () => {
        closeModal();
    };

    const sendEmail = () => {
        console.log('This action send an email.')
        closeModal();
    };

    const formData: FormProps = {
        buttonsData: [
            {
                action: closeModal,
                dispatch: users_dispatch,
                dispatchType: users_actions.CLEAR_PARAMS,
                escapeAction,
                type: ButtonTypes.cancel
            },
            {
                action: sendEmail,
                escapeAction,
                label: 'Send',
                // service: 
            }
        ],
        formHeader: 'You will receive an instruction to unsuscribe.',
        inputsData: [
            {
                autofocus: true,
                dispatch: users_dispatch,
                dispatchType: users_actions.SET_EMAIL,
                escapeAction,
                inputType: InputTypes.email,
                label: 'Email',
                placeholder: 'email@example.com',
                value: users_state.params.email.value
            }
        ]
    };

    const modalData: ModalProps = {
        dispatch: users_dispatch,
        dispatchType: users_actions.SET_VISIBILITY_OF_UNSUSCRIBE_MODAL,
        launcherElement: ModalLauncherElements.link,
        launcherLabel: 'Unsuscribe',
        modalBody: <Form data={formData}/>,
        visible: users_state.visibilityOfUnsuscribeModal
    };

    return (
        <Modal data={modalData}/>
    );
};

export default UnsuscribeModal;