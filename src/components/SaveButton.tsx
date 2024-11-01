// Common
import services from '../services';
import { SaveButtonDataInterface } from '../interfaces';
import { SweetAlertResult } from 'sweetalert2';

// Resource
import alerts from './alerts';

const { errorAlert, successAlert } = alerts;


const SaveButton = (data: SaveButtonDataInterface) => {
    const {
        objToSave,
        saveType,
        service
    } = data;

    const onClick = async (): Promise<SweetAlertResult<any> | void> => {
        let response;
        if (saveType === 'save') {
            response = await services[service].save(objToSave);
        } else if (saveType === 'update') {
            response = await services[service].update(objToSave);
        } else {
            console.log(`Incorrectly configured 'onClick' button event. Param 'saveType' must be 'save' or 'update'.`);
            return errorAlert('Incorrectly saving configuration. Contact your provider.');
        }
        if (typeof response === 'undefined') return; // service catch error case
        if (!response.ok) errorAlert('Error saving. Try again.');
        successAlert();
    };

    return (
        <button
            className='saveButton'
            onClick={onClick}
        >
            Guardar
        </ button>
    );
};

export default SaveButton;