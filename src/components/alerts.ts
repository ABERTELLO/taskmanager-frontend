import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';


const errorAlert = (message: string | null = null): Promise<SweetAlertResult<any>> => {
    const alertProps: SweetAlertOptions = {
        title: 'Error',
        text: message ? message : 'Error saving record.',
        icon: 'error',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Ok'
    };
    const alert = Swal.fire(alertProps);
    return alert;
};

const successAlert = (message: string | null = null): Promise<SweetAlertResult<any>> => {
    const alertProps: SweetAlertOptions = {
        title: 'Success',
        text: message ? message : 'Record saved successfully.',
        icon: 'success',
        confirmButtonText: 'Ok'
    };
    const alert = Swal.fire(alertProps);
    return alert;
};

const alerts = {
    errorAlert,
    successAlert,
};

export default alerts;