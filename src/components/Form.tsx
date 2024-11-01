// Common
import { FormDataInterface } from '../interfaces/form';

// Resource
import CancelButton from './CancelButton';
import Input from './Input';
import SaveButton from './SaveButton';
import Select from './Select';
import TextArea from './TextArea';


const Form = (data: FormDataInterface) => {
    const {
        cancelButtonData,
        formFooterText,
        formHeaderText,
        inputsData,
        saveButtonData,
        selectsData,
        textAreasData
    } = data;


    const buttons = (
        <div className='formButtons'>
            <div>
                <CancelButton
                    dispatch={cancelButtonData.dispatch}
                    dispatchType={cancelButtonData.dispatchType}
                    redirectPath={cancelButtonData.redirectPath}
                />
            </div>
            <div>
                <SaveButton
                    objToSave={saveButtonData.objToSave}
                    saveType={saveButtonData.saveType}
                    service={saveButtonData.service}
                />
            </div>
        </div>
    );

    const generateInputs = () => {
        if (!inputsData) return null
        const inputs = inputsData.map((inputData, index) => {
            const input = (
                <div key={'form_input_' + index}>
                    <Input
                        dispatch={inputData.dispatch}
                        dispatchType={inputData.dispatchType}
                        inputType={inputData.inputType}
                        label={inputData.label}
                        value={inputData.value}
                    />
                </div>
            );
            return input;
        });
        return inputs;
    };

    const generateSelects = () => {
        if (!selectsData) return null
        const selects = selectsData.map((selectData, index) => {
            const select = (
                <div key={'form_select_' + index}>
                    <Select
                        dispatch={selectData.dispatch}
                        dispatchType={selectData.dispatchType}
                        multiple={selectData.multiple}
                        optionsData={selectData.optionsData}
                        value={selectData.value}
                    />
                </div>
            );
            return select;
        });
        return selects;
    };

    const generateTextAreas = () => {
        if (!textAreasData) return null
        const textAreas = textAreasData.map((textAreaData, index) => {
            const textArea = (
                <div key={'form_textarea_' + index}>
                    <TextArea
                        dispatch={textAreaData.dispatch}
                        dispatchType={textAreaData.dispatchType}
                        label={textAreaData.label}
                        rows={textAreaData.rows}
                        value={textAreaData.value}
                    />
                </div>
            );
            return textArea;
        });
        return textAreas;
    };

    const formFields = (
        <div className='formFields'>
            {generateInputs()}
            {generateSelects()}
            {generateTextAreas()}
        </div>
    );


    return (
        <>
            <div className='formHeader'>
                {formHeaderText}
            </div>
            <div className='formBody'>
                {formFields}
                {buttons}
            </div>
            <div className='formFooter'>
                {formFooterText}
            </div>
        </>
    );
};

export default Form;