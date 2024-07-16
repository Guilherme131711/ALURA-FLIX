import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type="color"] {
        padding-left: 56px;
    }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute; 
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`;

const Input = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus {
        border-bottom-color: var(--primary);
    }

    &:focus:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
    }

    ${({ hasValue }) => {
        return hasValue && css`
           &:not([type='color']) + ${Label.Text} {
                transform: scale(.6) translateY(-10px);
           } 
        `
    }}
`;

const TextArea = styled.textarea`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus {
        border-bottom-color: var(--primary);
    }

    &:focus:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
    }

    ${({ hasValue }) => {
        return hasValue && css`
           &:not([type='color']) + ${Label.Text} {
                transform: scale(.6) translateY(-10px);
           } 
        `
    }}
`;

function FormField({ title, fieldType, type, name, onChange, value, suggestions }){

    const fieldId = `id_${name}`; 
    const isTextArea = fieldType === 'textarea';
    const hasValue = Boolean(value.length);
    const hasSuggestion = Boolean(suggestions.length);

    return (
        <FormFieldWrapper>
            <Label>
                {isTextArea ? (
                    <TextArea 
                        type={type}
                        name={name}
                        onChange={onChange}
                        hasValue={value}
                    />
                ): (
                    <Input 
                        type={type}
                        id={fieldId}
                        name={name}
                        onChange={onChange}
                        hasValue={value}
                        autoComplete={hasSuggestion ? "off" : 'on'}
                        list={hasSuggestion ? `suggestionFor_${fieldId}` : undefined}
                    />       
                )}
                
                <Label.Text>
                    {title}: 
                </Label.Text>

                {hasSuggestion && (
                    <datalist id={`suggestionFor_${fieldId}`}>
                        {
                            suggestions.map((suggestion) => (
                                <option 
                                    value={suggestion} 
                                    key={`suggestionFor_${fieldId}_option${suggestion}`}
                                >
                                    {suggestion}
                                </option>
                            ))
                        }
                    </datalist>
                )}
                
            </Label>
        </FormFieldWrapper>
    );    
}

FormField.defaultProps = {
    type: 'text',
    fieldType: 'input',
    value: '',
    onChange: () => {},
    suggestions: []
};

FormField.propTypes = {
    title: PropTypes.string.isRequired,
    fieldType: PropTypes.string, 
    type: PropTypes.string, 
    name: PropTypes.string.isRequired, 
    onChange: PropTypes.func,
    value: PropTypes.string,
    suggestions: PropTypes.arrayOf(PropTypes.string)
};

export default FormField;