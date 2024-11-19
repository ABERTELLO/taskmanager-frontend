// Common
import { useNavigate } from 'react-router-dom';
import { SweetAlertResult } from 'sweetalert2';
import { ButtonData, ButtonTypes, Services, SaveType } from '../interfaces';
import services from '../services';

// Resource
import alerts from './alerts';

const { errorAlert, successAlert } = alerts;


const Button = ({ data }: ButtonData) => {
    const {
        action,
        dispatch,
        dispatchType,
        label,
        objToSave,
        redirectPath,
        saveType,
        service,
        type,
        verifyNotEmptyFields
    } = data;
    const navigate = useNavigate();


    const cancel = async (): Promise<SweetAlertResult<any> | void> => {
        if (type !== ButtonTypes.cancel) return;
        if (!dispatch && !dispatchType && !redirectPath) {
            console.log(`No property in 'Button' component.`);
            return errorAlert('Incorrectly configuration. Contact your provider.');
        }
        if (dispatch && dispatchType) dispatch({ type: dispatchType });
        if (redirectPath) navigate(redirectPath);
    };

    const generateButtonLabelAndClassname = () => {
        switch (type) {
            case ButtonTypes.save:
                return { className: 'saveButton', label: label ?? 'Save' };
            case ButtonTypes.cancel:
                return { className: 'cancelButton', label: label ?? 'Cancel' };
            default:
                return { className: 'button', label: label ?? 'Define label' };
        };
    };

    const onClick = () => {
        cancel();
        const verification = notEmptyFieldsVerification();
        if (!verification) return;
        runAction();
        save();
    };

    const runAction = (): void => {
        if (action) action();
    };

    const save = async (): Promise<SweetAlertResult<any> | void> => {
        if (type !== ButtonTypes.save) return;
        if (
            !objToSave
            || !saveType
            || !service
            || service === Services.auth
        ) {
            console.log(`Incorrectly configured 'save' function in 'Button' component. Check props received.`);
            return errorAlert('Incorrectly configuration. Contact your provider.');
        }

        let response;
        if (saveType === SaveType.save) {
            response = await services[service].save(objToSave);
        } else if (saveType === SaveType.update) {
            response = await services[service].update(objToSave);
        } else {
            console.log(`Incorrectly configured 'onClick' button event. Param 'saveType' must be 'save' or 'update'.`);
            return errorAlert('Incorrectly saving configuration. Contact your provider.');
        }
        if (typeof response === 'undefined') return; // service catch error case
        if (!response.ok) errorAlert('Error saving. Try again.');
        successAlert();
    };

    const notEmptyFieldsVerification = (): boolean => {
        if (!dispatch || !verifyNotEmptyFields) return true;

        let allStatus: boolean[] = [];
        for (let index = 0; index < verifyNotEmptyFields.length; index++) {
            const dispatchType = verifyNotEmptyFields[index].dispatchType;
            const value = verifyNotEmptyFields[index].value;

            let payload: boolean;
            if (!value || value.length === 0) payload = false
            else payload = true
            dispatch({ type: dispatchType, payload })

            allStatus.push(payload)
        };

        if (allStatus.includes(false)) return false;
        else return true;
    };


    return (
        <button
            className={generateButtonLabelAndClassname().className}
            onClick={onClick}
        >
            {generateButtonLabelAndClassname().label}
        </ button>
    );
};

export default Button;