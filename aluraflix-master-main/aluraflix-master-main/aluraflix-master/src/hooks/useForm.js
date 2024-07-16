import { useState } from 'react';

function useForm(valoresInicias){
    const [values, setValues] = useState(valoresInicias);

    function handleChange(event){
        setValue(
            event.target.getAttribute('name'), 
            event.target.value
        );
    }

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function clearForm(){
        console.log(valoresInicias)
        setValues(valoresInicias);
    }

    return {
        values,
        handleChange,
        clearForm
    };
}

export default useForm;

