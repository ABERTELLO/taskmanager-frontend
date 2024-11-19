// Resource
import SuscribeModal from './SuscribeModal';
import RestorePasswordModal from './RestorePasswordModal';
import UnsuscribeModal from './UnsuscribeModal';


const FormFooter = () => {

    const footerStyle = {
        width: '100%'
    };

    const registryStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
    };

    const unsuscribeStyle = {
        marginTop: '10px',
        textAlign: 'right' as const,
        width: '100%'
    };


    return (
        <div style={footerStyle}>
            <div style={registryStyle}>
                <div style={{ textAlign: 'left', width: '50%' }}>
                    <RestorePasswordModal />
                </div>
                <div style={{ textAlign: 'right', width: '50%' }}>
                    <SuscribeModal />
                </div>
            </div>
            <div style={unsuscribeStyle}>
                <UnsuscribeModal />
            </div>
        </div>
    );
};

export default FormFooter;