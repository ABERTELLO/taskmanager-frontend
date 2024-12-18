// Common
import { useRef } from 'react';
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
    const { users_actions, users_dispatch, users_state } = useUserContext();
    const confirmEmailInputRef = useRef<HTMLInputElement>(null);
    const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const fullNameInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const saveButtonRef = useRef<HTMLButtonElement>(null);

    const closeModal = () => {
        users_dispatch({
            type: users_actions.SET_VISIBILITY_OF_SUSCRIBE_MODAL,
            payload: false
        });
    };

    const enterAction = (): void => {
        let elementToFocus: HTMLElement;
        if (
            fullNameInputRef.current
            && users_state.params.fullName.value.length === 0
        ) elementToFocus = fullNameInputRef.current;
        else if (
            emailInputRef.current
            && users_state.params.email.value.length === 0
        ) elementToFocus = emailInputRef.current;
        else if (
            confirmEmailInputRef.current
            && users_state.confirmSubscribe.email.value.length === 0
        ) elementToFocus = confirmEmailInputRef.current;
        else if (
            passwordInputRef.current
            && users_state.params.password.value.length === 0
        ) elementToFocus = passwordInputRef.current;
        else if (
            confirmPasswordInputRef.current
            && users_state.confirmSubscribe.password.value.length === 0
        ) elementToFocus = confirmPasswordInputRef.current;
        else if (saveButtonRef.current) elementToFocus = saveButtonRef.current;
        else return;
        elementToFocus.focus();
    };

    const escapeAction = () => {
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
                action: closeModal,
                dispatch: users_dispatch,
                dispatchErrorType: users_actions.SET_SAVE_USER_ERROR,
                escapeAction,
                objToSave: extractValues(users_state.params),
                ref: saveButtonRef,
                saveType: SaveType.save,
                service: Services.users,
                type: ButtonTypes.save,
                verifyNotEmptyFields: [
                    {
                        dispatchType: users_actions.SET_FULL_NAME_STATUS,
                        value: users_state.params.fullName.value
                    },
                    {
                        dispatchType: users_actions.SET_EMAIL_STATUS,
                        value: users_state.params.email.value
                    },
                    {
                        dispatchType: users_actions.SET_CONFIRM_EMAIL_STATUS,
                        value: users_state.confirmSubscribe.email.value
                    },
                    {
                        dispatchType: users_actions.SET_PASSWORD_STATUS,
                        value: users_state.params.password.value
                    },
                    {
                        dispatchType: users_actions.SET_CONFIRM_PASSWORD_STATUS,
                        value: users_state.confirmSubscribe.password.value
                    }
                ]
            }
        ],
        formHeader: 'Fill out the fields to subscribe.',
        inputsData: [
            {
                autofocus: true,
                dispatch: users_dispatch,
                dispatchType: users_actions.SET_FULL_NAME,
                enterAction,
                escapeAction,
                inputType: InputTypes.text,
                label: 'Fullname',
                placeholder: 'fullname, nickname, etc.',
                ref: fullNameInputRef,
                status: users_state.params.fullName.status,
                value: users_state.params.fullName.value
            },
            {
                dispatch: users_dispatch,
                dispatchType: users_actions.SET_EMAIL,
                enterAction,
                escapeAction,
                inputType: InputTypes.email,
                label: 'Email',
                placeholder: 'email@example.com',
                ref:emailInputRef,
                status: users_state.params.email.status,
                value: users_state.params.email.value
            },
            {
                dispatch: users_dispatch,
                dispatchType: users_actions.SET_CONFIRM_EMAIL,
                enterAction,
                escapeAction,
                inputType: InputTypes.text,
                label: 'Confirm email',
                placeholder: 'email@example.com',
                ref: confirmEmailInputRef,
                status: users_state.confirmSubscribe.email.status,
                value: users_state.confirmSubscribe.email.value
            },
            {
                dispatch: users_dispatch,
                dispatchType: users_actions.SET_PASSWORD,
                enterAction,
                escapeAction,
                inputType: InputTypes.text,
                label: 'Password',
                ref:passwordInputRef,
                status: users_state.params.password.status,
                value: users_state.params.password.value
            },
            {
                dispatch: users_dispatch,
                dispatchType: users_actions.SET_CONFIRM_PASSWORD,
                enterAction,
                escapeAction,
                inputType: InputTypes.text,
                label: 'Confirm password',
                ref: confirmPasswordInputRef,
                status: users_state.confirmSubscribe.password.status,
                value: users_state.confirmSubscribe.password.value
            }
        ]
    };

    const modalData: ModalProps = {
        dispatch: users_dispatch,
        dispatchType: users_actions.SET_VISIBILITY_OF_SUSCRIBE_MODAL,
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