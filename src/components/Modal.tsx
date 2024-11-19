// Common
import { ButtonProps, ModalData, ModalLauncherElements } from '../interfaces';

// Resource
import Button from './Button';


const Modal = ({ data }: ModalData) => {
    const {
        dispatch,
        dispatchType,
        launcherElement,
        launcherLabel,
        modalBody,
        modalFooter,
        modalTitle,
        renderButtons,
        visible
    } = data;

    const modalButtons = () => {
        if (!renderButtons) return;
        const buttonData: ButtonProps = {
            dispatch,
            dispatchType,
            label: 'Ok'
        };
        return <Button data={buttonData}/>;
    };

    const showModal = () => {
        dispatch({ type: dispatchType, payload: true });
    };

    return (
        <div>
            {
                launcherElement && launcherElement === ModalLauncherElements.link
                    ? (
                        <a
                            onClick={showModal}
                            style={{ cursor: 'pointer' }}
                        >
                            {launcherLabel}
                        </a>
                    )
                    : (
                        <button
                            onClick={showModal}
                            style={{ cursor: 'pointer' }}
                        >
                            {launcherLabel}
                        </button>
                    )
            }
            {
                visible && (
                    <div className='modalBackScreen'>
                        <div className='center'>
                            <div className='container' style={{ marginTop: '7%' }}>
                                <div>
                                    {modalTitle}
                                </div>
                                <div>
                                    {modalBody}
                                    {modalButtons()}
                                </div>
                                <div>
                                    {modalFooter}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Modal;