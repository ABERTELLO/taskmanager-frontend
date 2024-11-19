// Common
import components from '../../../components';
import contexts from '../../../contexts';
import services from '../../../services';
import {
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
    const { actions, users_dispatch, users_state } = useUserContext();

    const sendEmail = () => {
        console.log('This action send an email.')

        users_dispatch({ type: actions.SET_VISIBILITY_OF_UNSUSCRIBE_MODAL, payload: false });
    };

    const formData: FormProps = {
        buttonsData: [
            {
                action: sendEmail,
                label: 'Send'
                // service: 
            }
        ],
        formHeader: 'You will receive an instruction to unsuscribe.',
        inputsData: [
            {
                dispatch: users_dispatch,
                dispatchType: actions.SET_EMAIL,
                inputType: InputTypes.email,
                label: 'Email',
                placeholder: 'email@example.com',
                value: users_state.params.email.value
            }
        ]
    };

    const modalData: ModalProps = {
        dispatch: users_dispatch,
        dispatchType: actions.SET_VISIBILITY_OF_UNSUSCRIBE_MODAL,
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