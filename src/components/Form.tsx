// Common
import { FormData } from '../interfaces/form';

// Resource
import Button from './Button';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';


const Form = ({ data }: FormData) => {
    const {
        buttonsData,
        formFooter,
        formHeader,
        inputsData,
        selectsData,
        textAreasData
    } = data;


    const buttons = (
        <div className='formButtons'>
            {
                buttonsData.map((buttonData, index) => {
                    const key = 'formButton_' + index
                    const button = (
                        <div key={key} style={{ textAlign: 'center', width: '40%' }}>
                            <Button data={buttonData}/>
                        </div>
                    )
                    return button
                })
            }
        </div>
    );

    const generateInputs = () => {
        if (!inputsData) return null
        const inputs = inputsData.map((inputData, index) => {
            const input = (
                <div key={'form_input_' + index}>
                    <Input data={inputData}/>
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
                    <Select data={selectData}/>
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
                    <TextArea data={textAreaData}/>
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
        <div className='form'>
            {
                formHeader && (
                    <div className='formHeader'>
                        {formHeader}
                    </div>
                )
            }
            <div className='formBody'>
                {formFields}
                {buttons}
            </div>
            {
                formFooter && (
                    <div className='formFooter'>
                        {formFooter}
                    </div>
                )
            }
        </div>
    );
};

export default Form;