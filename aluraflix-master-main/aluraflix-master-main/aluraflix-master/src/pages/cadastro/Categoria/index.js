import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageRoot';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria(){
    const valoresInicias = {
        titulo: '',
        descricao: '',
        cor: ''
    }

    const { values, handleChange, clearForm } = useForm(valoresInicias);
    const [categorias, setCategorias] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        setCategorias([
            ...categorias, 
            values
        ]);

        clearForm();
    }

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost') 
        ? 'http://localhost:3333/categorias'
        : 'https://alura-flix-joaocfn.herokuapp.com/categorias';
        fetch(URL)
        .then(reponse =>  reponse.json())
        .then(data => {
            setCategorias([
                ...data
            ]);
        })

    }, [])

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.titulo}</h1> 

            <form onSubmit={handleSubmit}>

                <FormField 
                    title="Título da categoria"
                    fieldType="input"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField 
                    title="Descrição"
                    fieldType="textarea"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    title="Cor"
                    fieldType="input"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.titulo}`}>
                        {categoria.titulo}
                    </li>
                ))}
            </ul>

            {categorias.map(categoria1 =>{
                console.log(categoria1.titulo)
            })}

            <Link to="/">
                ir para a home  
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;